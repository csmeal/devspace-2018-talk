import json
import os
import boto3
dynamodb = boto3.resource('dynamodb')
from boto3.dynamodb.conditions import Key, Attr


def create_200_response(message):
    print('asdf')
    headers = {
        # Required for CORS support to work
        'Access-Control-Allow-Origin': '*',
        # Required for cookies, authorization headers with HTTPS
        'Access-Control-Allow-Credentials': True,
    }
    return create_aws_lambda_response(200, {'message': message}, headers)


def create_200_body(body):
    headers = {
        # Required for CORS support to work
        'Access-Control-Allow-Origin': '*',
        # Required for cookies, authorization headers with HTTPS
        'Access-Control-Allow-Credentials': True,
    }
    return create_aws_lambda_response(200, body, headers)


def create_aws_lambda_response(status_code, message, headers):
    return {
        'statusCode': status_code,
        'headers': headers,
        'body': json.dumps(message)
    }


def response(message, status_code):
    body = {
        'message': message
    }
    return {
        'statusCode': status_code,
        'body': json.dumps(body),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        }
    }


def vote(event, context):
    print('sssss')
    return create_200_response('Succesffuly voted')
    print(event)
    print(context)
    if 'bakerName' in event:
        req = event
    else:
        req = json.loads(event['body'])

    print('req', req)

    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    res = table.put_item(Item={
        'bakerName': req['bakerName'],
        'rating': req['rating'],
        'userId': req['userId']
    })

    return create_200_response('Succesffuly voted')


def get_rating(event, context):
    print('mmmmm')
    return create_200_response('Results:')
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])
    res = table.scan()
    all_bake = {}
    for item in res['Items']:
        print(item)
        name = item['bakerName']
        print(name)
        if name in all_bake:
            all_bake[name]['rating_total'] += item['rating']
            all_bake[name]['count'] += 1
        else:
            all_bake[name] = {}
            all_bake[name]['count'] = 1
            all_bake[name]['rating_total'] = item['rating']

    print(all_bake)
    results = []
    for key, value in all_bake.items():
        print(value)
        print(key)
        print(all_bake[key]['count'])
        avg = all_bake[key]['rating_total'] / all_bake[key]['count']
        print(str(avg))
        results.append({'baker': key, 'average': avg})

    return create_200_response('results')
