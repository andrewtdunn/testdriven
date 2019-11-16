#!/bin/sh

if [ -z "$TRAVIS_PULL_REQUEST" ] || [ "$TRAVIS_PULL_REQUEST" == "false" ]
then

    if [ "$TRAVIS_BRANCH" == "production" ]
    then

        JQ="jq --raw-output --exit-status"

        configure_aws_cli() {
            aws --version
            aws configure set default.region us-east-1
            aws configure set default.output json
            echo "AWS Configured!"
        }

        register_definition() {
            if revision=$(aws ecs register-task-defintion --cli-input-json "$task_def" | $JQ '.taskDefinition.taskDefinitionArn') ; then
                echo "Revision: $revision"
            else
                echo "Failed to register task definition"
                return 1
            fi
        }

        deploy_cluster() {
            # users
            template="ecs_users_prod_taskdefinition.json"
            task_template=$(cat "ecs/$template")
            task_def=$(printf "$task_template" $AWS_ACCOUNT_ID $AWS_RDS_URI $PRODUCTION_SECRET_KEY)
            echo "$task_def"
            register_definition

            # client
            template="ecs_client_prod_taskdefinition.json"
            task_template=$(cat "ecs/$template")
            task_def=$(printf "$task_template" $AWS_ACCOUNT_ID)
            echo "$task_def"
            register_definition

            # users
            template="ecs_swagger_prod_taskdefinition.json"
            task_template=$(cat "ecs/$template")
            task_def=$(printf "$task_template" $AWS_ACCOUNT_ID)
            echo "$task_def"
            register_definition
        }
    fi
fi