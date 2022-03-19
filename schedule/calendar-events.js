/*
format: [["DATE CODE", "EVENT INFO", "REPEAT CODE"],...]
DATE CODE = "m-d-y"
EVENT INFO is what goes in the table cell in the calendar and under the event name in the list. It is raw HTML code, so plain text or tags can be used
  
REPEAT CODE key: 
"0" = never repeat, otherwise "n-m-d-y" 
n = number of repeats, including the first occurrence
m = how many months
d = how many days, y = how many years
"5-1-0-0" would be repeat once every month for five months
"4-0-7-0" would repeat every week for four weeks
If an event's repeat code isn't "0" it won't be on the list-- repeating events aren't listed, just on the calendar. To exclude a non-repeating even from the list, use "0-0-0-0"
*/

var events = [
  ["9-10-2019","<b>First meeting</b><br>", "0"],
  ["10-31-2019","Spooky Time","0"],
  ["11-11-2019","Wish Matt a happy birthday :)","80-0-0-1"],
  ["12-11-2019","<b>Pizza Resource Night</b>","0"],
  ["12-14-2019","<b>Portage Invitational</b>","0"],
  ["1-18-2020","<b>Haslett Invitational</b><br><span style='color: red'>TO WEATHER, MOVED TO 2-29</span>","0"],
  ["2-1-2020","<b>WOSO Invitional</b><br>If we do it, only one team will go","0"],
  ["2-7-2020","<b>Frankenmuth Invitational</b><br>Staying night in hotel Friday night, competition Saturday","0"],
  ["2-8-2020","<b>Frankenmuth Invitational</b><br>Staying night in hotel Friday night, competition Saturday","0"],
  ["2-22-2020","<b>Allendale Invitational</b>","0"],
  ["2-29-2020","<b>Haslett Invitational</b>","0"],
  ["3-21-2020","<b>WMU - Regionals</b>","0"],
  ["4-25-2020","<b>States</b><br>If we make it top 17 kids go. You can leave early after your events for prom.","0"],
  ["12-6-1965", "Mr. Allan's most recent birth certificate was forged", "0"],
  ["12-6-2020", "Tell the fossilized calc teacher happy birthday", "0"],

  ["1-29-2022", "<b>Haslett Invitational</b>", "0"],
  ["2-12-2022", "<b>Frankenmuth Invitational</b><br>Leave at 5:30 AM and return at 8:30 PM. Not spending the night", "0"],
  ["3-19-2022", "<b>Regionals at WMU</b>", "0"],
  ["5-3-2022", "<b>States</b>", "0"],
  ["11-13-2021", "Practice 9AM-12PM", "2-0-7-0"],
  ["12-4-2021", "Practice 9AM-12PM", "0-0-0-0"],
  //["1-8-2022", "Practice 9AM-12PM", "2-0-7-0"],
  ["11-18-2021", "Practice 3PM-5PM", "0-0-0-0"],
  ["12-2-2021", "Practice 3PM-5PM", "3-0-7-0"],
  ["1-6-2022", "Practice 3PM-5PM", "11-0-7-0"]
];

// having old events on the calendar keeps a historical record but is definitely not a necessity. Delete if there are so many it gets confusing
