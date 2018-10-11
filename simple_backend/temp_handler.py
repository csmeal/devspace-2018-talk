import json
import os
import boto3
dynamodb = boto3.resource('dynamodb')
from boto3.dynamodb.conditions import Key, Attr


def vote(event, context):

    req = json.loads(event['body'])

    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    res = table.put_item(Item={
        'bakerName': req['bakerName'],
        'rating': req['rating']
    })

    # print(res)
    return response('Successfully voted!', 200)


def response(message, status_code):
    body = {
        'message': message
    }
    return {
        'statusCode': status_code,
        'body': json.dumps(body)  # ,
        # 'headers': {
        #     'Content-Type': 'application/json',
        #     'Access-Control-Allow-Origin': '*'
        # },
    }
