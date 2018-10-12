# devspace-2018-talk

Step 1: Register for an AWS account.

https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/

Step 2: install serverless and angular

npm i -g serverless @angular/cli

Step 3: setup aws keys

https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html

Step 4: deploy the backend

cd simply_backend
sls deploy

Step 5: configure environemnt variabls

get cognito user pool id, app id, and api endpoint from aws console and update the frontend/environments files.

Step 6: run the front end
cd frontend
ng serve
