# AscendMetrics2

## Roadmap

Goal: By 1/1/26, have 12 consistent users reporting sessions and performance/injury on this react/firebase PWA.

- Week 1: set up firebase/react app w/ hosted connectivity test cell + wifi
- Week 2: display rows of historical dummy data
- Week 3: database w/ dummy data
- Weeks 4-5: multiple users w/ authentication
- Weeks 6-7: CRUD rows
- Weeks 7-8: workload balance visualization
- Weeks 8-9: recruit testers
- Week 10: straing visualization toggle off/on
- Week 11: performance data collection
- Week 12: row auto-fill

## Set Up

### Install Firebase

- Mac OS: sudo curl -sL httpsL..forebase.tools | bash
- Log in to system admin when prompted
- Log in to firebase when prompted (browser should pop up)
- Select existing firebse project from list (if not set up, see above (to be made) Firebase Set Up)
- Select a project directory (AscendMetrics2 directory)
- Run: firebase init
- Select/Enter for default project set up
- Select 'Hosting' product only

## Commands

## Run locally (not configured)

Run: npm run dev
Note: run this from the react-ts directory

## Deploy to firebase

Run: firebase deploy
Note: (not configured) google analytics

# Relevant Documentation

https://firebase.google.com/docs
https://react.dev
https://vite.dev/guide
https://www.material-react-table.com
https://mui.com
https://github.com/firebase/firebaseui-web/issues/1144
https://github.com/firebase/firebaseui-web/tree/v7-alpha/examples/react
