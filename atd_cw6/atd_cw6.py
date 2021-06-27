import requests

headers = 'Content-Type: application/json'
url = 'http://localhost:8087/buckets/s14164'
key = '/keys/Nowak'
p1 = { 
	'surname': 'Nowak', 
	'name': 'John',
	'sex': 'Male', 
	'characteristic': { 
		'height': '180', 
		'weight': '86', 
		'eyecolour': 'green'
		}
}
p2 = { 
	'surname': 'Nowak', 
	'name': 'Amy',
	'sex': 'Female', 
	'characteristic': { 
		'height': '166', 
		'weight': '71', 
		'eyecolour': 'blue'
		}
}

req1 = requests.put(url + key, json=p1)
print("Response: ", req1.status_code, "   -------Create document p1")

req2 = requests.get(url + key, headers)
print("Response: ", req2.status_code, "   -------Get document: ", req2.json(),'\n')

req3 = requests.put(url + key, json=p2)
print("Response: ", req3.status_code, "   -------Create document p2")

req4 = requests.get(url + key, headers)
print("Response: ", req4.status_code, "   -------Get modified document: ", req4.json(),'\n')

req5 = requests.delete(url + key)
print("Response: ", req5.status_code, "   -------Delete document")

req6 = requests.get(url + key, headers)
print("Response: ", req6.status_code, "   -------Get deleted document")
if req6.status_code == 404:
	print ("Error when displaying document")
else:
	print(req6.json())
