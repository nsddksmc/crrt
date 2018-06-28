function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5uQkg8XUpSb":
        Script1();
        break;
      case "5jXJ1pMfL1A":
        Script2();
        break;
      case "6mwCAVNDwDP":
        Script3();
        break;
      case "5bUPpzBBgp7":
        Script4();
        break;
      case "6JETl061oCB":
        Script5();
        break;
      case "6jWavavcuzi":
        Script6();
        break;
      case "6AzIfgTRenL":
        Script7();
        break;
      case "5tWfclH5UiB":
        Script8();
        break;
      case "6DQ5iLqt4Fo":
        Script9();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script8()
{
  $("#tab-customlink").show();
}

function Script9()
{
  window.print();
}

