# Service Masterdata
## _Middleware to update entities on VTEX Masterdata_

After a release note about [dynamic setting deprecation on master data v1](https://help.vtex.com/en/announcements/master-data-v1-dynamic-settings-deprecation--4a1FZX8wGeHLcOyMg0egg8), VTEX will disable **Calculated field** and **Change field value trigger**.

You can follow this documentation to create a [Master Data CRUD app](https://developers.vtex.com/docs/guides/create-master-data-crud-app) or use this one.

This app was built using [this service-example](https://github.com/vtex-apps/service-example?tab=readme-ov-file) to run simple updates on masterdata entities by triggers.
This mean you can:
- create a rule and make a request to an app endpoint
- update private fields
- fork this repo to use this app as template and make your own customization

## Installation

We recommend you first link this app to a dev workspace to test. You can use the postman or another API tool.
Then, proceeed to production environment.

You must config the `.env` file with your credentials.

## Using this app

This app receives a http request from the trigger, so you need to configure this as a PATCH and the endpoint is
``
https://{{accountName}}.myvtex.com/_v/masterdata/{{entityacronym}}/
``

The request body must be
```sh
{
  "documentId": "{!id}", 
  "updateData": {
    "field1": value,
    "fieldn": value
  }
}
```
