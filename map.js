// Dropdown behavior
const dropdownInitialLabels = {
  mapText: "Myanmar Map",
  districtText: "District",
  regionText: "Region / State",
  townshipText: "Township",
  cityText: "City"
};
function resetDropdownLabel(id) {
  document.getElementById(id).textContent = dropdownInitialLabels[id];
}
function toggleDropdown(id) {
  const current = document.getElementById(id);
  const isOpen = current.classList.contains("show");
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
  if (!isOpen) current.classList.add("show");
}
function selectOption(id, value) {
  document.getElementById(id).textContent = value;
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
const districtImages = {
  "Hmawbi":"Hmawbi_DT_oveall.jpg", "Dagon Myothit":"ဒဂုံမြို့သစ်ခရိုင်.jpg", "Insein":"အင်းစိန်ခရိုင်.jpg",
  "Kamayut":"ကမာရွတ်ခရိုင်.jpg", "Twante":"တွံတေးခရိုင် ၂.png", "Botahtaung":"ဗိုလ်တထောင်ခရိုင်_.jpg",
  "Mingaladon":"မင်္ဂလာဒုံခရိုင်.jpg", "Kyaukse":"Kyaukse_DT_overall.jpg", "Nyaung-U":"ညောင်ဦးခရိုင်.jpg",
  "Myingyan":"မြင်းခြံခရိုင်.jpg", "Pyin Oo Lwin":"ပြင်ဦးလွင်ခရိုင်.jpg", "Maubin":"မအူပင်ခရိုင်.jpg",
  "Kyonpyaw":"ကျုံပျော်ခရိုင်.jpg", "Thayet":"သရက်ခရိုင်.jpg", "Katha":"ကသာခရိုင်.jpg",
  "Shwebo":"ရွှေဘိုခရိုင်.jpg", "Bokpyin":"ဘုတ်ပြင်းခရိုင်.jpg", "Bhamo":"ဗန်းမော်ခရိုင်.jpg",
  "Myitkyina":"မြစ်ကြီးနားခရိုင်.jpg", "Tiddim":"တီးတန်.jpg"
};
const cityFolder = "city-images/city/မြို့/";
const cityImages = {
  "Taikkyi": cityFolder + "ရန်ကုန်တိုင်း/တိုက်ကြီးမြို့.jpg",
  "South Dagon": cityFolder + "ရန်ကုန်တိုင်း/တောင်ဒဂုံ.jpg",
  "Yangon": cityFolder + "ရန်ကုန်တိုင်း/ရန်ကုန်မြို့.jpg",
  "Hlaingtharyar (West)": cityFolder + "ရန်ကုန်တိုင်း/လှိုင်သာာယာအနောက်ပိုင်း Acual.jpg",
  "Kyaukse": cityFolder + "မန္တလေးတိုင်း/ကျောက်ဆည်_.jpg",
  "Pyin Oo Lwin": cityFolder + "မန္တလေးတိုင်း/ပြင်ဦးလွင်မြို့_.jpg",
  "Meiktila": cityFolder + "မန္တလေးတိုင်း/မိတ္ထီလာမြို့.jpg",
  "Kyaukpadaung": cityFolder + "မန္တလေးတိုင်း/ကျောက်ပန်းတောင်း.jpg",
  "Bagan": cityFolder + "မန္တလေးတိုင်း/Bagan.jpg",
  "Pathein": cityFolder + "ဧရာဝတီတိုင်းဒေသကြီး/ပုသိမ်.jpg",
  "Hinthada": cityFolder + "ဧရာဝတီတိုင်းဒေသကြီး/ဟင်္သတမြို့.jpg",
  "Maubin": cityFolder + "ဧရာဝတီတိုင်းဒေသကြီး/မအူပင်မြို့.jpg",
  "Mawlamyinegyun": cityFolder + "ဧရာဝတီတိုင်းဒေသကြီး/မော်လမြိုင်ကျွန်းမြို့.jpg",
  "Pyapon": cityFolder + "ဧရာဝတီတိုင်းဒေသကြီး/ဖျာပုံမြို့.jpg",
  "Sinbaungwe": cityFolder + "မကွေးတိုင်း/ဆင်ပေါင်ဝဲ_.jpg",
  "Chauk Gyi": cityFolder + "မကွေးတိုင်း/ချောက်ကြီး.jpg",
  "Sagu": cityFolder + "မကွေးတိုင်း/Saw_Tsp_act.jpg",
  "Chauk": cityFolder + "မကွေးတိုင်း/ချောက်_.png",
  "Magway": cityFolder + "မကွေးတိုင်း/မကွေးမြို့.jpg",
  "Yenangyaung": cityFolder + "မကွေးတိုင်း/ရေနံချောင်း.jpg",
  "Bago": cityFolder + "ပဲခူးတိုင်း/Bago.jpg",
  "Thanatpin": cityFolder + "ပဲခူးတိုင်း/သနပ်ပင်မြို့.jpg",
  "Pyinzaloke": cityFolder + "ပဲခူးတိုင်း/ပိန်းဇလုပ်မြို့.jpg",
  "Minhla": cityFolder + "ပဲခူးတိုင်း/မင်းလှမြို့.jpg",
  "Pyay": cityFolder + "ပဲခူးတိုင်း/ပြည်မြို့.jpg",
  "Taungoo": cityFolder + "ပဲခူးတိုင်း/တောင်ငူမြို့.jpg",
  "Yedashe": cityFolder + "ပဲခူးတိုင်း/ရေတာရှည်.jpg",
  "Naypyidaw": cityFolder + "နေပြည်တော်/Naypyitaw.png",
  "Sagaing": cityFolder + "စစ်ကိုင်းတိုင်း/saging.jpg",
  "Homalin": cityFolder + "စစ်ကိုင်းတိုင်း/ဟုမ္မလင်း.jpg",
  "Banmauk": cityFolder + "စစ်ကိုင်းတိုင်း/ဗန်မောက်မြို့.jpg",
  "Shwebo": cityFolder + "စစ်ကိုင်းတိုင်း/ရွှေဘိုမြို့.jpg",
  "Mingin": cityFolder + "စစ်ကိုင်းတိုင်း/မင်းကင်း.jpg",
  "Kawthaung": cityFolder + "တနင်္သာရီတိုင်းဒေသကြီး/ကော့သောင်း.jpg",
  "Myeik": cityFolder + "တနင်္သာရီတိုင်းဒေသကြီး/မြိတ်.jpg",
  "Dawei": cityFolder + "တနင်္သာရီတိုင်းဒေသကြီး/ထားဝယ်.jpg",
  "Hpakant": cityFolder + "ကချင်ပြည်နယ်/ဖားကန့်_.jpg",
  "Myitkyina": cityFolder + "ကချင်ပြည်နယ်/မြစ်ကြီးနားမြို့.png",
  "Myawaddy": cityFolder + "ကရင်ပြည်နယ်/မြဝတီမြို့.jpg",
  "Mawlamyine": cityFolder + "မွန်ပြည်နယ်/မော်လမြိုင်မြို့.jpg",
  "Sittwe": cityFolder + "ရခိုင်ပြည်နယ်/စစ်တွေမြို့.jpg",
  "Taunggyi": cityFolder + "ရှမ်းပြည်နယ်/Shan State Towngyi.jpg",
  "Hopong": cityFolder + "ရှမ်းပြည်နယ်/ဟိုပုံးမြို့.jpg",
  "Nyaungshwe": cityFolder + "ရှမ်းပြည်နယ်/ညောင်ရွှေ.jpg",
  "Loilen": cityFolder + "ရှမ်းပြည်နယ်/လွိုင်လင်_.jpg",
  "Hsi Hseng": cityFolder + "ရှမ်းပြည်နယ်/ဆီဆိုင်_.jpg",
  "Kengtung": cityFolder + "ရှမ်းပြည်နယ်/ကျိုင်းတုံမြို့.jpg",
  "Tachileik": cityFolder + "ရှမ်းပြည်နယ်/တာချီလိတ်.jpg",
  "Kokang": cityFolder + "ရှမ်းပြည်နယ်/ကိုးကန့်ကိုယ်ပိုင်အုပ်ချုပ်ခွင့်ရဒေသ.jpg",
  "Lashio": cityFolder + "ရှမ်းပြည်နယ်/လားရှိုး.jpg"
};
let currentMapLanguage = "en";
let currentMapSource = "assets/maps/myanmar-english.jpg";
function showUnavailableMap(title, showPopup = true) {
  const image = document.getElementById("selectedImage");
  image.onerror = null;
  image.hidden = true;
  currentMapSource = "";
  document.getElementById("mapDialog").classList.remove("download-flow-only");
  document.getElementById("imageTitle").textContent = title;
  document.getElementById("imageCaption").textContent = "No map image is available for this selection.";
  document.getElementById("imageCaption").hidden = false;
  document.getElementById("downloadActions").hidden = true;
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("kpayPanel").hidden = true;
  document.getElementById("freeDownloadForm").hidden = true;
  document.getElementById("requestDownloadForm").hidden = true;
  document.getElementById("downloadFormStatus").textContent = "";
  const dialog = document.getElementById("mapDialog");
  if (showPopup && !dialog.open) dialog.showModal();
}
function setImage(src, title, caption, alt, showPopup = true) {
  document.getElementById("mapDialog").classList.remove("download-flow-only");
  const image = document.getElementById("selectedImage");
  image.hidden = false;
  document.getElementById("imageCaption").hidden = false;
  image.onerror = () => {
    if (currentMapSource === src) showUnavailableMap(title, false);
  };
  currentMapSource = src;
  image.src = src;
  image.alt = alt;
  document.getElementById("imageTitle").textContent = title;
  document.getElementById("imageCaption").textContent = caption;
  const dialog = document.getElementById("mapDialog");
  document.getElementById("downloadActions").hidden = false;
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("freeDownloadForm").hidden = true;
  document.getElementById("requestDownloadForm").hidden = true;
  document.getElementById("downloadFormStatus").textContent = "";
  if (showPopup && !dialog.open) dialog.showModal();
}
function selectMap(language) {
  currentMapLanguage = language;
  const label = language === "my" ? "Myanmar" : "English";
  resetDropdownLabel("mapText");
  const caption = language === "my" ? "မြန်မာနိုင်ငံမြေပုံ" : "Map of Myanmar";
  setImage(`assets/maps/myanmar-${language === "my" ? "burmese" : "english"}.jpg`, label + " — Myanmar Map", caption, caption);
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
function openPopularMap(name, imagePath) {
  setImage(imagePath, name + " Map", "Popular map for " + name, name + " map");
}
function showPlace(name, type) {
  const folder = type === "district" ? "districts/Districts/" : "cities/";
  const file = type === "district" ? districtImages[name] : cityImages[name];
  const title = name + (type === "district" ? " District" : " City");
  if (file) setImage("assets/" + folder + encodeURI(file), title, "Map for " + name, title);
  else showUnavailableMap(title);
  resetDropdownLabel(type + "Text");
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
function selectDistrict(name) { showPlace(name, "district"); }
function selectCity(name) { showPlace(name, "city"); }
document.addEventListener("click", event => {
  if (!event.target.closest(".dropdown")) document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
});



// Region and township data from reto.zip.
const regionMaps = {
      "Yangon Region": [["assets/regions/yangon.jpg", "Yangon Region"], ["assets/regions/yangon-overview.png", "Yangon Region overview map"]],
      "Mandalay Region": [["assets/regions/mandalay.jpg", "Mandalay Region"]],
      "Naypyidaw Union Territory": [["assets/regions/naypyidaw.png", "Naypyidaw Union Territory"]],
      "Ayeyarwady Region": [["assets/regions/ayeyarwady.jpg", "Ayeyarwady Region"]],
      "Bago Region": [["assets/regions/bago.jpg", "Bago Region"]],
      "Chin State": [["assets/regions/chin.jpg", "Chin State"]],
      "Kachin State": [["assets/regions/kachin.jpg", "Kachin State"]],
      "Kayah State": [["assets/regions/kayah.jpg", "Kayah State"]],
      "Kayin State": [["assets/regions/kayin.jpg", "Kayin State"]],
      "Magway Region": [["assets/regions/magway.jpg", "Magway Region"]],
      "Mon State": [["assets/regions/mon.jpg", "Mon State"]],
      "Rakhine State": [["assets/regions/rakhine.jpg", "Rakhine State"]],
      "Sagaing Region": [["assets/regions/sagaing.jpg", "Sagaing Region"]],
      "Shan State": [
        ["assets/regions/shan-north.jpg", "Northern Shan State"],
        ["assets/regions/shan-east.jpg", "Eastern Shan State"],
        ["assets/regions/shan-south.jpg", "Southern Shan State"]
      ],
      "Tanintharyi Region": [["assets/regions/tanintharyi.jpg", "Tanintharyi Region"]]
    };
const townshipNames = ["ပဲခူးမြို့နယ်","ဘူတာလင်မြို့နယ်","မှော်ဘီမြို့နယ်","မြစ်ကြီးနားမြို့နယ်","ဟင်္သာတမြို့နယ်","ကလေးမြို့နယ်","ကဝမြို့နယ်","မိတ္ထီလာမြို့နယ်","မိုင်းဆတ်မြို့နယ်","မြောက်ဦးမြို့နယ်","မြဝတီမြို့နယ်","ညောင်လေးပင်မြို့နယ်","စစ်ကိုင်းမြို့နယ်","ဆောမြို့နယ်","ဆိပ်ဖြူမြို့နယ်","တွံတေးမြို့နယ်","ပျော်ဘွယ်မြို့နယ်","ပြင်ဦးလွင်မြို့နယ်","ရွှေကျင်မြို့နယ်","တံတားဦးမြို့နယ်","ရမည်းသင်းမြို့နယ်","ဖလမ်းမြို့နယ်","ဟားခါးမြို့နယ်","ဟိုပုန်းမြို့နယ်","ဖားကန့်မြို့နယ်","မတူပီမြို့နယ်","မုံရွာမြို့နယ်","ပန်းတနော်မြို့နယ်","ပုသိမ်မြို့နယ်","ပင်းတယမြို့နယ်","တောင်ကြီးမြို့နယ်","တောင်ငူမြို့နယ်","သပိတ်ကျင်းမြို့နယ်","ထန်တလန်မြို့နယ်","ဝမ်းတွင်းမြို့နယ်","ရေတာရှည်မြို့နယ်","ပေါက်ခေါင်းမြို့နယ်","ပေါင်းတည်မြို့နယ်","ပြည်မြို့နယ်","ရွှေတောင်မြို့နယ်","သဲကုန်းမြို့နယ်","ဟမ္မလင်းမြို့နယ်","ရွာငံမြို့နယ်","စလင်းမြို့နယ်","ဆီဆိုင်မြို့နယ်","ပင်လောင်းမြို့နယ်","ရပ်စောက်မြို့နယ်"];
const townshipRegionNames = {
  "Yangon Region": ["Hmawbi Township", "Twante Township"],
  "Mandalay Region": ["Meiktila Township", "Pyawbwe Township", "Pyin Oo Lwin Township", "Tada-U Township", "Thabeikkyin Township", "Wundwin Township", "Yamethin Township"],
  "Bago Region": ["Bago Township", "Nyaunglebin Township", "Paukkhaung Township", "Pyay Township", "Yedashe Township"],
  "Ayeyarwady Region": ["Hinthada Township", "Pantanaw Township", "Pathein Township"],
  "Shan State": ["Hopong Township", "Pindaya Township", "Ywangan Township", "Hsihseng Township"],
  "Sagaing Region": ["Sagaing Township", "Homalin Township"],
  "Kachin State": ["Hpakant Township", "Myitkyina Township"],
  "Magway Region": ["Saw Township", "Seikphyu Township", "Salin Township"],
  "Chin State": ["Falam Township", "Hakha Township", "Matupi Township", "Thantlang Township"]
};
const townshipEnglishNames =  {"ပဲခူးမြို့နယ်":"Bago Township","ဘူတာလင်မြို့နယ်":"Budalin Township","မှော်ဘီမြို့နယ်":"Hmawbi Township","မြစ်ကြီးနားမြို့နယ်":"Myitkyina Township","ဟင်္သာတမြို့နယ်":"Hinthada Township","ကလေးမြို့နယ်":"Kalay Township","ကဝမြို့နယ်":"Kawa Township","မိတ္ထီလာမြို့နယ်":"Meiktila Township","မိုင်းဆတ်မြို့နယ်":"Mong Hsat Township","မြောက်ဦးမြို့နယ်":"Mrauk-U Township","မြဝတီမြို့နယ်":"Myawaddy Township","ညောင်လေးပင်မြို့နယ်":"Nyaunglebin Township","စစ်ကိုင်းမြို့နယ်":"Sagaing Township","ဆောမြို့နယ်":"Saw Township","ဆိပ်ဖြူမြို့နယ်":"Seikphyu Township","တွံတေးမြို့နယ်":"Twante Township","ပျော်ဘွယ်မြို့နယ်":"Pyawbwe Township","ပြင်ဦးလွင်မြို့နယ်":"Pyin Oo Lwin Township","ရွှေကျင်မြို့နယ်":"Shwegyin Township","တံတားဦးမြို့နယ်":"Tada-U Township","ရမည်းသင်းမြို့နယ်":"Yamethin Township","ဖလမ်းမြို့နယ်":"Falam Township","ဟားခါးမြို့နယ်":"Hakha Township","ဟိုပုန်းမြို့နယ်":"Hopong Township","ဖားကန့်မြို့နယ်":"Hpakant Township","မတူပီမြို့နယ်":"Matupi Township","မုံရွာမြို့နယ်":"Monywa Township","ပန်းတနော်မြို့နယ်":"Pantanaw Township","ပုသိမ်မြို့နယ်":"Pathein Township","ပင်းတယမြို့နယ်":"Pindaya Township","တောင်ကြီးမြို့နယ်":"Taunggyi Township","တောင်ငူမြို့နယ်":"Taungoo Township","သပိတ်ကျင်းမြို့နယ်":"Thabeikkyin Township","ထန်တလန်မြို့နယ်":"Thantlang Township","ဝမ်းတွင်းမြို့နယ်":"Wundwin Township","ရေတာရှည်မြို့နယ်":"Yedashe Township","ပေါက်ခေါင်းမြို့နယ်":"Paukkhaung Township","ပေါင်းတည်မြို့နယ်":"Padaung Township","ပြည်မြို့နယ်":"Pyay Township","ရွှေတောင်မြို့နယ်":"Shwedaung Township","သဲကုန်းမြို့နယ်":"Thegon Township","ဟမ္မလင်းမြို့နယ်":"Homalin Township","ရွာငံမြို့နယ်":"Ywangan Township","စလင်းမြို့နယ်":"Salin Township","ဆီဆိုင်မြို့နယ်":"Hsihseng Township","ပင်လောင်းမြို့နယ်":"Pinlaung Township","ရပ်စောက်မြို့နယ်":"Yatsauk Township"};
const townshipMaps = {"ပဲခူးမြို့နယ်":[{"src":"assets/townships/township-001.jpg","caption":"ပဲခူးမြို့နယ်"}],"ဘူတာလင်မြို့နယ်":[],"မှော်ဘီမြို့နယ်":[{"src":"assets/townships/township-002.jpg","caption":"မှော်ဘီမြို့နယ်"}],"မြစ်ကြီးနားမြို့နယ်":[{"src":"assets/townships/township-003.jpg","caption":"မြစ်ကြီးနားမြို့နယ်"}],"ဟင်္သာတမြို့နယ်":[],"ကလေးမြို့နယ်":[],"ကဝမြို့နယ်":[],"မိတ္ထီလာမြို့နယ်":[{"src":"assets/townships/township-004.jpg","caption":"မိတ္ထီလာမြို့နယ်"}],"မိုင်းဆတ်မြို့နယ်":[],"မြောက်ဦးမြို့နယ်":[],"မြဝတီမြို့နယ်":[{"src":"assets/townships/township-005.jpg","caption":"မြဝတီမြို့နယ်"}],"ညောင်လေးပင်မြို့နယ်":[{"src":"assets/townships/township-006.jpg","caption":"ညောင်လေးပင်မြို့နယ်"}],"စစ်ကိုင်းမြို့နယ်":[{"src":"assets/townships/township-007.jpg","caption":"စစ်ကိုင်းမြို့နယ်"}],"ဆောမြို့နယ်":[{"src":"assets/townships/township-008.jpg","caption":"ဆောမြို့နယ်"}],"ဆိပ်ဖြူမြို့နယ်":[{"src":"assets/townships/township-009.jpg","caption":"ဆိပ်ဖြူမြို့နယ်"}],"တွံတေးမြို့နယ်":[{"src":"assets/townships/township-010.jpg","caption":"တွံတေးမြို့နယ်"}],"ပျော်ဘွယ်မြို့နယ်":[{"src":"assets/townships/township-011.jpg","caption":"ပျော်ဘွယ်မြို့နယ်"}],"ပြင်ဦးလွင်မြို့နယ်":[{"src":"assets/townships/township-012.jpg","caption":"ပြင်ဦးလွင်မြို့နယ်"}],"ရွှေကျင်မြို့နယ်":[],"တံတားဦးမြို့နယ်":[{"src":"assets/townships/township-013.jpg","caption":"တံတားဦးမြို့နယ်"}],"ရမည်းသင်းမြို့နယ်":[{"src":"assets/townships/township-014.jpg","caption":"ရမည်းသင်းမြို့နယ်"}],"ဖလမ်းမြို့နယ်":[{"src":"assets/townships/township-015.jpg","caption":"ဖလမ်းမြို့နယ်"}],"ဟားခါးမြို့နယ်":[{"src":"assets/townships/township-016.jpg","caption":"ဟားခါးမြို့နယ်"}],"ဟိုပုန်းမြို့နယ်":[],"ဖားကန့်မြို့နယ်":[{"src":"assets/townships/township-032.jpg","caption":"ဖားကန့်မြို့နယ်"}],"မတူပီမြို့နယ်":[{"src":"assets/townships/township-017.jpg","caption":"မတူပီမြို့နယ်"}],"မုံရွာမြို့နယ်":[],"ပန်းတနော်မြို့နယ်":[{"src":"assets/townships/township-018.jpg","caption":"ပန်းတနော်မြို့နယ်"}],"ပုသိမ်မြို့နယ်":[{"src":"assets/townships/township-019.jpg","caption":"ပုသိမ်မြို့နယ်"}],"ပင်းတယမြို့နယ်":[{"src":"assets/townships/township-020.jpg","caption":"ပင်းတယမြို့နယ်"}],"တောင်ကြီးမြို့နယ်":[],"တောင်ငူမြို့နယ်":[],"သပိတ်ကျင်းမြို့နယ်":[{"src":"assets/townships/township-021.jpg","caption":"သပိတ်ကျင်းမြို့နယ်"}],"ထန်တလန်မြို့နယ်":[{"src":"assets/townships/township-022.jpg","caption":"ထန်တလန်မြို့နယ်"}],"ဝမ်းတွင်းမြို့နယ်":[{"src":"assets/townships/township-023.jpg","caption":"ဝမ်းတွင်းမြို့နယ်"}],"ရေတာရှည်မြို့နယ်":[{"src":"assets/townships/township-024.jpg","caption":"ရေတာရှည်မြို့နယ်"}],"ပေါက်ခေါင်းမြို့နယ်":[{"src":"assets/townships/township-025.jpg","caption":"ပေါက်ခေါင်းမြို့နယ်"}],"ပေါင်းတည်မြို့နယ်":[],"ပြည်မြို့နယ်":[{"src":"assets/townships/township-026.jpg","caption":"ပြည်မြို့နယ်"}],"ရွှေတောင်မြို့နယ်":[],"သဲကုန်းမြို့နယ်":[],"ဟမ္မလင်းမြို့နယ်":[{"src":"assets/townships/township-027.jpg","caption":"ဟမ္မလင်းမြို့နယ်"}],"ရွာငံမြို့နယ်":[{"src":"assets/townships/township-028.jpg","caption":"ရွာငံမြို့နယ်"}],"စလင်းမြို့နယ်":[{"src":"assets/townships/township-029.jpg","caption":"စလင်းမြို့နယ်"},{"src":"assets/townships/township-030.jpg","caption":"စလင်းမြို့နယ်"}],"ဆီဆိုင်မြို့နယ်":[{"src":"assets/townships/township-031.jpg","caption":"ဆီဆိုင်မြို့နယ်"}],"ပင်လောင်းမြို့နယ်":[],"ရပ်စောက်မြို့နယ်":[]};
function addLocationOptions(containerId, names, callbackName, labelMap = {}) {
  const container = document.getElementById(containerId);
  for (const name of names) {
    const button = document.createElement("button"); button.type = "button"; button.className = "place-option";
    button.textContent = labelMap[name] || name;
    button.dataset.searchText = `${name} ${labelMap[name] || ""}`.toLowerCase();
    button.addEventListener("click", () => window[callbackName](name)); container.append(button);
  }
}
function addGroupedTownshipOptions() {
  const container = document.getElementById("townshipOptions");
  container.replaceChildren();
  const englishNameToMyanmarName = Object.fromEntries(
    Object.entries(townshipEnglishNames).map(([myanmarName, englishName]) => [englishName, myanmarName])
  );

  Object.entries(townshipRegionNames).forEach(([regionName, townshipEnglishList]) => {
    const group = document.createElement("div");
    group.className = "district-group";
    const heading = document.createElement("h4");
    heading.textContent = regionName;
    group.append(heading);

    townshipEnglishList.forEach(englishTownshipName => {
      const myanmarTownshipName = englishNameToMyanmarName[englishTownshipName];
      if (!myanmarTownshipName) return;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "place-option";
      button.textContent = englishTownshipName;
      button.dataset.searchText =
        `${myanmarTownshipName} ${englishTownshipName} ${regionName}`.toLowerCase();
      button.addEventListener("click", () => selectTownship(myanmarTownshipName));
      group.append(button);
    });
    container.append(group);
  });
}
function selectRegion(name) {
  const entries = regionMaps[name] || [];
  if (entries.length) setImage(entries[0][0], name + " Map", entries[0][1], entries[0][1]);
  else showUnavailableMap(name + " Map");
  resetDropdownLabel("regionText");
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
function selectTownship(name) {
  const entries = townshipMaps[name] || []; const label = townshipEnglishNames[name] || name;
  if (entries.length) setImage(entries[0].src, label + " Map", entries[0].caption, entries[0].caption);
  else showUnavailableMap(label + " Map");
  resetDropdownLabel("townshipText");
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
}
addLocationOptions("regionOptions", Object.keys(regionMaps), "selectRegion");
addGroupedTownshipOptions();
document.querySelectorAll(".district-group button").forEach(button => { button.classList.add("place-option"); button.dataset.searchText = button.textContent.toLowerCase(); });
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchableMaps = [
  ...Array.from(document.querySelectorAll(".place-option"), target => {
    const group = target.closest(".district-group");
    const dropdown = target.closest(".dropdown-content");
    const category = group?.querySelector("h4")?.textContent ||
      (dropdown?.id === "regionOptions" ? "Region / State" : dropdown?.id === "townshipOptions" ? "Township" : "Map");
    return { target, name: target.textContent.trim(), category, searchText: target.dataset.searchText || target.textContent.toLowerCase() };
  }),
  ...Array.from(document.querySelectorAll(".popular-card"), target => ({
    target, name: target.querySelector("span").textContent.trim(), category: "Popular map",
    searchText: target.textContent.toLowerCase()
  }))
];
function renderSearchResults() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  document.querySelectorAll(".place-option").forEach(button => { button.hidden = Boolean(query) && !button.dataset.searchText.includes(query); });
  searchResults.replaceChildren();
  if (!query) {
    searchResults.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
    return;
  }
  const matches = searchableMaps
    .filter(item => item.searchText.toLocaleLowerCase().includes(query))
    .sort((a, b) => Number(b.name.toLocaleLowerCase().startsWith(query)) - Number(a.name.toLocaleLowerCase().startsWith(query)))
    .slice(0, 12);
  if (matches.length) {
    matches.forEach(item => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "search-result";
      option.setAttribute("role", "option");
      const name = document.createElement("span");
      name.textContent = item.name;
      const category = document.createElement("small");
      category.textContent = item.category;
      option.append(name, category);
      option.addEventListener("click", () => {
        item.target.click();
        searchInput.value = item.name;
        searchResults.hidden = true;
        searchInput.setAttribute("aria-expanded", "false");
      });
      searchResults.append(option);
    });
  } else {
    const empty = document.createElement("p");
    empty.className = "search-empty";
    empty.textContent = "No matching maps found.";
    searchResults.append(empty);
  }
  searchResults.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
}
searchInput.addEventListener("input", renderSearchResults);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Escape") { searchResults.hidden = true; searchInput.setAttribute("aria-expanded", "false"); }
  if (event.key === "Enter" && !searchResults.hidden) {
    const firstResult = searchResults.querySelector(".search-result");
    if (firstResult) { event.preventDefault(); firstResult.click(); }
  }
});
document.addEventListener("click", event => {
  if (!event.target.closest(".search-field")) {
    searchResults.hidden = true;
    searchInput.setAttribute("aria-expanded", "false");
  }
});

