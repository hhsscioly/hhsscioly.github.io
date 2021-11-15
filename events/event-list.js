/*
GUIDE TO THE EVENT LIST


Each item of the 'events' list is a list, containing these items:
["url", "name", "category", "type", "resourceId", running]

url is a string, it's the name with spaces replaced with dashes and no non-letter characters

name is the name as the string, with all the formatting, just as it should appear on the page

category is a a string, either "test", "build", "lab", or "hybrid". This should be given in the event rules

type is a string giving the area the event is for, which should be given at soinc.org's event slate page. Here are the areas and the corresponding type strings:
Life, Personal & Social Science: "life"
Earth and Space Science: "earth"
Physical Science & Chemistry: "physical"
Technology & Engineering: "tech"
Inquiry & Nature of Science: "inquiry"

(You might think that the names for "category" and "type" should be switched, and you would be right, but the official Science Olympiad organization uses the terms as they are here, so the description follows that convention to avoid any confusion when you have to get information from official sources or other sources such as scioly.org, which tend to follow the convention)

resourceId is a string that comes from the Google Drive folder share link. 
For instance, here is the Anatomy & Physiology Google Drive link:
https://drive.google.com/drive/folders/1YO-j-W4YOFz3wq3wMnK4CrG6a7Ddv3To?usp=sharing
and here is the resourceId:
1YO-j-W4YOFz3wq3wMnK4CrG6a7Ddv3To
See where it is in the link? All folder links are like this one, just with different IDs like this.

running is a boolean (true or false) telling whether or not the event is one of this year's events

UPDATING THE EVENT LIST

For any completely new events, add them to the list. Alphabetical order isn't required, but it is helpful for finding events. 
You can find the category in the rules and the type on the event slate page, both available from soinc.org
You'll have to make a new Google Drive folder in the Resources folder on hhs.scio@gmail.com's Google Drive, then get the resourceId from its share link. Make sure link sharing for the folder is set to ANYONE WITH THE LINK can VIEW.
You'll also need to make the actual event page on the website. You can copy-paste the folder "0-event-template" from the "resources" folder (the one one the site, NOT the Google Drive) into the "events" folder and just rename the folder to have the same name as the "url" variable

Make sure the running variable is set to true for all the events that are running, and false for all those that aren't

Check all the variables for the events to make sure they're right. Some might have changed between years, or could have originally been entered incorrectly (for instance events before 2022 have their "category" and "type" values guessed because this system was adopted then).


*/

