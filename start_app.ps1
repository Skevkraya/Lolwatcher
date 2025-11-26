Start-Process powershell -ArgumentList "cd frontend; npm run dev"
Start-Process powershell -ArgumentList "cd backend; npx nodemon src/index.ts"