function clearSelection() {
  document.getElementById("searchInput").value = "";
  searchResults.hidden = true;
  searchInput.setAttribute("aria-expanded", "false");
  document.querySelectorAll(".place-option").forEach(button => { button.hidden = false; });
  currentMapLanguage = "en";
  document.getElementById("mapText").textContent = "Myanmar Map";
  document.getElementById("regionText").textContent = "Region / State";
  document.getElementById("townshipText").textContent = "Township";
  document.getElementById("districtText").textContent = "District";
  document.getElementById("cityText").textContent = "City";
  setImage("assets/maps/myanmar-english.jpg", "Myanmar Map", "Map of Myanmar", "Map of Myanmar", false);
  document.querySelectorAll(".dropdown-content").forEach(menu => menu.classList.remove("show"));
  document.getElementById("downloadActions").hidden = true;
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("kpayPanel").hidden = true;
  document.getElementById("freeDownloadForm").reset();
  document.getElementById("requestDownloadForm").reset();
  updateRequestPrice();
  document.getElementById("downloadFormStatus").textContent = "";
  closeMapPopup();
}

function closeMapPopup() {
  const dialog = document.getElementById("mapDialog");
  if (dialog.open) dialog.close();
}




function downloadCurrentMap() {
  const link = document.createElement("a");
  link.href = currentMapSource;
  link.download = (document.getElementById("imageTitle").textContent || "myanmar-map").trim().replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") + currentMapSource.substring(currentMapSource.lastIndexOf("."));
  document.body.append(link);
  link.click();
  link.remove();
}

