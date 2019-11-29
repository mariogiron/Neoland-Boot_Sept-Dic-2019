from justwatch import JustWatch
import json

just_watch = JustWatch(country='ES')

provider_details = just_watch.get_providers()

for provider in provider_details:
    results = just_watch.search_for_item(providers=[provider['short_name']])
    print()
    print()
    print(provider['technical_name'])
    for item in results['items']:
        print(item['title'])
# for item in results['items']:
    # print(item['title'])