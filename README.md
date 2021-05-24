# kaholo-plugin-dynatrace
Kaholo integration with Dynatrace API

## Settings:
1. Server URL (String) **Optional** - The full URL to your Dynatrace default server.
2. API Token (Vault) **Optional** - The api token of the default user to authenticate with.

## Method: Get Event
This method returns data about the event specified.

### Parameters:
1. Server URL (String) **Optional** - The full URL to the Dynatrace server to get problems feed from.
2. API Token (Vault) **Optional** - The api token of the user to authenticate with.
3. Event ID (String) **Required** - The ID of the event to get data about.