import React from 'react';

const toBengaliNum = require('number-to-bengali');
const { NovelCovid } = require('novelcovid');
const track = new NovelCovid();

function GetCoronaData() {
  async function CoronaCountry() {
    // Specific Country
    let countriesData = await track.countries('Bangladesh');
    return countriesData;
  }
  async function CoronaGlobal() {
    // Specific Country
    let GlobalData = await track.all();
    return GlobalData;
  }

  CoronaCountry().then((country) => {
    // console.log(country);
    document.getElementById("country_cases").innerHTML = toBengaliNum(country.cases);
    document.getElementById("country_recovered").innerHTML = toBengaliNum(country.recovered);
    document.getElementById("country_deaths").innerHTML = toBengaliNum(country.deaths);
    document.getElementById("country_active").innerHTML = toBengaliNum(country.active);
    document.getElementById("country_today_cases").innerHTML = toBengaliNum(country.todayCases);
  })
  CoronaGlobal().then((global) => {
    // console.log(global);
    document.getElementById("global_cases").innerHTML = toBengaliNum(global.cases);
    document.getElementById("global_recovered").innerHTML = toBengaliNum(global.recovered);
    document.getElementById("global_deaths").innerHTML = toBengaliNum(global.deaths);
    document.getElementById("global_active").innerHTML = toBengaliNum(global.active);
    document.getElementById("global_today_cases").innerHTML = toBengaliNum(global.todayCases);
  })
}

const Banner = (props) => (
  <section id="banner" className="major">
    <div className="inner">
      <div onLoad={GetCoronaData()} className="stats_area">
        <ul className="statistics">
          <li className="style0">
            <strong>বাংলাদেশ</strong>
          </li>
          <li className="style1">
            <div className="stats_title">মোট আক্রান্ত</div>
            <div className="stats_text"><strong id="country_cases">...</strong> জন</div>
          </li>
          <li className="style2">
            <div className="stats_title">মোট সুস্থ</div>
            <div className="stats_text"><strong id="country_recovered">...</strong> জন</div>
          </li>
          <li className="style3">
            <div className="stats_title">মৃত</div>
            <div className="stats_text"><strong id="country_deaths">...</strong> জন</div>
          </li>
          <li className="style4">
            <div className="stats_title">চিকিৎসাধীন</div>
            <div className="stats_text"><strong id="country_active">...</strong> জন</div>
          </li>
          <li className="style5">
            <div className="stats_title">আজকে আক্রান্ত</div>
            <div className="stats_text"><strong id="country_today_cases">...</strong> জন</div>
          </li>
        </ul>
        <ul className="statistics">
          <li className="style0">
            <strong>বিশ্ব</strong>
          </li>
          <li className="style1">
            <div className="stats_title">মোট আক্রান্ত</div>
            <div className="stats_text"><strong id="global_cases">...</strong> জন</div>
          </li>
          <li className="style2">
            <div className="stats_title">মোট সুস্থ</div>
            <div className="stats_text"><strong id="global_recovered">...</strong> জন</div>
          </li>
          <li className="style3">
            <div className="stats_title">মৃত</div>
            <div className="stats_text"><strong id="global_deaths">...</strong> জন</div>
          </li>
          <li className="style4">
            <div className="stats_title">চিকিৎসাধীন</div>
            <div className="stats_text"><strong id="global_active">...</strong> জন</div>
          </li>
          <li className="style5">
            <div className="stats_title">আজকে আক্রান্ত</div>
            <div className="stats_text"><strong id="global_today_cases">...</strong> জন</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
