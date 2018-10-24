This CLI app takes you through a typical interaction with simple purchases withint bamazon.

1/ You are presented with the list of files to pick from (dependencies already installed)
(this is file.jpeg)

2/ Next the initial start up screen (storefrontwith1stprompt.jpeg)
    This displays a short banner followed by a table where all of the data for the store is displayed
    Under the table is the first promt requesting the item id you would like to purchase.

3/ Next the use case where item 5 is selected (pickitem5with2ndprompt.jpeg)
    Shows item 5 is selected and the next prompt requesting a quantity is displayed.

4/ Next in the same use case 45 units are picked (finalsaledatawithfinalprompt.jpeg)
    A console log displays the end of the transaction.
    Below that, the terminal displays the sales total.
    Finally, there is a promt asking if you would like to make another sale.

5/ Next the use case where yes is answered to the question of another sale (yesrouteWithUpdatedData.jpeg)
    Displayed is the same banner information as before.
    Below this is an **updated** table where the lowered number of units is shown.
    The user is then reprompted for an item id.

6/ Next in the use case where the user requests more (item 5) units (10 additional) than are in stock (insufficientQuantityAlertYesRoute.jpeg)
    Displays a console log stating insufficient quantity
    Below is a reprompt of whether or not the user wants to make another purchase

7/ Finally the use case where the user does not want to make a purchase (noRouteClosing.jpeg)
    Closes the app