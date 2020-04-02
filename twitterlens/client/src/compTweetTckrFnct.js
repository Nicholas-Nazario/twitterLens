// import nasdaqTkr from '.src/nasdaq.js'

/*
compToTkr takes in a company name (string) and the hashtable of
stored company information  searchtable[company] = [@twitterhandle, stock ticker]
returns: tkr if successful (string)
returns: "Company either misspelled or not in nasdaq 100" if not successful
*/
function compToTkr(company, searchTable){
    if (searchTable[company.toLowerCase()] != null){
        return searchTable[company.toLowerCase()][1];
    }
    return "Company either misspelled or not in nasdaq 100"
}

function compToTwitter(company, searchTable){
    if (searchTable[company.toLowerCase()] != null){
        return searchTable[company.toLowerCase()][0];
    }
    return "Company either misspelled or not in nasdaq 100"
}


/*
tweetToTkr takes in a tweet and the same hashtable of stored company information
searchtable[company] = [@twitterhandle, stock ticker]
*/
function tweetToTkr(tweet, searchTable) {

    var nasdaq = searchTable

    var i;
    //list of companies' twitter handles extracted from the tweet
    companies = [];
    //list of corresponding stock tickers if twitter handle is correlated with a company
    companyTickers = [];

    //Initial loop searching for the beginning of a mention
    for (i = 0; i < tweet.length; i++) {
        if (tweet[i] != "@") { continue; }

        i++;
        var company = "";
        while (tweet && tweet[i] != " " && i < tweet.length && tweet[i] != "@") {
            company += tweet[i]
            i++;
        }

        //if mentions have no spaces between them allows for both companies to be recognized
        if (tweet[i] == "@") i--;

        companies.push(company)
    }

    //this loop searches through the provided search table for a corresponding tickr
    for (i = 0; i < companies.length; i++) {
        if (nasdaq[companies[i].toLowerCase()] != null){
            companyTickers.push(nasdaq[companies[i].toLowerCase()]);
        }
    }
    console.log(companyTickers)
    return companyTickers;
}

// Current temp solution can't get Hash Table passed in

var nasdaqTkr = {}

// nasdaqTkr 100 as of December 23rd 2019

//GOOGL AND GOOG 16/17   | 55/56    |  68/69   |80 Netease has 2 twitters@Netease_Games and @newsbynetease
//Not sure about charter Communcations 36

