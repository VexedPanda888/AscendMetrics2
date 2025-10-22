// TODO:
// GetOrCreateUserData - occurs on user sign in
// CreateActivityData - occurs on new activity creation
// GetActivityDataForUser - occurs on user sign in
// UpdateActivityData - occurs on activity data edit
// DeleteActivityData - occurs on activity data deletion

import { type ActivityData } from "../types/ActivityData";
import { db } from "./firebase";
import {
  doc,
  deleteDoc,
  query,
  collection,
  getDocs,
  addDoc,
  orderBy,
  setDoc,
} from "firebase/firestore";

export async function createActivityData(
  activityData: ActivityData
): Promise<void> {
  try {
    const docRef = await addDoc(collection(db, "activities"), activityData);
    console.log("Activity created with ID:", docRef.id);
  } catch (error) {
    console.error("Error creating activity data:", error);
    throw error;
  }
}

export async function getActivityDataForUser(
  userId: string
): Promise<ActivityData[]> {
  try {
    const activitiesRef = collection(db, "activities");
    const q = query(activitiesRef, orderBy("date", "desc"));
    const snapshot = await getDocs(q);

    const activities = snapshot.docs.map((doc) => doc.data() as ActivityData);

    return activities;
  } catch (error) {
    console.error(`Error fetching activities for user ${userId}:`, error);
    return [];
  }
}

export async function updateActivityData(
  activityData: ActivityData
): Promise<void> {
  try {
    await setDoc(doc(db, "activities", activityData.id), activityData);
    console.log("Activity updated:", activityData.id);
  } catch (error) {
    console.error("Error updating activity data:", error);
    throw error;
  }
}

export async function deleteActivityData(activityId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, "activities", activityId));
    console.log("Activity deleted:", activityId);
  } catch (error) {
    console.error("Error deleting activity data:", error);
    throw error;
  }
}
