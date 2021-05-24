# kaholo-plugin-dynatrace
Kaholo integration with Dynatrace API

## Settings:
1. Server URL (String) **Optional** - The full URL to your Dynatrace default server.
2. API Token (Vault) **Optional** - The api token of the default user to authenticate with.

## Method: Get Events
This method returns data about the events specified.

### Parameters:
1. Server URL (String) **Optional** - The full URL to the Dynatrace server to get problems feed from.
2. API Token (Vault) **Optional** - The api token of the user to authenticate with.
3. Relative Time (Options) **Optional** - Return only problems from the timeframe selected. Default value is one day.
4. Closed (Options) **Optional** - Whether to return closed/open/both problems. default value is both.
5. Impact Level (Options) **Optional** - Filters the result problems by the impact level. Default value is all.
6. Severity Level (Options) **Optional** - Filters the result problems by the severity level. Default value is All.
7. Tags (Text/Array) **Optional** - If specified then get info only about events with matching tags.
8. Include Related (Boolean) **Optional** - If true then return also details about related objects.