nasdaqTkr['atvi_ab'] = 'ATVI'                  //Activision Blizzard
nasdaqTkr['adobe'] = 'ADBE'                    //Adobe
nasdaqTkr['amd'] = 'AMD'                       //Advanced Micro Devices
nasdaqTkr['alexionpharma'] = 'ALXN'            //Alexion Pharmaceuticals
nasdaqTkr['aligntechinc'] = 'ALGN'             //Align Technology
nasdaqTkr['alphabetinc'] = 'GOOGL'             //Alphabet Inc (class A)
// nasdaqTkr[''] = 'GOOG'                         //Alphabet Inc (class C)
nasdaqTkr['amazon'] = 'AMZN'                   //Amazon
nasdaqTkr['americanair'] = 'AAL'               //American Airlines
nasdaqTkr['amgen'] = 'AMGN'                    //Amgen
nasdaqTkr['adi_news'] = 'ADI'                  //Analog Devices
nasdaqTkr['ansys'] = 'ANSS'                    //ANSYS
nasdaqTkr['apple'] = 'AAPL'                    //Apple
nasdaqTkr['applied4tech'] = 'AMAT'             //Applied Materials
nasdaqTkr['asmlcompany'] = 'ASML'              //ASML Holding
nasdaqTkr['autodesk'] = 'ADSK'                 //Autodesk
nasdaqTkr['adp'] = 'ADP'                       //Automatic Data Processing
nasdaqTkr['baidu_inc'] = 'BIDU'                //Baidu.com
nasdaqTkr['biogen'] = 'BIIB'                   //Biogen
nasdaqTkr['biomarin'] = 'BMRN'                 //BioMarin Pharmaceutical
nasdaqTkr['bookingholdings'] = 'BKNG'          //Booking Holdings
nasdaqTkr['broadcom'] = 'AVGO'                 //Broadcom
nasdaqTkr['cadence'] = 'CDNS'                  //Cadence Design Systems
nasdaqTkr['cdwcorp'] = 'CDW'                   //CDW
nasdaqTkr['cerner'] = 'CERN'                   //Cerner
// nasdaqTkr[''] = 'CHTR'                         //Charter Communications
nasdaqTkr['checkpointsw'] = 'CHKP'             //Check Point software Technologies
nasdaqTkr['cintascorp'] = 'CTAS'               //Cintas 
nasdaqTkr['cisco'] = 'CSCO'                    //Cisco Systems
nasdaqTkr['citrix'] = 'CTXS'                   //Citrix Systems
nasdaqTkr['cognizant'] = 'CTSH'                //Cognizant Technology Solutions Corporation
nasdaqTkr['comcast'] = 'CMCSA'                 //Comcast Corporation
nasdaqTkr['copart'] = 'CPRT'                   //Copart
nasdaqTkr['thecostargroup'] = 'CSGP'           //CoStar Group
nasdaqTkr['costco'] = 'COST'                   //Costco Wholesale
nasdaqTkr['csx'] = 'CSX'                       //CSX
nasdaqTkr['dollartree'] = 'DLTR'               //Dollar Tree
nasdaqTkr['ebay'] = 'EBAY'                     //eBay
nasdaqTkr['ea'] = 'EA'                         //Electronic Arts
nasdaqTkr['exelon'] = 'EXC'                    //Exelon
nasdaqTkr['expedia'] = 'EXPE'                  //Expedia
nasdaqTkr['facebook'] = 'FB'                   //Facebook
nasdaqTkr['fastenalcompany'] = 'FAST'          //Fastenal Company
nasdaqTkr['fiserv'] = 'FISV'                   //Fiserv
nasdaqTkr['foxtv'] = 'FOXA'                    //Fox Corporation(class A)
// nasdaqTkr[''] = 'FOX'                          //Fox Corporation (class B)
nasdaqTkr['gileadsciences'] = 'GILD'           //Gilead Sciences
nasdaqTkr['idexx'] = 'IDXX'                    //IDEXX Laboratories
nasdaqTkr['ilumina'] = 'ILMN'                  //Illumina
nasdaqTkr['incyte'] = 'INCY'                   //Incyte
nasdaqTkr['intel'] = 'INTC'                    //Intel
nasdaqTkr['intuit'] = 'INTU'                   //Intuit
nasdaqTkr['intuitivesurg'] = 'ISRG'            //Intuitive Surgical Inc
nasdaqTkr['jd_corporate'] = 'JD'               //JD.com
nasdaqTkr['klacorp'] = 'KLAC'                  //KLA Corporation
nasdaqTkr['kraftheinzco'] = 'KHC'              //Kraft Heinz
nasdaqTkr['lamresearch'] = 'LRCX'              //Lam Research
nasdaqTkr['libertyglobal'] = 'LBTYA'           //Liberty Global (class A)
// nasdaqTkr[''] = 'LBTYK'                        //Liberty Global (class C)
nasdaqTkr['lululemon'] = 'LULU'                //Lululemon athletica
nasdaqTkr['marriotintl'] = 'MAR'               //Marriot International
nasdaqTkr['maximintegrated'] = 'MXIM'          //Maxim Integrated Products
nasdaqTkr['mercadolibre'] = 'MELI'             //MercadoLibre
nasdaqTkr['microchiptech'] = 'MCHP'            //Microchip Technology
nasdaqTkr['microntech'] = 'MU'                 //Micron Technology
nasdaqTkr['microsoft'] = 'MSFT'                //Microsoft Corporation
nasdaqTkr['mdlz'] = 'MDLZ'                     //Mondelez International
nasdaqTkr['monsterenergy'] = 'MNST'            //Monster Beverage Corporation
nasdaqTkr['netappcloud'] = 'NTAP'              //NetApp
nasdaqTkr['neteaseofficial'] = 'NTES'          //NetEase
nasdaqTkr['netflix'] = 'NFLX'                  //Netflix
nasdaqTkr['nvidia'] = 'NVDA'                   //NVIDIA Corporation
nasdaqTkr['nxp'] = 'NXPI'                      //NXP Semiconductors N.V
nasdaqTkr['oreillyauto'] = 'ORLY'              //O'Reilly Automotive
nasdaqTkr['paccar'] = 'PCAR'                   //PACCAR Inc
nasdaqTkr['paychex'] = 'PAYX'                  //Paychex, Inc
nasdaqTkr['paypal'] = 'PYPL'                   //PayPal Holdings, Inc
nasdaqTkr['pepsico'] = 'PEP'                   //PepsiCo, Inc
nasdaqTkr['qualcomm'] = 'QCOM'                 //QUALCOMM Incorporated
nasdaqTkr['regeneron'] = 'REGN'                //Regeneron Pharmaceuticals
nasdaqTkr['ross_stores'] = 'ROST'              //Ross Stores inc
nasdaqTkr['seattlegenetics'] = 'SGEN'          //Seattle Genetics
nasdaqTkr['siriusxm'] = 'SIRI'                 //Sirius XM Radio, Inc
nasdaqTkr['skyworksinc'] = 'SWKS'              //Skyworks Solutions, inc
nasdaqTkr['splunk'] = 'SPLK'                   //Splunk
nasdaqTkr['starbucks'] = 'SBUX'                //Starbucks Corporation
nasdaqTkr['synopsys'] = 'SNPS'                 //Synopsys Inc
nasdaqTkr['tmobile'] = 'TMUS'                  //T-Mobile US
nasdaqTkr['take2interactiv'] = 'TTWO'          //Take-Two Interactive, inc
nasdaqTkr['tesla'] = 'TSLA'                    //Tesla, Inc
nasdaqTkr['txinstruments'] = 'TXN'             //Texas Instruments, inc
nasdaqTkr['trip'] = 'TCOM'                     //Trip.com Group
nasdaqTkr['ultabeauty'] = 'ULTA'               //Ulta Beauty
nasdaqTkr['united'] = 'UAL'                    //United Airlines Holdings
nasdaqTkr['verisign'] = 'VRSN'                 //VeriSign
nasdaqTkr['verisk'] = 'VRSK'                   //Verisk Analytics
nasdaqTkr['vertexpharma'] = 'VRTX'             //Vertex Pharmaceuticals
nasdaqTkr['allianceboots'] = 'WBA'             //Walgreens Boots Alliance, inc
nasdaqTkr['workday'] = 'WDAY'                  //Workday, Inc
nasdaqTkr['westerndigital'] = 'WDC'            //Western Digital
nasdaqTkr['wtwcorporate'] = 'WLTW'             //Willis Towers Watson
nasdaqTkr['xcelenergy'] = 'XEL'                //Xcel Energy, Inc
nasdaqTkr['xilinxinc'] = 'XLNX'                //Xilinx, inc

//End of loading temporary hash table for tweetToTickr test

// tweetToTkr("the latest news about @united airlines will have you @westerndigital@workday shaking in your boots @Tesla", nasdaqTkr);
// returns: [ 'UAL', 'WDC', 'WDAY', 'TSLA' ]

