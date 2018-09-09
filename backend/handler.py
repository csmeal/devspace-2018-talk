import json
import os
import boto3
dynamodb = boto3.resource('dynamodb')
from boto3.dynamodb.conditions import Key, Attr


def vote(event, context):
    if 'body' not in event:
        return response('No body in event', 500)
    req = json.loads(event['body'])
    if 'rating' not in req or 'userId' not in req or 'talkName' not in req:
        return response('Must provide all required fields.', 400)

    if req['rating'] > 5 or req['rating'] < 1:
        return response('Nice try.  Rating must be between 1 and 5', 400)
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    # fetch todo from the database
    result = table.get_item(
        Key={
            'userId': req['userId'],
            'talkName': req['talkName']
        }
    )

    if 'Item' in result:
        return response('User already voted!', 200)

    res = table.put_item(Item={
        'userId': req['userId'],
        'talkName': req['talkName'],
        'rating': req['rating']
    })

    print(res)
    return response('Successfully voted!', 200)
    # Use this code if you don't use the http event with the LAMBDA-PROXY
    # integration
    '''
        return {
            'message': 'Go Serverless v1.0! Your function executed successfully!',
            'event': event
        }
        '''


def get_rating(event, context):
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])
    req = json.loads(event['body'])
    response = table.query(
        KeyConditionExpression=Key('talkName').eq(req['talkName'])
    )

    body = {
        'message': 'succcess?',
        'data': response
    }

    return {
        'statusCode': 200,
        'body': json.dumps(body)
    }


def hello(event, context):
    return response('Hi!', 200)
    # body = {
    #     'message': 'Go Serverless v1.0! Your function executed successfully!',
    #     'input': event
    # }

    # response = {
    #     'statusCode': 200,
    #     'body': json.dumps(body)
    # }

    # return response


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
