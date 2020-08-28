import React, { createContext, useState, useEffect } from 'react';

import * as eng from 'languages/en';
import * as mac from 'languages/mk';

export const Context = createContext({});
export const Provider = (props) => {
  const lang = JSON.parse(localStorage.getItem('item'));

  const [language, setLanguage] = useState(lang);
  const [dataLanguage, setDataLanguage] = useState(eng.gen);
  const [play, setPlay] = useState(false);
  const [dataGet, setDataGet] = useState(lang ? eng.data : mac.data);
  const [searchData, setSearchData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [propEl, setPropEl] = useState(lang ? eng.properties : mac.properties);
  const [propElement, setPropElement] = useState(
    lang ? eng.properties : mac.properties
  );
  const [show, setShow] = useState(false);
  const [screen, setScreen] = useState(false);
  const [link, setLink] = useState(null);
  const [orientation, setOrientation] = useState(false);

  useEffect(() => {
    let filteredData = [];
    dataGet.forEach((el) => {
      filteredData.push({ name: el.symbol, atomicNumber: el.atomicNumber });
      filteredData.push({ name: el.name, atomicNumber: el.atomicNumber });
    });
    filteredData.sort((a, b) => {
      if (a.name.length < b.name.length) {
        return -1;
      } else {
        return 1;
      }
    });
    setSearchData(filteredData);
    setFilterData(filteredData);
  }, [dataGet]);

  useEffect(() => {
    language ? setDataLanguage(eng.gen) : setDataLanguage(mac.gen);
    language ? setDataGet(eng.data) : setDataGet(mac.data);
    language ? setPropEl(eng.properties) : setPropEl(mac.properties);
    language ? setPropElement(eng.properties) : setPropElement(mac.properties);
  }, [language]);

  useEffect(() => {
    window.onpopstate = () => {
      localStorage.setItem('item', JSON.stringify(!language));
      setLanguage(!language);
    };
  }, [language]);

  useEffect(() => {
    function changeOrientation() {
      if (window.orientation === 90 || window.orientation === -90) {
        setOrientation(false);
      } else {
        setOrientation(true);
      }
    }

    window.addEventListener('orientationchange', changeOrientation);
    if (window.orientation === 0) {
      setOrientation(true);
    }

    return () => {
      window.removeEventListener('orientationchange', changeOrientation);
    };
  }, []);

  const changeLanguage = (props) => {
    localStorage.setItem('item', JSON.stringify(!language));

    setLanguage(!language);
    const num = props.match.params.number;
    if (num) {
      props.history.push(
        language ? `/елемент/мк/${num}` : `/element/en/${num}`
      );
    }
  };

  const showDialog = (number) => {
    if (language) {
      const curLinkEN = eng.wikiEN.filter((_, i) => number === i + 1);
      setLink(curLinkEN);
    } else {
      const curLinkMK = mac.wikiMK.filter((_, i) => number === i + 1);
      setLink(curLinkMK);
    }
    setShow(true);
  };

  const closeDialog = () => {
    setShow(false);
  };

  const fullScreen = () => {
    setScreen(!screen);
  };

  const onSearchDetailsHandler = (query) => {
    let searchRezults = [];
    const dataCopy = [...propElement];

    for (let i = 0; i < dataCopy.length; i++) {
      const el = dataCopy[i];
      const key = Object.keys(el);
      const value = Object.values(el);

      if (key.join('').toLowerCase().includes(query.toLowerCase())) {
        const curKey = key.filter((el) =>
          el.toLowerCase().includes(query.toLowerCase())
        );
        searchRezults.push({
          [curKey]: [...value[0]],
        });
      } else {
        searchRezults.push({
          [key]: value[0].filter((elem) =>
            elem.toLowerCase().includes(query.toLowerCase())
          ),
        });
      }
    }

    setPropEl(searchRezults);
  };

  const resetDataHandler = () => {
    setSearchData(filterData);
  };

  const onSearchHomeHandler = (query) => {
    const searchRezults = filterData.filter((el) =>
      el.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchData(searchRezults);
  };

  const onPlayHandler = () => {
    setPlay(!play);
    let audio = new Audio(require(`assets/sounds/8.wav`));
    audio.currentTime = 0;
    !play && audio.play();
  };

  const onMouseEnterSoundHandler = () => {
    let audio = new Audio(require(`assets/sounds/8.wav`));
    audio.currentTime = 0;
    play && audio.play();
  };

  const dataContext = {
    onPlayHandler,
    play,
    onMouseEnterSoundHandler,
    dataGet,
    searchData,
    onSearchHomeHandler,
    resetDataHandler,
    onSearchDetailsHandler,
    propEl,
    showDialog,
    show,
    closeDialog,
    screen,
    fullScreen,
    language,
    changeLanguage,
    link,
    dataLanguage,
    orientation,
  };

  return (
    <Context.Provider value={dataContext}>{props.children}</Context.Provider>
  );
};
