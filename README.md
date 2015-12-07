# readAndOuputJsonWithNode
A node utility that reads JSON that represents DB table data and converts that JSON into a particular dataset format

####Pre-requisites
You will need to install Node to run the utility. I use chocolatey where available:

choco install nodejs.install

##Creating the data:
We need to export data from a DB table in JSON format. There is a utility for this built into SQL developer which allows the user to export chosen data as JSON. I have tested this and it does export the data in JSON format but the JSON that it creates is not in a valid format. 

To get the JSON exported in correct format we can use another utility in SQL developer. If we have a standard table named: PERSON we can use the following statement export the data to JSON.

SELECT /*json*/ * from PERSON;

If you need to limit the data to be exported you can just add extra where clauses:

SELECT /*json*/ * from PERSON where first_name ='joe';

The above statement will create JSON in the following format [here](input.json)

**Note:** When running the above statements in SQL developer you need to run the statements using F5. If you click on the "Run Statement" button it will not create the json output.

##Utility installation
Run the below command to install globally. This will install the files checked into this project on GITHUB and allow us to run the utility using the keyword: convertjsontodataset

npm install markquinn12/readAndOuputJsonWithNode -g

##Utility usage
- Copy the JSON data to a file named input.json. You can save this file anywhere you wish
- Open the command prompt in the directory where you saved the input.json file.
- Run the following command, remembering to give the name of the TABLE you want to create as an argument.
convertjsontodataset PERSON
- This will then create an output.txt file in the same directory similar to this [sample](output.txt)
- Done!

**Note:** If you do not specify a table name when running the command the utility will create each line of data with the name "DEFAULT_TABLE"