var events = [
["anatomy-and-physiology", "Anatomy and Physiology", "test", "life", "1YO-j-W4YOFz3wq3wMnK4CrG6a7Ddv3To", true],
["astronomy", "Astronomy", "test", "earth", "1MBlKSBDG03CRQR5RNpmEOUK-96pqVtgZ", true],
["boomilever", "Boomilever", "build", "tech", "1cxZ-vKQa-lR9vOe8nUfoWLUdzKDaonGD", false],
["bridge", "Bridge", "build", "tech", "1LlcdXS0w6_k-yfodCW1zPzZ2nOHmjZfm", true],
["cell-biology", "Cell Biology", "test", "life", "1DajzazOjzNdiHq-bAdPXuDVCfd2nyuSx", true],
["chemistry-lab", "Chemistry Lab", "hybrid", "physical", "1eNLji_Fa2mvzIc3jBZtLmpbwou4IVZZ6", true],
["circuit-lab", "Circuit Lab", "hybrid", "tech", "1rBn48qJAxnDWQHoBUOT5-uNvMS6zZAXD", false],
["codebusters", "Codebusters", "test", "inquiry", "18Wbsw_IDcK7wYISmBgwcjxVeI8ZuRywf", true],
["designer-genes", "Designer Genes", "test", "life", "1Q-TneS7KcDsNzH7QGX176S-ZvNlk8nbH", false],
["detector-building", "Detector Building", "hybrid", "tech", "1BTdEbVvUi_zObn1oRh3uFxmI6HPECqWV", true],
["disease-detectives", "Disease Detectives", "test", "life", "1Q-TneS7KcDsNzH7QGX176S-ZvNlk8nbH", true],
["dynamic-planet", "Dynamic Planet", "test", "earth", "18yJiuFa2D-HvsO78102THLonPxO9zIpm", true],
["envirnomental-chemistry", "Environmental Chemistry", "hybrid", "physical", "1KeJ9X2G2gaEYCDDiQNCbVHlAxDUOYM5J", true],
["experimental-design", "Experimental Design", "lab", "inquiry", "1uMpWosZPZ4crKkn0w00OzJ4CTyae7kve", true],
["fermi-questions", "Fermi Questions", "test", "inquiry", "1GYEKOEXWpbxTSP8Cb-ee1bBpLnitmba8", false],
["forensics", "Forensics", "lab", "physical", "1i7QUuWcyN-rYZm6T_4uim-O2VKnhwbnp", true],
["fossils", "Fossils", "test", "life", "1Gzg2ULv9zOkumJ7MuAunEGnF_Mj5_ctc", false],
["geologic-mapping", "Geologic Mapping", "test", "earth", "1XP8RkF873RyCZYwiIIWn0uYxxf-0dRYM", false],
["gravity-vehicle", "Gravity Vehicle", "build", "tech", "1cLgaUm86052oiAwTPzJINPRzYJrKKepK", true],
["green-generation", "Green Generation", "test", "life", "1EOERCzVvsAHfmaWYCEm9g_56o3V4FUXc", true],
["herpetology", "Herpetology", "test", "life", "14LnqAq2Unmm5Ma4z899N7tDdOEjBGGHT", false],
["its-about-time", "It's About Time", "hybrid", "physical", "1rQqcuYWsCuRCwpKelpdFWJFvr5XkiASC", true],
["machines", "Machines", "hybrid", "physical", "1tRBTH43nTQPfPz806uxHk6bFMA3lYxJv", false],
["mission-possible", "Mission Possible", "build", "inquiry", "1n22Mx4C3qZPugamwNzAbpbCTXIltC96h", false],
["mousetrap-vehicle", "Mousetrap Vehicle", "build", "physical", "1ySmYn67juVZNxGAdqle3avcmiULJ3inF", false],
["ornithology", "Ornithology", "test", "life", "17B47OXzTL1HbbV09tjiuyf2kw_1JFUfa", true],
["ping-pong-parachute", "Ping Pong Parachute", "build", "inquiry", "1cgCKMmeMqcGKsVg9TyLtCUcJS3PWVYzN", true],
["protein-modeling", "Protein Modeling", "lab", "physical", "1aXXXQPHCA1sN0cabOaAn4n5muEeaskm3", false],
["remote-sensing", "Remote Sensing", "hybrid", "earth", "1KFzZAkPVtiDq2dwwlNAqj41zSBd0Leui", true],
["rocks-and-minerals", "Rocks and Minerals", "test", "earth", "1ffSGLV8nJTUZaEw5oDzxOc9XjLr5RuWu", true],
["sounds-of-music", "Sounds of Music", "hybrid", "physical", "14_Tniimtkq99ifG-INSuPtNQwcxWznLH", false],
["thermodynamics", "Thermodynamics", "hybrid", "physical", "1ruj3lwXLlzrmTH1pEFWCS__4ZmV7wpqe", false],
["trajectory", "Trajectory", "build", "physical", "1_GVlepSiTz42TVlM43yMap43rmPCHZgY", true],
["water-quality", "Water Quality", "test", "earth", "1qPTPfLK25Z-DZykyvLm3aHJaVb8EMsPM", false],
["wifi-lab", "WiFi Lab", "hybrid", "physical", "1yZDY2w7WDlkf876tDdE4zPgqH0o_80mw", true],
["wright-stuff", "Wright Stuff", "build", "tech", "11RtHcKIEOiAnn14Nr-HJuk0VcD-qT_Hi", true],
["write-it-do-it", "Write It Do It", "lab", "inquiry", "1Eam4R1R4X1aMF0C9LrOES6DWVhlMDwuD", true]
];

var types = [
["Life, Personal & Social Science", "life"],
["Earth and Space Science", "earth"],
["Physical Science & Chemistry", "physical"],
["Technology & Engineering", "tech"],
["Inquiry & Nature of Science", "inquiry"]
];