function showDownloadForm(kind) {
  const forms = document.getElementById("downloadForms");
  const dialog = document.getElementById("mapDialog");
  dialog.classList.add("download-flow-only");
  document.getElementById("selectedImage").hidden = true;
  document.getElementById("imageCaption").hidden = true;
  document.getElementById("downloadActions").hidden = true;
  document.getElementById("kpayPanel").hidden = true;
  document.getElementById("freeDownloadForm").hidden = kind !== "free";
  document.getElementById("requestDownloadForm").hidden = kind !== "request";
  document.getElementById("downloadFormStatus").textContent = "";
  forms.hidden = false;
  forms.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

const requestMapProduct = document.getElementById("requestMapProduct");
const requestMapSize = document.getElementById("requestMapSize");
const customDimensions = document.getElementById("customDimensions");
const customWidth = document.getElementById("customWidth");
const customHeight = document.getElementById("customHeight");
const requestPrice = document.getElementById("requestPrice");
const money = amount => `${Number(amount).toLocaleString("en-US")} MMK`;

function updateRequestPrice() {
  const product = requestMapProduct.options[requestMapProduct.selectedIndex];
  const rate = Number(product?.dataset.rate || 0);
  const fixedPrice = Number(product?.dataset.price || 0);
  const isAreaPrice = rate > 0;
  requestMapSize.disabled = !isAreaPrice;
  requestMapSize.required = isAreaPrice;
  if (!isAreaPrice) requestMapSize.value = "";
  const isCustom = isAreaPrice && requestMapSize.value === "custom";
  customDimensions.hidden = !isCustom;
  customWidth.required = isCustom;
  customHeight.required = isCustom;

  if (!product || !product.value) {
    requestPrice.textContent = "Select a product and size to calculate the price.";
    return;
  }
  if (fixedPrice) {
    const format = product.value.endsWith("a3") ? "Fixed A3 size" : "Digital copy";
    requestPrice.textContent = `Total price: ${money(fixedPrice)} (${format})`;
    return;
  }
  if (!requestMapSize.value) {
    requestPrice.textContent = `Rate: ${money(rate)} per sq ft. Select a map size to calculate the total.`;
    return;
  }
  let area;
  let sizeLabel;
  if (isCustom) {
    const width = Number(customWidth.value);
    const height = Number(customHeight.value);
    if (!(width > 0 && height > 0)) {
      requestPrice.textContent = `Rate: ${money(rate)} per sq ft. Enter width and height to calculate the total.`;
      return;
    }
    area = width * height;
    sizeLabel = `${width} × ${height} ft`;
  } else {
    const [width, height] = requestMapSize.value.split("x").map(Number);
    area = width * height;
    sizeLabel = requestMapSize.options[requestMapSize.selectedIndex].text;
  }
  const total = area * rate;
  requestPrice.textContent = `Total price: ${money(total)} (${sizeLabel}, ${area.toLocaleString("en-US")} sq ft × ${money(rate)}/sq ft)`;
}

requestMapProduct.addEventListener("change", updateRequestPrice);
requestMapSize.addEventListener("change", updateRequestPrice);
customWidth.addEventListener("input", updateRequestPrice);
customHeight.addEventListener("input", updateRequestPrice);
updateRequestPrice();

document.getElementById("freeDownloadForm").addEventListener("submit", event => {
  event.preventDefault();
  downloadCurrentMap();
  document.getElementById("downloadFormStatus").textContent = "Your map download has started.";
});




document.getElementById("requestDownloadForm").addEventListener("submit", event => {
  event.preventDefault();
  const productLabel = requestMapProduct.options[requestMapProduct.selectedIndex].text.split(" — ")[0];
  let sizeLabel = "";
  let total = Number(requestMapProduct.options[requestMapProduct.selectedIndex].dataset.price || 0);
  if (requestMapProduct.options[requestMapProduct.selectedIndex].dataset.rate) {
    if (requestMapSize.value === "custom") {
      const width = Number(customWidth.value);
      const height = Number(customHeight.value);
      sizeLabel = `${width} × ${height} ft`;
      total = width * height * Number(requestMapProduct.options[requestMapProduct.selectedIndex].dataset.rate);
    } else {
      sizeLabel = requestMapSize.options[requestMapSize.selectedIndex].text;
      const [width, height] = requestMapSize.value.split("x").map(Number);
      total = width * height * Number(requestMapProduct.options[requestMapProduct.selectedIndex].dataset.rate);
    }
  } else {
    sizeLabel = requestMapProduct.value.endsWith("a3") ? "A3" : "Digital copy";
  }
  document.getElementById("kpayOrderSummary").textContent = `${productLabel} · ${sizeLabel} · Total: ${money(total)}`;
  document.getElementById("downloadFormStatus").textContent = "";
  document.getElementById("downloadForms").hidden = true;
  document.getElementById("kpayPanel").hidden = false;
  document.getElementById("kpayPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
});

function hideKpayPanel() {
  document.getElementById("kpayPanel").hidden = true;
  const title = document.getElementById("imageTitle").textContent;
  const caption = document.getElementById("imageCaption").textContent;
  setImage(currentMapSource, title, caption, title);
}
