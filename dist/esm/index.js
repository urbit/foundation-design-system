import React$2, { Component } from 'react';
import Link from 'next/link';

function Container({
  children
}) {
  return /*#__PURE__*/React$2.createElement("div", {
    className: "flex flex-col min-h-screen w-screen max-w-full items-center"
  }, children);
}

function SingleColumn({
  children
}) {
  return /*#__PURE__*/React$2.createElement("div", {
    className: "flex flex-col w-full items-center max-w-screen-2xl"
  }, children);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var classnames$1 = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */
	(function () {

	  var hasOwn = {}.hasOwnProperty;

	  function classNames() {
	    var classes = [];

	    for (var i = 0; i < arguments.length; i++) {
	      var arg = arguments[i];
	      if (!arg) continue;
	      var argType = typeof arg;

	      if (argType === 'string' || argType === 'number') {
	        classes.push(arg);
	      } else if (Array.isArray(arg)) {
	        if (arg.length) {
	          var inner = classNames.apply(null, arg);

	          if (inner) {
	            classes.push(inner);
	          }
	        }
	      } else if (argType === 'object') {
	        if (arg.toString === Object.prototype.toString) {
	          for (var key in arg) {
	            if (hasOwn.call(arg, key) && arg[key]) {
	              classes.push(key);
	            }
	          }
	        } else {
	          classes.push(arg.toString());
	        }
	      }
	    }

	    return classes.join(' ');
	  }

	  if (module.exports) {
	    classNames.default = classNames;
	    module.exports = classNames;
	  } else {
	    window.classNames = classNames;
	  }
	})();
} (classnames$1));

var classnames = classnames$1.exports;

function Section({
  children,
  className = "",
  short = false,
  narrow = false
}) {
  const spacing = classnames({
    "py-8": short,
    "py-20": !short,
    "layout-narrow": narrow,
    layout: !narrow
  });
  return /*#__PURE__*/React$2.createElement("section", {
    className: `w-full px-4 md:px-8 ${spacing} ${className}`
  }, children);
}

function Footer({
  title,
  data = [[{}], [{}]]
}) {
  return /*#__PURE__*/React$2.createElement("footer", {
    className: "bg-wall-100 mt-20 w-full flex justify-center"
  }, /*#__PURE__*/React$2.createElement(SingleColumn, null, /*#__PURE__*/React$2.createElement(Section, {
    className: "pt-20"
  }, /*#__PURE__*/React$2.createElement("p", {
    className: "font-semibold text-2xl"
  }, "~"), /*#__PURE__*/React$2.createElement("p", {
    className: "font-semibold"
  }, title), /*#__PURE__*/React$2.createElement("div", {
    className: "flex flex-row flex-wrap"
  }, data?.[0]?.map(section => {
    return /*#__PURE__*/React$2.createElement("div", {
      key: section.title,
      className: "w-1/2 md:w-1/3 flex flex-col shrink"
    }, section.title && /*#__PURE__*/React$2.createElement("h4", {
      className: "mt-16 mb-8"
    }, section.title), section.links.map(link => {
      return /*#__PURE__*/React$2.createElement(Link, {
        key: link.href,
        href: link.href,
        passHref: true
      }, /*#__PURE__*/React$2.createElement("a", {
        className: "type-medium text-wall-500"
      }, link.title));
    }));
  }))), /*#__PURE__*/React$2.createElement(Section, {
    className: "flex flex-col md:flex-row"
  }, data?.[1]?.map(link => {
    return /*#__PURE__*/React$2.createElement("div", {
      key: link.href,
      className: "md:w-1/3"
    }, /*#__PURE__*/React$2.createElement(Link, {
      href: link.href,
      passHref: true
    }, /*#__PURE__*/React$2.createElement("a", {
      className: "type-medium text-wall-500"
    }, link.title)));
  }))));
}

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$1.apply(this, arguments);
}

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;

var __markAsModule = target => __defProp(target, "__esModule", {
  value: true
});

var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};

var __export = (target, all) => {
  __markAsModule(target);

  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};

var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module)) if (!__hasOwnProp.call(target, key) && key !== "default") __defProp(target, key, {
      get: () => module[key],
      enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
    });
  }

  return target;
};

var __toModule = module => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {
    get: () => module.default,
    enumerable: true
  } : {
    value: module,
    enumerable: true
  })), module);
}; // node_modules/entities/lib/maps/entities.json


var require_entities = __commonJS({
  "node_modules/entities/lib/maps/entities.json"(exports, module) {
    module.exports = {
      Aacute: "\xC1",
      aacute: "\xE1",
      Abreve: "\u0102",
      abreve: "\u0103",
      ac: "\u223E",
      acd: "\u223F",
      acE: "\u223E\u0333",
      Acirc: "\xC2",
      acirc: "\xE2",
      acute: "\xB4",
      Acy: "\u0410",
      acy: "\u0430",
      AElig: "\xC6",
      aelig: "\xE6",
      af: "\u2061",
      Afr: "\u{1D504}",
      afr: "\u{1D51E}",
      Agrave: "\xC0",
      agrave: "\xE0",
      alefsym: "\u2135",
      aleph: "\u2135",
      Alpha: "\u0391",
      alpha: "\u03B1",
      Amacr: "\u0100",
      amacr: "\u0101",
      amalg: "\u2A3F",
      amp: "&",
      AMP: "&",
      andand: "\u2A55",
      And: "\u2A53",
      and: "\u2227",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angmsd: "\u2221",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xC5",
      angzarr: "\u237C",
      Aogon: "\u0104",
      aogon: "\u0105",
      Aopf: "\u{1D538}",
      aopf: "\u{1D552}",
      apacir: "\u2A6F",
      ap: "\u2248",
      apE: "\u2A70",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      ApplyFunction: "\u2061",
      approx: "\u2248",
      approxeq: "\u224A",
      Aring: "\xC5",
      aring: "\xE5",
      Ascr: "\u{1D49C}",
      ascr: "\u{1D4B6}",
      Assign: "\u2254",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      Atilde: "\xC3",
      atilde: "\xE3",
      Auml: "\xC4",
      auml: "\xE4",
      awconint: "\u2233",
      awint: "\u2A11",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      barvee: "\u22BD",
      barwed: "\u2305",
      Barwed: "\u2306",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      Bcy: "\u0411",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      because: "\u2235",
      Because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      Bfr: "\u{1D505}",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bNot: "\u2AED",
      bnot: "\u2310",
      Bopf: "\u{1D539}",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxbox: "\u29C9",
      boxdl: "\u2510",
      boxdL: "\u2555",
      boxDl: "\u2556",
      boxDL: "\u2557",
      boxdr: "\u250C",
      boxdR: "\u2552",
      boxDr: "\u2553",
      boxDR: "\u2554",
      boxh: "\u2500",
      boxH: "\u2550",
      boxhd: "\u252C",
      boxHd: "\u2564",
      boxhD: "\u2565",
      boxHD: "\u2566",
      boxhu: "\u2534",
      boxHu: "\u2567",
      boxhU: "\u2568",
      boxHU: "\u2569",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxul: "\u2518",
      boxuL: "\u255B",
      boxUl: "\u255C",
      boxUL: "\u255D",
      boxur: "\u2514",
      boxuR: "\u2558",
      boxUr: "\u2559",
      boxUR: "\u255A",
      boxv: "\u2502",
      boxV: "\u2551",
      boxvh: "\u253C",
      boxvH: "\u256A",
      boxVh: "\u256B",
      boxVH: "\u256C",
      boxvl: "\u2524",
      boxvL: "\u2561",
      boxVl: "\u2562",
      boxVL: "\u2563",
      boxvr: "\u251C",
      boxvR: "\u255E",
      boxVr: "\u255F",
      boxVR: "\u2560",
      bprime: "\u2035",
      breve: "\u02D8",
      Breve: "\u02D8",
      brvbar: "\xA6",
      bscr: "\u{1D4B7}",
      Bscr: "\u212C",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsolb: "\u29C5",
      bsol: "\\",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      Bumpeq: "\u224E",
      bumpeq: "\u224F",
      Cacute: "\u0106",
      cacute: "\u0107",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      cap: "\u2229",
      Cap: "\u22D2",
      capcup: "\u2A47",
      capdot: "\u2A40",
      CapitalDifferentialD: "\u2145",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      Cayleys: "\u212D",
      ccaps: "\u2A4D",
      Ccaron: "\u010C",
      ccaron: "\u010D",
      Ccedil: "\xC7",
      ccedil: "\xE7",
      Ccirc: "\u0108",
      ccirc: "\u0109",
      Cconint: "\u2230",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      Cdot: "\u010A",
      cdot: "\u010B",
      cedil: "\xB8",
      Cedilla: "\xB8",
      cemptyv: "\u29B2",
      cent: "\xA2",
      centerdot: "\xB7",
      CenterDot: "\xB7",
      cfr: "\u{1D520}",
      Cfr: "\u212D",
      CHcy: "\u0427",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      Chi: "\u03A7",
      chi: "\u03C7",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      CircleDot: "\u2299",
      circledR: "\xAE",
      circledS: "\u24C8",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      cir: "\u25CB",
      cirE: "\u29C3",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      clubs: "\u2663",
      clubsuit: "\u2663",
      colon: ":",
      Colon: "\u2237",
      Colone: "\u2A74",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      Congruent: "\u2261",
      conint: "\u222E",
      Conint: "\u222F",
      ContourIntegral: "\u222E",
      copf: "\u{1D554}",
      Copf: "\u2102",
      coprod: "\u2210",
      Coproduct: "\u2210",
      copy: "\xA9",
      COPY: "\xA9",
      copysr: "\u2117",
      CounterClockwiseContourIntegral: "\u2233",
      crarr: "\u21B5",
      cross: "\u2717",
      Cross: "\u2A2F",
      Cscr: "\u{1D49E}",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      cupbrcap: "\u2A48",
      cupcap: "\u2A46",
      CupCap: "\u224D",
      cup: "\u222A",
      Cup: "\u22D3",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xA4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      dagger: "\u2020",
      Dagger: "\u2021",
      daleth: "\u2138",
      darr: "\u2193",
      Darr: "\u21A1",
      dArr: "\u21D3",
      dash: "\u2010",
      Dashv: "\u2AE4",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      Dcaron: "\u010E",
      dcaron: "\u010F",
      Dcy: "\u0414",
      dcy: "\u0434",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      DD: "\u2145",
      dd: "\u2146",
      DDotrahd: "\u2911",
      ddotseq: "\u2A77",
      deg: "\xB0",
      Del: "\u2207",
      Delta: "\u0394",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      Dfr: "\u{1D507}",
      dfr: "\u{1D521}",
      dHar: "\u2965",
      dharl: "\u21C3",
      dharr: "\u21C2",
      DiacriticalAcute: "\xB4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      diam: "\u22C4",
      diamond: "\u22C4",
      Diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xA8",
      DifferentialD: "\u2146",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xF7",
      divide: "\xF7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      DJcy: "\u0402",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      Dopf: "\u{1D53B}",
      dopf: "\u{1D555}",
      Dot: "\xA8",
      dot: "\u02D9",
      DotDot: "\u20DC",
      doteq: "\u2250",
      doteqdot: "\u2251",
      DotEqual: "\u2250",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xA8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrowBar: "\u2913",
      downarrow: "\u2193",
      DownArrow: "\u2193",
      Downarrow: "\u21D3",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVectorBar: "\u2956",
      DownLeftVector: "\u21BD",
      DownRightTeeVector: "\u295F",
      DownRightVectorBar: "\u2957",
      DownRightVector: "\u21C1",
      DownTeeArrow: "\u21A7",
      DownTee: "\u22A4",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      Dscr: "\u{1D49F}",
      dscr: "\u{1D4B9}",
      DScy: "\u0405",
      dscy: "\u0455",
      dsol: "\u29F6",
      Dstrok: "\u0110",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      DZcy: "\u040F",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      Eacute: "\xC9",
      eacute: "\xE9",
      easter: "\u2A6E",
      Ecaron: "\u011A",
      ecaron: "\u011B",
      Ecirc: "\xCA",
      ecirc: "\xEA",
      ecir: "\u2256",
      ecolon: "\u2255",
      Ecy: "\u042D",
      ecy: "\u044D",
      eDDot: "\u2A77",
      Edot: "\u0116",
      edot: "\u0117",
      eDot: "\u2251",
      ee: "\u2147",
      efDot: "\u2252",
      Efr: "\u{1D508}",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      Egrave: "\xC8",
      egrave: "\xE8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      Element: "\u2208",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      Emacr: "\u0112",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      EmptySmallSquare: "\u25FB",
      emptyv: "\u2205",
      EmptyVerySmallSquare: "\u25AB",
      emsp13: "\u2004",
      emsp14: "\u2005",
      emsp: "\u2003",
      ENG: "\u014A",
      eng: "\u014B",
      ensp: "\u2002",
      Eogon: "\u0118",
      eogon: "\u0119",
      Eopf: "\u{1D53C}",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      Epsilon: "\u0395",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      Equal: "\u2A75",
      equals: "=",
      EqualTilde: "\u2242",
      equest: "\u225F",
      Equilibrium: "\u21CC",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erarr: "\u2971",
      erDot: "\u2253",
      escr: "\u212F",
      Escr: "\u2130",
      esdot: "\u2250",
      Esim: "\u2A73",
      esim: "\u2242",
      Eta: "\u0397",
      eta: "\u03B7",
      ETH: "\xD0",
      eth: "\xF0",
      Euml: "\xCB",
      euml: "\xEB",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      Exists: "\u2203",
      expectation: "\u2130",
      exponentiale: "\u2147",
      ExponentialE: "\u2147",
      fallingdotseq: "\u2252",
      Fcy: "\u0424",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      Ffr: "\u{1D509}",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      Fopf: "\u{1D53D}",
      fopf: "\u{1D557}",
      forall: "\u2200",
      ForAll: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      Fouriertrf: "\u2131",
      fpartint: "\u2A0D",
      frac12: "\xBD",
      frac13: "\u2153",
      frac14: "\xBC",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xBE",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      fscr: "\u{1D4BB}",
      Fscr: "\u2131",
      gacute: "\u01F5",
      Gamma: "\u0393",
      gamma: "\u03B3",
      Gammad: "\u03DC",
      gammad: "\u03DD",
      gap: "\u2A86",
      Gbreve: "\u011E",
      gbreve: "\u011F",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      gcirc: "\u011D",
      Gcy: "\u0413",
      gcy: "\u0433",
      Gdot: "\u0120",
      gdot: "\u0121",
      ge: "\u2265",
      gE: "\u2267",
      gEl: "\u2A8C",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      gescc: "\u2AA9",
      ges: "\u2A7E",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      Gfr: "\u{1D50A}",
      gfr: "\u{1D524}",
      gg: "\u226B",
      Gg: "\u22D9",
      ggg: "\u22D9",
      gimel: "\u2137",
      GJcy: "\u0403",
      gjcy: "\u0453",
      gla: "\u2AA5",
      gl: "\u2277",
      glE: "\u2A92",
      glj: "\u2AA4",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gne: "\u2A88",
      gnE: "\u2269",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      Gopf: "\u{1D53E}",
      gopf: "\u{1D558}",
      grave: "`",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gt: ">",
      GT: ">",
      Gt: "\u226B",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      Hacek: "\u02C7",
      hairsp: "\u200A",
      half: "\xBD",
      hamilt: "\u210B",
      HARDcy: "\u042A",
      hardcy: "\u044A",
      harrcir: "\u2948",
      harr: "\u2194",
      hArr: "\u21D4",
      harrw: "\u21AD",
      Hat: "^",
      hbar: "\u210F",
      Hcirc: "\u0124",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      hfr: "\u{1D525}",
      Hfr: "\u210C",
      HilbertSpace: "\u210B",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      hopf: "\u{1D559}",
      Hopf: "\u210D",
      horbar: "\u2015",
      HorizontalLine: "\u2500",
      hscr: "\u{1D4BD}",
      Hscr: "\u210B",
      hslash: "\u210F",
      Hstrok: "\u0126",
      hstrok: "\u0127",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      hybull: "\u2043",
      hyphen: "\u2010",
      Iacute: "\xCD",
      iacute: "\xED",
      ic: "\u2063",
      Icirc: "\xCE",
      icirc: "\xEE",
      Icy: "\u0418",
      icy: "\u0438",
      Idot: "\u0130",
      IEcy: "\u0415",
      iecy: "\u0435",
      iexcl: "\xA1",
      iff: "\u21D4",
      ifr: "\u{1D526}",
      Ifr: "\u2111",
      Igrave: "\xCC",
      igrave: "\xEC",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      IJlig: "\u0132",
      ijlig: "\u0133",
      Imacr: "\u012A",
      imacr: "\u012B",
      image: "\u2111",
      ImaginaryI: "\u2148",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      Im: "\u2111",
      imof: "\u22B7",
      imped: "\u01B5",
      Implies: "\u21D2",
      incare: "\u2105",
      in: "\u2208",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      intcal: "\u22BA",
      int: "\u222B",
      Int: "\u222C",
      integers: "\u2124",
      Integral: "\u222B",
      intercal: "\u22BA",
      Intersection: "\u22C2",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      IOcy: "\u0401",
      iocy: "\u0451",
      Iogon: "\u012E",
      iogon: "\u012F",
      Iopf: "\u{1D540}",
      iopf: "\u{1D55A}",
      Iota: "\u0399",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xBF",
      iscr: "\u{1D4BE}",
      Iscr: "\u2110",
      isin: "\u2208",
      isindot: "\u22F5",
      isinE: "\u22F9",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      Itilde: "\u0128",
      itilde: "\u0129",
      Iukcy: "\u0406",
      iukcy: "\u0456",
      Iuml: "\xCF",
      iuml: "\xEF",
      Jcirc: "\u0134",
      jcirc: "\u0135",
      Jcy: "\u0419",
      jcy: "\u0439",
      Jfr: "\u{1D50D}",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      Jopf: "\u{1D541}",
      jopf: "\u{1D55B}",
      Jscr: "\u{1D4A5}",
      jscr: "\u{1D4BF}",
      Jsercy: "\u0408",
      jsercy: "\u0458",
      Jukcy: "\u0404",
      jukcy: "\u0454",
      Kappa: "\u039A",
      kappa: "\u03BA",
      kappav: "\u03F0",
      Kcedil: "\u0136",
      kcedil: "\u0137",
      Kcy: "\u041A",
      kcy: "\u043A",
      Kfr: "\u{1D50E}",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      KHcy: "\u0425",
      khcy: "\u0445",
      KJcy: "\u040C",
      kjcy: "\u045C",
      Kopf: "\u{1D542}",
      kopf: "\u{1D55C}",
      Kscr: "\u{1D4A6}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      Lacute: "\u0139",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      Lambda: "\u039B",
      lambda: "\u03BB",
      lang: "\u27E8",
      Lang: "\u27EA",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      Laplacetrf: "\u2112",
      laquo: "\xAB",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larr: "\u2190",
      Larr: "\u219E",
      lArr: "\u21D0",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      latail: "\u2919",
      lAtail: "\u291B",
      lat: "\u2AAB",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lbarr: "\u290C",
      lBarr: "\u290E",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      Lcaron: "\u013D",
      lcaron: "\u013E",
      Lcedil: "\u013B",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      Lcy: "\u041B",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      le: "\u2264",
      lE: "\u2266",
      LeftAngleBracket: "\u27E8",
      LeftArrowBar: "\u21E4",
      leftarrow: "\u2190",
      LeftArrow: "\u2190",
      Leftarrow: "\u21D0",
      LeftArrowRightArrow: "\u21C6",
      leftarrowtail: "\u21A2",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVectorBar: "\u2959",
      LeftDownVector: "\u21C3",
      LeftFloor: "\u230A",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      leftrightarrow: "\u2194",
      LeftRightArrow: "\u2194",
      Leftrightarrow: "\u21D4",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      LeftRightVector: "\u294E",
      LeftTeeArrow: "\u21A4",
      LeftTee: "\u22A3",
      LeftTeeVector: "\u295A",
      leftthreetimes: "\u22CB",
      LeftTriangleBar: "\u29CF",
      LeftTriangle: "\u22B2",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVectorBar: "\u2958",
      LeftUpVector: "\u21BF",
      LeftVectorBar: "\u2952",
      LeftVector: "\u21BC",
      lEg: "\u2A8B",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      lescc: "\u2AA8",
      les: "\u2A7D",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      lessgtr: "\u2276",
      LessLess: "\u2AA1",
      lesssim: "\u2272",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      Lfr: "\u{1D50F}",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lHar: "\u2962",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      LJcy: "\u0409",
      ljcy: "\u0459",
      llarr: "\u21C7",
      ll: "\u226A",
      Ll: "\u22D8",
      llcorner: "\u231E",
      Lleftarrow: "\u21DA",
      llhard: "\u296B",
      lltri: "\u25FA",
      Lmidot: "\u013F",
      lmidot: "\u0140",
      lmoustache: "\u23B0",
      lmoust: "\u23B0",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lne: "\u2A87",
      lnE: "\u2268",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      longleftarrow: "\u27F5",
      LongLeftArrow: "\u27F5",
      Longleftarrow: "\u27F8",
      longleftrightarrow: "\u27F7",
      LongLeftRightArrow: "\u27F7",
      Longleftrightarrow: "\u27FA",
      longmapsto: "\u27FC",
      longrightarrow: "\u27F6",
      LongRightArrow: "\u27F6",
      Longrightarrow: "\u27F9",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      Lopf: "\u{1D543}",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      lscr: "\u{1D4C1}",
      Lscr: "\u2112",
      lsh: "\u21B0",
      Lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      Lstrok: "\u0141",
      lstrok: "\u0142",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      lt: "<",
      LT: "<",
      Lt: "\u226A",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      ltrPar: "\u2996",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      macr: "\xAF",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      Map: "\u2905",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      Mcy: "\u041C",
      mcy: "\u043C",
      mdash: "\u2014",
      mDDot: "\u223A",
      measuredangle: "\u2221",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xB5",
      midast: "*",
      midcir: "\u2AF0",
      mid: "\u2223",
      middot: "\xB7",
      minusb: "\u229F",
      minus: "\u2212",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      MinusPlus: "\u2213",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      Mopf: "\u{1D544}",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      mscr: "\u{1D4C2}",
      Mscr: "\u2133",
      mstpos: "\u223E",
      Mu: "\u039C",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nabla: "\u2207",
      Nacute: "\u0143",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natural: "\u266E",
      naturals: "\u2115",
      natur: "\u266E",
      nbsp: "\xA0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      Ncaron: "\u0147",
      ncaron: "\u0148",
      Ncedil: "\u0145",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      Ncy: "\u041D",
      ncy: "\u043D",
      ndash: "\u2013",
      nearhk: "\u2924",
      nearr: "\u2197",
      neArr: "\u21D7",
      nearrow: "\u2197",
      ne: "\u2260",
      nedot: "\u2250\u0338",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: "\n",
      nexist: "\u2204",
      nexists: "\u2204",
      Nfr: "\u{1D511}",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      nGg: "\u22D9\u0338",
      ngsim: "\u2275",
      nGt: "\u226B\u20D2",
      ngt: "\u226F",
      ngtr: "\u226F",
      nGtv: "\u226B\u0338",
      nharr: "\u21AE",
      nhArr: "\u21CE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      NJcy: "\u040A",
      njcy: "\u045A",
      nlarr: "\u219A",
      nlArr: "\u21CD",
      nldr: "\u2025",
      nlE: "\u2266\u0338",
      nle: "\u2270",
      nleftarrow: "\u219A",
      nLeftarrow: "\u21CD",
      nleftrightarrow: "\u21AE",
      nLeftrightarrow: "\u21CE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nLl: "\u22D8\u0338",
      nlsim: "\u2274",
      nLt: "\u226A\u20D2",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nLtv: "\u226A\u0338",
      nmid: "\u2224",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xA0",
      nopf: "\u{1D55F}",
      Nopf: "\u2115",
      Not: "\u2AEC",
      not: "\xAC",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      notin: "\u2209",
      notindot: "\u22F5\u0338",
      notinE: "\u22F9\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangle: "\u22EB",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      nparallel: "\u2226",
      npar: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      npre: "\u2AAF\u0338",
      nrarrc: "\u2933\u0338",
      nrarr: "\u219B",
      nrArr: "\u21CF",
      nrarrw: "\u219D\u0338",
      nrightarrow: "\u219B",
      nRightarrow: "\u21CF",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      Nscr: "\u{1D4A9}",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      Ntilde: "\xD1",
      ntilde: "\xF1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      Nu: "\u039D",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvap: "\u224D\u20D2",
      nvdash: "\u22AC",
      nvDash: "\u22AD",
      nVdash: "\u22AE",
      nVDash: "\u22AF",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvHarr: "\u2904",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwarhk: "\u2923",
      nwarr: "\u2196",
      nwArr: "\u21D6",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      Oacute: "\xD3",
      oacute: "\xF3",
      oast: "\u229B",
      Ocirc: "\xD4",
      ocirc: "\xF4",
      ocir: "\u229A",
      Ocy: "\u041E",
      ocy: "\u043E",
      odash: "\u229D",
      Odblac: "\u0150",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      OElig: "\u0152",
      oelig: "\u0153",
      ofcir: "\u29BF",
      Ofr: "\u{1D512}",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      Ograve: "\xD2",
      ograve: "\xF2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      Omacr: "\u014C",
      omacr: "\u014D",
      Omega: "\u03A9",
      omega: "\u03C9",
      Omicron: "\u039F",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      Oopf: "\u{1D546}",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      operp: "\u29B9",
      oplus: "\u2295",
      orarr: "\u21BB",
      Or: "\u2A54",
      or: "\u2228",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xAA",
      ordm: "\xBA",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oS: "\u24C8",
      Oscr: "\u{1D4AA}",
      oscr: "\u2134",
      Oslash: "\xD8",
      oslash: "\xF8",
      osol: "\u2298",
      Otilde: "\xD5",
      otilde: "\xF5",
      otimesas: "\u2A36",
      Otimes: "\u2A37",
      otimes: "\u2297",
      Ouml: "\xD6",
      ouml: "\xF6",
      ovbar: "\u233D",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      para: "\xB6",
      parallel: "\u2225",
      par: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      PartialD: "\u2202",
      Pcy: "\u041F",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      Pfr: "\u{1D513}",
      pfr: "\u{1D52D}",
      Phi: "\u03A6",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      Pi: "\u03A0",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plus: "+",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      PlusMinus: "\xB1",
      plusmn: "\xB1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xB1",
      Poincareplane: "\u210C",
      pointint: "\u2A15",
      popf: "\u{1D561}",
      Popf: "\u2119",
      pound: "\xA3",
      prap: "\u2AB7",
      Pr: "\u2ABB",
      pr: "\u227A",
      prcue: "\u227C",
      precapprox: "\u2AB7",
      prec: "\u227A",
      preccurlyeq: "\u227C",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      pre: "\u2AAF",
      prE: "\u2AB3",
      precsim: "\u227E",
      prime: "\u2032",
      Prime: "\u2033",
      primes: "\u2119",
      prnap: "\u2AB9",
      prnE: "\u2AB5",
      prnsim: "\u22E8",
      prod: "\u220F",
      Product: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      Proportional: "\u221D",
      Proportion: "\u2237",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      Pscr: "\u{1D4AB}",
      pscr: "\u{1D4C5}",
      Psi: "\u03A8",
      psi: "\u03C8",
      puncsp: "\u2008",
      Qfr: "\u{1D514}",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      qopf: "\u{1D562}",
      Qopf: "\u211A",
      qprime: "\u2057",
      Qscr: "\u{1D4AC}",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      quot: '"',
      QUOT: '"',
      rAarr: "\u21DB",
      race: "\u223D\u0331",
      Racute: "\u0154",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      rang: "\u27E9",
      Rang: "\u27EB",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xBB",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarr: "\u2192",
      Rarr: "\u21A0",
      rArr: "\u21D2",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      Rarrtl: "\u2916",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      ratail: "\u291A",
      rAtail: "\u291C",
      ratio: "\u2236",
      rationals: "\u211A",
      rbarr: "\u290D",
      rBarr: "\u290F",
      RBarr: "\u2910",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      Rcaron: "\u0158",
      rcaron: "\u0159",
      Rcedil: "\u0156",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      Rcy: "\u0420",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      Re: "\u211C",
      rect: "\u25AD",
      reg: "\xAE",
      REG: "\xAE",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      rfisht: "\u297D",
      rfloor: "\u230B",
      rfr: "\u{1D52F}",
      Rfr: "\u211C",
      rHar: "\u2964",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      Rho: "\u03A1",
      rho: "\u03C1",
      rhov: "\u03F1",
      RightAngleBracket: "\u27E9",
      RightArrowBar: "\u21E5",
      rightarrow: "\u2192",
      RightArrow: "\u2192",
      Rightarrow: "\u21D2",
      RightArrowLeftArrow: "\u21C4",
      rightarrowtail: "\u21A3",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVectorBar: "\u2955",
      RightDownVector: "\u21C2",
      RightFloor: "\u230B",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      RightTeeArrow: "\u21A6",
      RightTee: "\u22A2",
      RightTeeVector: "\u295B",
      rightthreetimes: "\u22CC",
      RightTriangleBar: "\u29D0",
      RightTriangle: "\u22B3",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVectorBar: "\u2954",
      RightUpVector: "\u21BE",
      RightVectorBar: "\u2953",
      RightVector: "\u21C0",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoustache: "\u23B1",
      rmoust: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      ropf: "\u{1D563}",
      Ropf: "\u211D",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      RoundImplies: "\u2970",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      Rrightarrow: "\u21DB",
      rsaquo: "\u203A",
      rscr: "\u{1D4C7}",
      Rscr: "\u211B",
      rsh: "\u21B1",
      Rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      RuleDelayed: "\u29F4",
      ruluhar: "\u2968",
      rx: "\u211E",
      Sacute: "\u015A",
      sacute: "\u015B",
      sbquo: "\u201A",
      scap: "\u2AB8",
      Scaron: "\u0160",
      scaron: "\u0161",
      Sc: "\u2ABC",
      sc: "\u227B",
      sccue: "\u227D",
      sce: "\u2AB0",
      scE: "\u2AB4",
      Scedil: "\u015E",
      scedil: "\u015F",
      Scirc: "\u015C",
      scirc: "\u015D",
      scnap: "\u2ABA",
      scnE: "\u2AB6",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      Scy: "\u0421",
      scy: "\u0441",
      sdotb: "\u22A1",
      sdot: "\u22C5",
      sdote: "\u2A66",
      searhk: "\u2925",
      searr: "\u2198",
      seArr: "\u21D8",
      searrow: "\u2198",
      sect: "\xA7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      Sfr: "\u{1D516}",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      SHCHcy: "\u0429",
      shchcy: "\u0449",
      SHcy: "\u0428",
      shcy: "\u0448",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      shy: "\xAD",
      Sigma: "\u03A3",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      SmallCircle: "\u2218",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      SOFTcy: "\u042C",
      softcy: "\u044C",
      solbar: "\u233F",
      solb: "\u29C4",
      sol: "/",
      Sopf: "\u{1D54A}",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      Sqrt: "\u221A",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      square: "\u25A1",
      Square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      squarf: "\u25AA",
      squ: "\u25A1",
      squf: "\u25AA",
      srarr: "\u2192",
      Sscr: "\u{1D4AE}",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      Star: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xAF",
      sub: "\u2282",
      Sub: "\u22D0",
      subdot: "\u2ABD",
      subE: "\u2AC5",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      subset: "\u2282",
      Subset: "\u22D0",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      SubsetEqual: "\u2286",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succapprox: "\u2AB8",
      succ: "\u227B",
      succcurlyeq: "\u227D",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      SuchThat: "\u220B",
      sum: "\u2211",
      Sum: "\u2211",
      sung: "\u266A",
      sup1: "\xB9",
      sup2: "\xB2",
      sup3: "\xB3",
      sup: "\u2283",
      Sup: "\u22D1",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supE: "\u2AC6",
      supe: "\u2287",
      supedot: "\u2AC4",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      supset: "\u2283",
      Supset: "\u22D1",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swarhk: "\u2926",
      swarr: "\u2199",
      swArr: "\u21D9",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xDF",
      Tab: "	",
      target: "\u2316",
      Tau: "\u03A4",
      tau: "\u03C4",
      tbrk: "\u23B4",
      Tcaron: "\u0164",
      tcaron: "\u0165",
      Tcedil: "\u0162",
      tcedil: "\u0163",
      Tcy: "\u0422",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      Tfr: "\u{1D517}",
      tfr: "\u{1D531}",
      there4: "\u2234",
      therefore: "\u2234",
      Therefore: "\u2234",
      Theta: "\u0398",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      ThickSpace: "\u205F\u200A",
      ThinSpace: "\u2009",
      thinsp: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      THORN: "\xDE",
      thorn: "\xFE",
      tilde: "\u02DC",
      Tilde: "\u223C",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      timesbar: "\u2A31",
      timesb: "\u22A0",
      times: "\xD7",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      topbot: "\u2336",
      topcir: "\u2AF1",
      top: "\u22A4",
      Topf: "\u{1D54B}",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      trade: "\u2122",
      TRADE: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      TripleDot: "\u20DB",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      Tscr: "\u{1D4AF}",
      tscr: "\u{1D4C9}",
      TScy: "\u0426",
      tscy: "\u0446",
      TSHcy: "\u040B",
      tshcy: "\u045B",
      Tstrok: "\u0166",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      Uacute: "\xDA",
      uacute: "\xFA",
      uarr: "\u2191",
      Uarr: "\u219F",
      uArr: "\u21D1",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      ubrcy: "\u045E",
      Ubreve: "\u016C",
      ubreve: "\u016D",
      Ucirc: "\xDB",
      ucirc: "\xFB",
      Ucy: "\u0423",
      ucy: "\u0443",
      udarr: "\u21C5",
      Udblac: "\u0170",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      Ufr: "\u{1D518}",
      ufr: "\u{1D532}",
      Ugrave: "\xD9",
      ugrave: "\xF9",
      uHar: "\u2963",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      Umacr: "\u016A",
      umacr: "\u016B",
      uml: "\xA8",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      uogon: "\u0173",
      Uopf: "\u{1D54C}",
      uopf: "\u{1D566}",
      UpArrowBar: "\u2912",
      uparrow: "\u2191",
      UpArrow: "\u2191",
      Uparrow: "\u21D1",
      UpArrowDownArrow: "\u21C5",
      updownarrow: "\u2195",
      UpDownArrow: "\u2195",
      Updownarrow: "\u21D5",
      UpEquilibrium: "\u296E",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      upsi: "\u03C5",
      Upsi: "\u03D2",
      upsih: "\u03D2",
      Upsilon: "\u03A5",
      upsilon: "\u03C5",
      UpTeeArrow: "\u21A5",
      UpTee: "\u22A5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      Uring: "\u016E",
      uring: "\u016F",
      urtri: "\u25F9",
      Uscr: "\u{1D4B0}",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      Utilde: "\u0168",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      Uuml: "\xDC",
      uuml: "\xFC",
      uwangle: "\u29A7",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      varr: "\u2195",
      vArr: "\u21D5",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      vBar: "\u2AE8",
      Vbar: "\u2AEB",
      vBarv: "\u2AE9",
      Vcy: "\u0412",
      vcy: "\u0432",
      vdash: "\u22A2",
      vDash: "\u22A8",
      Vdash: "\u22A9",
      VDash: "\u22AB",
      Vdashl: "\u2AE6",
      veebar: "\u22BB",
      vee: "\u2228",
      Vee: "\u22C1",
      veeeq: "\u225A",
      vellip: "\u22EE",
      verbar: "|",
      Verbar: "\u2016",
      vert: "|",
      Vert: "\u2016",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      Vopf: "\u{1D54D}",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      Vscr: "\u{1D4B1}",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      Vvdash: "\u22AA",
      vzigzag: "\u299A",
      Wcirc: "\u0174",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      wedge: "\u2227",
      Wedge: "\u22C0",
      wedgeq: "\u2259",
      weierp: "\u2118",
      Wfr: "\u{1D51A}",
      wfr: "\u{1D534}",
      Wopf: "\u{1D54E}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      Wscr: "\u{1D4B2}",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      Xfr: "\u{1D51B}",
      xfr: "\u{1D535}",
      xharr: "\u27F7",
      xhArr: "\u27FA",
      Xi: "\u039E",
      xi: "\u03BE",
      xlarr: "\u27F5",
      xlArr: "\u27F8",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      Xopf: "\u{1D54F}",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrarr: "\u27F6",
      xrArr: "\u27F9",
      Xscr: "\u{1D4B3}",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      Yacute: "\xDD",
      yacute: "\xFD",
      YAcy: "\u042F",
      yacy: "\u044F",
      Ycirc: "\u0176",
      ycirc: "\u0177",
      Ycy: "\u042B",
      ycy: "\u044B",
      yen: "\xA5",
      Yfr: "\u{1D51C}",
      yfr: "\u{1D536}",
      YIcy: "\u0407",
      yicy: "\u0457",
      Yopf: "\u{1D550}",
      yopf: "\u{1D56A}",
      Yscr: "\u{1D4B4}",
      yscr: "\u{1D4CE}",
      YUcy: "\u042E",
      yucy: "\u044E",
      yuml: "\xFF",
      Yuml: "\u0178",
      Zacute: "\u0179",
      zacute: "\u017A",
      Zcaron: "\u017D",
      zcaron: "\u017E",
      Zcy: "\u0417",
      zcy: "\u0437",
      Zdot: "\u017B",
      zdot: "\u017C",
      zeetrf: "\u2128",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      zeta: "\u03B6",
      zfr: "\u{1D537}",
      Zfr: "\u2128",
      ZHcy: "\u0416",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      zopf: "\u{1D56B}",
      Zopf: "\u2124",
      Zscr: "\u{1D4B5}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    };
  }

}); // node_modules/markdown-it/lib/common/entities.js


var require_entities2 = __commonJS({
  "node_modules/markdown-it/lib/common/entities.js"(exports, module) {

    module.exports = require_entities();
  }

}); // node_modules/uc.micro/categories/P/regex.js


var require_regex = __commonJS({
  "node_modules/uc.micro/categories/P/regex.js"(exports, module) {
    module.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
  }

}); // node_modules/mdurl/encode.js


var require_encode = __commonJS({
  "node_modules/mdurl/encode.js"(exports, module) {

    var encodeCache = {};

    function getEncodeCache(exclude) {
      var i,
          ch,
          cache = encodeCache[exclude];

      if (cache) {
        return cache;
      }

      cache = encodeCache[exclude] = [];

      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);

        if (/^[0-9a-z]$/i.test(ch)) {
          cache.push(ch);
        } else {
          cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
        }
      }

      for (i = 0; i < exclude.length; i++) {
        cache[exclude.charCodeAt(i)] = exclude[i];
      }

      return cache;
    }

    function encode(string, exclude, keepEscaped) {
      var i,
          l,
          code2,
          nextCode,
          cache,
          result = "";

      if (typeof exclude !== "string") {
        keepEscaped = exclude;
        exclude = encode.defaultChars;
      }

      if (typeof keepEscaped === "undefined") {
        keepEscaped = true;
      }

      cache = getEncodeCache(exclude);

      for (i = 0, l = string.length; i < l; i++) {
        code2 = string.charCodeAt(i);

        if (keepEscaped && code2 === 37 && i + 2 < l) {
          if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
            result += string.slice(i, i + 3);
            i += 2;
            continue;
          }
        }

        if (code2 < 128) {
          result += cache[code2];
          continue;
        }

        if (code2 >= 55296 && code2 <= 57343) {
          if (code2 >= 55296 && code2 <= 56319 && i + 1 < l) {
            nextCode = string.charCodeAt(i + 1);

            if (nextCode >= 56320 && nextCode <= 57343) {
              result += encodeURIComponent(string[i] + string[i + 1]);
              i++;
              continue;
            }
          }

          result += "%EF%BF%BD";
          continue;
        }

        result += encodeURIComponent(string[i]);
      }

      return result;
    }

    encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
    encode.componentChars = "-_.!~*'()";
    module.exports = encode;
  }

}); // node_modules/mdurl/decode.js


var require_decode = __commonJS({
  "node_modules/mdurl/decode.js"(exports, module) {

    var decodeCache = {};

    function getDecodeCache(exclude) {
      var i,
          ch,
          cache = decodeCache[exclude];

      if (cache) {
        return cache;
      }

      cache = decodeCache[exclude] = [];

      for (i = 0; i < 128; i++) {
        ch = String.fromCharCode(i);
        cache.push(ch);
      }

      for (i = 0; i < exclude.length; i++) {
        ch = exclude.charCodeAt(i);
        cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
      }

      return cache;
    }

    function decode(string, exclude) {
      var cache;

      if (typeof exclude !== "string") {
        exclude = decode.defaultChars;
      }

      cache = getDecodeCache(exclude);
      return string.replace(/(%[a-f0-9]{2})+/gi, function (seq) {
        var i,
            l,
            b1,
            b2,
            b3,
            b4,
            chr,
            result = "";

        for (i = 0, l = seq.length; i < l; i += 3) {
          b1 = parseInt(seq.slice(i + 1, i + 3), 16);

          if (b1 < 128) {
            result += cache[b1];
            continue;
          }

          if ((b1 & 224) === 192 && i + 3 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);

            if ((b2 & 192) === 128) {
              chr = b1 << 6 & 1984 | b2 & 63;

              if (chr < 128) {
                result += "\uFFFD\uFFFD";
              } else {
                result += String.fromCharCode(chr);
              }

              i += 3;
              continue;
            }
          }

          if ((b1 & 240) === 224 && i + 6 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            b3 = parseInt(seq.slice(i + 7, i + 9), 16);

            if ((b2 & 192) === 128 && (b3 & 192) === 128) {
              chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;

              if (chr < 2048 || chr >= 55296 && chr <= 57343) {
                result += "\uFFFD\uFFFD\uFFFD";
              } else {
                result += String.fromCharCode(chr);
              }

              i += 6;
              continue;
            }
          }

          if ((b1 & 248) === 240 && i + 9 < l) {
            b2 = parseInt(seq.slice(i + 4, i + 6), 16);
            b3 = parseInt(seq.slice(i + 7, i + 9), 16);
            b4 = parseInt(seq.slice(i + 10, i + 12), 16);

            if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
              chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;

              if (chr < 65536 || chr > 1114111) {
                result += "\uFFFD\uFFFD\uFFFD\uFFFD";
              } else {
                chr -= 65536;
                result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
              }

              i += 9;
              continue;
            }
          }

          result += "\uFFFD";
        }

        return result;
      });
    }

    decode.defaultChars = ";/?:@&=+$,#";
    decode.componentChars = "";
    module.exports = decode;
  }

}); // node_modules/mdurl/format.js


var require_format = __commonJS({
  "node_modules/mdurl/format.js"(exports, module) {

    module.exports = function format(url) {
      var result = "";
      result += url.protocol || "";
      result += url.slashes ? "//" : "";
      result += url.auth ? url.auth + "@" : "";

      if (url.hostname && url.hostname.indexOf(":") !== -1) {
        result += "[" + url.hostname + "]";
      } else {
        result += url.hostname || "";
      }

      result += url.port ? ":" + url.port : "";
      result += url.pathname || "";
      result += url.search || "";
      result += url.hash || "";
      return result;
    };
  }

}); // node_modules/mdurl/parse.js


var require_parse = __commonJS({
  "node_modules/mdurl/parse.js"(exports, module) {

    function Url() {
      this.protocol = null;
      this.slashes = null;
      this.auth = null;
      this.port = null;
      this.hostname = null;
      this.hash = null;
      this.search = null;
      this.pathname = null;
    }

    var protocolPattern = /^([a-z0-9.+-]+:)/i;
    var portPattern = /:[0-9]*$/;
    var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    var autoEscape = ["'"].concat(unwise);
    var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    var hostEndingChars = ["/", "?", "#"];
    var hostnameMaxLen = 255;
    var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    var hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    var slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };

    function urlParse(url, slashesDenoteHost) {
      if (url && url instanceof Url) {
        return url;
      }

      var u = new Url();
      u.parse(url, slashesDenoteHost);
      return u;
    }

    Url.prototype.parse = function (url, slashesDenoteHost) {
      var i,
          l,
          lowerProto,
          hec,
          slashes,
          rest = url;
      rest = rest.trim();

      if (!slashesDenoteHost && url.split("#").length === 1) {
        var simplePath = simplePathPattern.exec(rest);

        if (simplePath) {
          this.pathname = simplePath[1];

          if (simplePath[2]) {
            this.search = simplePath[2];
          }

          return this;
        }
      }

      var proto = protocolPattern.exec(rest);

      if (proto) {
        proto = proto[0];
        lowerProto = proto.toLowerCase();
        this.protocol = proto;
        rest = rest.substr(proto.length);
      }

      if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        slashes = rest.substr(0, 2) === "//";

        if (slashes && !(proto && hostlessProtocol[proto])) {
          rest = rest.substr(2);
          this.slashes = true;
        }
      }

      if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        var hostEnd = -1;

        for (i = 0; i < hostEndingChars.length; i++) {
          hec = rest.indexOf(hostEndingChars[i]);

          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
            hostEnd = hec;
          }
        }

        var auth, atSign;

        if (hostEnd === -1) {
          atSign = rest.lastIndexOf("@");
        } else {
          atSign = rest.lastIndexOf("@", hostEnd);
        }

        if (atSign !== -1) {
          auth = rest.slice(0, atSign);
          rest = rest.slice(atSign + 1);
          this.auth = auth;
        }

        hostEnd = -1;

        for (i = 0; i < nonHostChars.length; i++) {
          hec = rest.indexOf(nonHostChars[i]);

          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
            hostEnd = hec;
          }
        }

        if (hostEnd === -1) {
          hostEnd = rest.length;
        }

        if (rest[hostEnd - 1] === ":") {
          hostEnd--;
        }

        var host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        this.parseHost(host);
        this.hostname = this.hostname || "";
        var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";

        if (!ipv6Hostname) {
          var hostparts = this.hostname.split(/\./);

          for (i = 0, l = hostparts.length; i < l; i++) {
            var part = hostparts[i];

            if (!part) {
              continue;
            }

            if (!part.match(hostnamePartPattern)) {
              var newpart = "";

              for (var j = 0, k = part.length; j < k; j++) {
                if (part.charCodeAt(j) > 127) {
                  newpart += "x";
                } else {
                  newpart += part[j];
                }
              }

              if (!newpart.match(hostnamePartPattern)) {
                var validParts = hostparts.slice(0, i);
                var notHost = hostparts.slice(i + 1);
                var bit = part.match(hostnamePartStart);

                if (bit) {
                  validParts.push(bit[1]);
                  notHost.unshift(bit[2]);
                }

                if (notHost.length) {
                  rest = notHost.join(".") + rest;
                }

                this.hostname = validParts.join(".");
                break;
              }
            }
          }
        }

        if (this.hostname.length > hostnameMaxLen) {
          this.hostname = "";
        }

        if (ipv6Hostname) {
          this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        }
      }

      var hash = rest.indexOf("#");

      if (hash !== -1) {
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
      }

      var qm = rest.indexOf("?");

      if (qm !== -1) {
        this.search = rest.substr(qm);
        rest = rest.slice(0, qm);
      }

      if (rest) {
        this.pathname = rest;
      }

      if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
        this.pathname = "";
      }

      return this;
    };

    Url.prototype.parseHost = function (host) {
      var port = portPattern.exec(host);

      if (port) {
        port = port[0];

        if (port !== ":") {
          this.port = port.substr(1);
        }

        host = host.substr(0, host.length - port.length);
      }

      if (host) {
        this.hostname = host;
      }
    };

    module.exports = urlParse;
  }

}); // node_modules/mdurl/index.js


var require_mdurl = __commonJS({
  "node_modules/mdurl/index.js"(exports, module) {

    module.exports.encode = require_encode();
    module.exports.decode = require_decode();
    module.exports.format = require_format();
    module.exports.parse = require_parse();
  }

}); // node_modules/uc.micro/properties/Any/regex.js


var require_regex2 = __commonJS({
  "node_modules/uc.micro/properties/Any/regex.js"(exports, module) {
    module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
  }

}); // node_modules/uc.micro/categories/Cc/regex.js


var require_regex3 = __commonJS({
  "node_modules/uc.micro/categories/Cc/regex.js"(exports, module) {
    module.exports = /[\0-\x1F\x7F-\x9F]/;
  }

}); // node_modules/uc.micro/categories/Cf/regex.js


var require_regex4 = __commonJS({
  "node_modules/uc.micro/categories/Cf/regex.js"(exports, module) {
    module.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
  }

}); // node_modules/uc.micro/categories/Z/regex.js


var require_regex5 = __commonJS({
  "node_modules/uc.micro/categories/Z/regex.js"(exports, module) {
    module.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  }

}); // node_modules/uc.micro/index.js


var require_uc = __commonJS({
  "node_modules/uc.micro/index.js"(exports) {

    exports.Any = require_regex2();
    exports.Cc = require_regex3();
    exports.Cf = require_regex4();
    exports.P = require_regex();
    exports.Z = require_regex5();
  }

}); // node_modules/markdown-it/lib/common/utils.js


var require_utils = __commonJS({
  "node_modules/markdown-it/lib/common/utils.js"(exports) {

    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }

    function isString(obj) {
      return _class(obj) === "[object String]";
    }

    var _hasOwnProperty = Object.prototype.hasOwnProperty;

    function has(object, key) {
      return _hasOwnProperty.call(object, key);
    }

    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function (source) {
        if (!source) {
          return;
        }

        if (typeof source !== "object") {
          throw new TypeError(source + "must be object");
        }

        Object.keys(source).forEach(function (key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }

    function arrayReplaceAt(src, pos, newElements) {
      return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
    }

    function isValidEntityCode(c) {
      if (c >= 55296 && c <= 57343) {
        return false;
      }

      if (c >= 64976 && c <= 65007) {
        return false;
      }

      if ((c & 65535) === 65535 || (c & 65535) === 65534) {
        return false;
      }

      if (c >= 0 && c <= 8) {
        return false;
      }

      if (c === 11) {
        return false;
      }

      if (c >= 14 && c <= 31) {
        return false;
      }

      if (c >= 127 && c <= 159) {
        return false;
      }

      if (c > 1114111) {
        return false;
      }

      return true;
    }

    function fromCodePoint(c) {
      if (c > 65535) {
        c -= 65536;
        var surrogate1 = 55296 + (c >> 10),
            surrogate2 = 56320 + (c & 1023);
        return String.fromCharCode(surrogate1, surrogate2);
      }

      return String.fromCharCode(c);
    }

    var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
    var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
    var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
    var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
    var entities = require_entities2();

    function replaceEntityPattern(match, name) {
      var code2 = 0;

      if (has(entities, name)) {
        return entities[name];
      }

      if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
        code2 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);

        if (isValidEntityCode(code2)) {
          return fromCodePoint(code2);
        }
      }

      return match;
    }

    function unescapeMd(str) {
      if (str.indexOf("\\") < 0) {
        return str;
      }

      return str.replace(UNESCAPE_MD_RE, "$1");
    }

    function unescapeAll(str) {
      if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
        return str;
      }

      return str.replace(UNESCAPE_ALL_RE, function (match, escaped, entity) {
        if (escaped) {
          return escaped;
        }

        return replaceEntityPattern(match, entity);
      });
    }

    var HTML_ESCAPE_TEST_RE = /[&<>"]/;
    var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
    var HTML_REPLACEMENTS = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };

    function replaceUnsafeChar(ch) {
      return HTML_REPLACEMENTS[ch];
    }

    function escapeHtml2(str) {
      if (HTML_ESCAPE_TEST_RE.test(str)) {
        return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
      }

      return str;
    }

    var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;

    function escapeRE(str) {
      return str.replace(REGEXP_ESCAPE_RE, "\\$&");
    }

    function isSpace(code2) {
      switch (code2) {
        case 9:
        case 32:
          return true;
      }

      return false;
    }

    function isWhiteSpace(code2) {
      if (code2 >= 8192 && code2 <= 8202) {
        return true;
      }

      switch (code2) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return true;
      }

      return false;
    }

    var UNICODE_PUNCT_RE = require_regex();

    function isPunctChar(ch) {
      return UNICODE_PUNCT_RE.test(ch);
    }

    function isMdAsciiPunct(ch) {
      switch (ch) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return true;

        default:
          return false;
      }
    }

    function normalizeReference(str) {
      str = str.trim().replace(/\s+/g, " ");

      if ("\u1E9E".toLowerCase() === "\u1E7E") {
        str = str.replace(/ẞ/g, "\xDF");
      }

      return str.toLowerCase().toUpperCase();
    }

    exports.lib = {};
    exports.lib.mdurl = require_mdurl();
    exports.lib.ucmicro = require_uc();
    exports.assign = assign;
    exports.isString = isString;
    exports.has = has;
    exports.unescapeMd = unescapeMd;
    exports.unescapeAll = unescapeAll;
    exports.isValidEntityCode = isValidEntityCode;
    exports.fromCodePoint = fromCodePoint;
    exports.escapeHtml = escapeHtml2;
    exports.arrayReplaceAt = arrayReplaceAt;
    exports.isSpace = isSpace;
    exports.isWhiteSpace = isWhiteSpace;
    exports.isMdAsciiPunct = isMdAsciiPunct;
    exports.isPunctChar = isPunctChar;
    exports.escapeRE = escapeRE;
    exports.normalizeReference = normalizeReference;
  }

}); // node_modules/markdown-it/lib/helpers/parse_link_label.js


var require_parse_link_label = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_label.js"(exports, module) {

    module.exports = function parseLinkLabel(state, start, disableNested) {
      var level,
          found,
          marker,
          prevPos,
          labelEnd = -1,
          max = state.posMax,
          oldPos = state.pos;
      state.pos = start + 1;
      level = 1;

      while (state.pos < max) {
        marker = state.src.charCodeAt(state.pos);

        if (marker === 93) {
          level--;

          if (level === 0) {
            found = true;
            break;
          }
        }

        prevPos = state.pos;
        state.md.inline.skipToken(state);

        if (marker === 91) {
          if (prevPos === state.pos - 1) {
            level++;
          } else if (disableNested) {
            state.pos = oldPos;
            return -1;
          }
        }
      }

      if (found) {
        labelEnd = state.pos;
      }

      state.pos = oldPos;
      return labelEnd;
    };
  }

}); // node_modules/markdown-it/lib/helpers/parse_link_destination.js


var require_parse_link_destination = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_destination.js"(exports, module) {

    var unescapeAll = require_utils().unescapeAll;

    module.exports = function parseLinkDestination(str, pos, max) {
      var code2,
          level,
          lines = 0,
          start = pos,
          result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
      };

      if (str.charCodeAt(pos) === 60) {
        pos++;

        while (pos < max) {
          code2 = str.charCodeAt(pos);

          if (code2 === 10) {
            return result;
          }

          if (code2 === 60) {
            return result;
          }

          if (code2 === 62) {
            result.pos = pos + 1;
            result.str = unescapeAll(str.slice(start + 1, pos));
            result.ok = true;
            return result;
          }

          if (code2 === 92 && pos + 1 < max) {
            pos += 2;
            continue;
          }

          pos++;
        }

        return result;
      }

      level = 0;

      while (pos < max) {
        code2 = str.charCodeAt(pos);

        if (code2 === 32) {
          break;
        }

        if (code2 < 32 || code2 === 127) {
          break;
        }

        if (code2 === 92 && pos + 1 < max) {
          if (str.charCodeAt(pos + 1) === 32) {
            break;
          }

          pos += 2;
          continue;
        }

        if (code2 === 40) {
          level++;

          if (level > 32) {
            return result;
          }
        }

        if (code2 === 41) {
          if (level === 0) {
            break;
          }

          level--;
        }

        pos++;
      }

      if (start === pos) {
        return result;
      }

      if (level !== 0) {
        return result;
      }

      result.str = unescapeAll(str.slice(start, pos));
      result.lines = lines;
      result.pos = pos;
      result.ok = true;
      return result;
    };
  }

}); // node_modules/markdown-it/lib/helpers/parse_link_title.js


var require_parse_link_title = __commonJS({
  "node_modules/markdown-it/lib/helpers/parse_link_title.js"(exports, module) {

    var unescapeAll = require_utils().unescapeAll;

    module.exports = function parseLinkTitle(str, pos, max) {
      var code2,
          marker,
          lines = 0,
          start = pos,
          result = {
        ok: false,
        pos: 0,
        lines: 0,
        str: ""
      };

      if (pos >= max) {
        return result;
      }

      marker = str.charCodeAt(pos);

      if (marker !== 34 && marker !== 39 && marker !== 40) {
        return result;
      }

      pos++;

      if (marker === 40) {
        marker = 41;
      }

      while (pos < max) {
        code2 = str.charCodeAt(pos);

        if (code2 === marker) {
          result.pos = pos + 1;
          result.lines = lines;
          result.str = unescapeAll(str.slice(start + 1, pos));
          result.ok = true;
          return result;
        } else if (code2 === 40 && marker === 41) {
          return result;
        } else if (code2 === 10) {
          lines++;
        } else if (code2 === 92 && pos + 1 < max) {
          pos++;

          if (str.charCodeAt(pos) === 10) {
            lines++;
          }
        }

        pos++;
      }

      return result;
    };
  }

}); // node_modules/markdown-it/lib/helpers/index.js


var require_helpers = __commonJS({
  "node_modules/markdown-it/lib/helpers/index.js"(exports) {

    exports.parseLinkLabel = require_parse_link_label();
    exports.parseLinkDestination = require_parse_link_destination();
    exports.parseLinkTitle = require_parse_link_title();
  }

}); // node_modules/markdown-it/lib/renderer.js


var require_renderer = __commonJS({
  "node_modules/markdown-it/lib/renderer.js"(exports, module) {

    var assign = require_utils().assign;
    var unescapeAll = require_utils().unescapeAll;
    var escapeHtml2 = require_utils().escapeHtml;
    var default_rules = {};

    default_rules.code_inline = function (tokens, idx, options, env, slf) {
      var token = tokens[idx];
      return "<code" + slf.renderAttrs(token) + ">" + escapeHtml2(tokens[idx].content) + "</code>";
    };

    default_rules.code_block = function (tokens, idx, options, env, slf) {
      var token = tokens[idx];
      return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml2(tokens[idx].content) + "</code></pre>\n";
    };

    default_rules.fence = function (tokens, idx, options, env, slf) {
      var token = tokens[idx],
          info = token.info ? unescapeAll(token.info).trim() : "",
          langName = "",
          langAttrs = "",
          highlighted,
          i,
          arr,
          tmpAttrs,
          tmpToken;

      if (info) {
        arr = info.split(/(\s+)/g);
        langName = arr[0];
        langAttrs = arr.slice(2).join("");
      }

      if (options.highlight) {
        highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml2(token.content);
      } else {
        highlighted = escapeHtml2(token.content);
      }

      if (highlighted.indexOf("<pre") === 0) {
        return highlighted + "\n";
      }

      if (info) {
        i = token.attrIndex("class");
        tmpAttrs = token.attrs ? token.attrs.slice() : [];

        if (i < 0) {
          tmpAttrs.push(["class", options.langPrefix + langName]);
        } else {
          tmpAttrs[i] = tmpAttrs[i].slice();
          tmpAttrs[i][1] += " " + options.langPrefix + langName;
        }

        tmpToken = {
          attrs: tmpAttrs
        };
        return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
      }

      return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
    };

    default_rules.image = function (tokens, idx, options, env, slf) {
      var token = tokens[idx];
      token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
      return slf.renderToken(tokens, idx, options);
    };

    default_rules.hardbreak = function (tokens, idx, options) {
      return options.xhtmlOut ? "<br />\n" : "<br>\n";
    };

    default_rules.softbreak = function (tokens, idx, options) {
      return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
    };

    default_rules.text = function (tokens, idx) {
      return escapeHtml2(tokens[idx].content);
    };

    default_rules.html_block = function (tokens, idx) {
      return tokens[idx].content;
    };

    default_rules.html_inline = function (tokens, idx) {
      return tokens[idx].content;
    };

    function Renderer() {
      this.rules = assign({}, default_rules);
    }

    Renderer.prototype.renderAttrs = function renderAttrs(token) {
      var i, l, result;

      if (!token.attrs) {
        return "";
      }

      result = "";

      for (i = 0, l = token.attrs.length; i < l; i++) {
        result += " " + escapeHtml2(token.attrs[i][0]) + '="' + escapeHtml2(token.attrs[i][1]) + '"';
      }

      return result;
    };

    Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
      var nextToken,
          result = "",
          needLf = false,
          token = tokens[idx];

      if (token.hidden) {
        return "";
      }

      if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
        result += "\n";
      }

      result += (token.nesting === -1 ? "</" : "<") + token.tag;
      result += this.renderAttrs(token);

      if (token.nesting === 0 && options.xhtmlOut) {
        result += " /";
      }

      if (token.block) {
        needLf = true;

        if (token.nesting === 1) {
          if (idx + 1 < tokens.length) {
            nextToken = tokens[idx + 1];

            if (nextToken.type === "inline" || nextToken.hidden) {
              needLf = false;
            } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
              needLf = false;
            }
          }
        }
      }

      result += needLf ? ">\n" : ">";
      return result;
    };

    Renderer.prototype.renderInline = function (tokens, options, env) {
      var type,
          result = "",
          rules = this.rules;

      for (var i = 0, len = tokens.length; i < len; i++) {
        type = tokens[i].type;

        if (typeof rules[type] !== "undefined") {
          result += rules[type](tokens, i, options, env, this);
        } else {
          result += this.renderToken(tokens, i, options);
        }
      }

      return result;
    };

    Renderer.prototype.renderInlineAsText = function (tokens, options, env) {
      var result = "";

      for (var i = 0, len = tokens.length; i < len; i++) {
        if (tokens[i].type === "text") {
          result += tokens[i].content;
        } else if (tokens[i].type === "image") {
          result += this.renderInlineAsText(tokens[i].children, options, env);
        } else if (tokens[i].type === "softbreak") {
          result += "\n";
        }
      }

      return result;
    };

    Renderer.prototype.render = function (tokens, options, env) {
      var i,
          len,
          type,
          result = "",
          rules = this.rules;

      for (i = 0, len = tokens.length; i < len; i++) {
        type = tokens[i].type;

        if (type === "inline") {
          result += this.renderInline(tokens[i].children, options, env);
        } else if (typeof rules[type] !== "undefined") {
          result += rules[tokens[i].type](tokens, i, options, env, this);
        } else {
          result += this.renderToken(tokens, i, options, env);
        }
      }

      return result;
    };

    module.exports = Renderer;
  }

}); // node_modules/markdown-it/lib/ruler.js


var require_ruler = __commonJS({
  "node_modules/markdown-it/lib/ruler.js"(exports, module) {

    function Ruler() {
      this.__rules__ = [];
      this.__cache__ = null;
    }

    Ruler.prototype.__find__ = function (name) {
      for (var i = 0; i < this.__rules__.length; i++) {
        if (this.__rules__[i].name === name) {
          return i;
        }
      }

      return -1;
    };

    Ruler.prototype.__compile__ = function () {
      var self = this;
      var chains = [""];

      self.__rules__.forEach(function (rule) {
        if (!rule.enabled) {
          return;
        }

        rule.alt.forEach(function (altName) {
          if (chains.indexOf(altName) < 0) {
            chains.push(altName);
          }
        });
      });

      self.__cache__ = {};
      chains.forEach(function (chain) {
        self.__cache__[chain] = [];

        self.__rules__.forEach(function (rule) {
          if (!rule.enabled) {
            return;
          }

          if (chain && rule.alt.indexOf(chain) < 0) {
            return;
          }

          self.__cache__[chain].push(rule.fn);
        });
      });
    };

    Ruler.prototype.at = function (name, fn, options) {
      var index = this.__find__(name);

      var opt = options || {};

      if (index === -1) {
        throw new Error("Parser rule not found: " + name);
      }

      this.__rules__[index].fn = fn;
      this.__rules__[index].alt = opt.alt || [];
      this.__cache__ = null;
    };

    Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
      var index = this.__find__(beforeName);

      var opt = options || {};

      if (index === -1) {
        throw new Error("Parser rule not found: " + beforeName);
      }

      this.__rules__.splice(index, 0, {
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });

      this.__cache__ = null;
    };

    Ruler.prototype.after = function (afterName, ruleName, fn, options) {
      var index = this.__find__(afterName);

      var opt = options || {};

      if (index === -1) {
        throw new Error("Parser rule not found: " + afterName);
      }

      this.__rules__.splice(index + 1, 0, {
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });

      this.__cache__ = null;
    };

    Ruler.prototype.push = function (ruleName, fn, options) {
      var opt = options || {};

      this.__rules__.push({
        name: ruleName,
        enabled: true,
        fn,
        alt: opt.alt || []
      });

      this.__cache__ = null;
    };

    Ruler.prototype.enable = function (list2, ignoreInvalid) {
      if (!Array.isArray(list2)) {
        list2 = [list2];
      }

      var result = [];
      list2.forEach(function (name) {
        var idx = this.__find__(name);

        if (idx < 0) {
          if (ignoreInvalid) {
            return;
          }

          throw new Error("Rules manager: invalid rule name " + name);
        }

        this.__rules__[idx].enabled = true;
        result.push(name);
      }, this);
      this.__cache__ = null;
      return result;
    };

    Ruler.prototype.enableOnly = function (list2, ignoreInvalid) {
      if (!Array.isArray(list2)) {
        list2 = [list2];
      }

      this.__rules__.forEach(function (rule) {
        rule.enabled = false;
      });

      this.enable(list2, ignoreInvalid);
    };

    Ruler.prototype.disable = function (list2, ignoreInvalid) {
      if (!Array.isArray(list2)) {
        list2 = [list2];
      }

      var result = [];
      list2.forEach(function (name) {
        var idx = this.__find__(name);

        if (idx < 0) {
          if (ignoreInvalid) {
            return;
          }

          throw new Error("Rules manager: invalid rule name " + name);
        }

        this.__rules__[idx].enabled = false;
        result.push(name);
      }, this);
      this.__cache__ = null;
      return result;
    };

    Ruler.prototype.getRules = function (chainName) {
      if (this.__cache__ === null) {
        this.__compile__();
      }

      return this.__cache__[chainName] || [];
    };

    module.exports = Ruler;
  }

}); // node_modules/markdown-it/lib/rules_core/normalize.js


var require_normalize = __commonJS({
  "node_modules/markdown-it/lib/rules_core/normalize.js"(exports, module) {

    var NEWLINES_RE = /\r\n?|\n/g;
    var NULL_RE = /\0/g;

    module.exports = function normalize(state) {
      var str;
      str = state.src.replace(NEWLINES_RE, "\n");
      str = str.replace(NULL_RE, "\uFFFD");
      state.src = str;
    };
  }

}); // node_modules/markdown-it/lib/rules_core/block.js


var require_block = __commonJS({
  "node_modules/markdown-it/lib/rules_core/block.js"(exports, module) {

    module.exports = function block3(state) {
      var token;

      if (state.inlineMode) {
        token = new state.Token("inline", "", 0);
        token.content = state.src;
        token.map = [0, 1];
        token.children = [];
        state.tokens.push(token);
      } else {
        state.md.block.parse(state.src, state.md, state.env, state.tokens);
      }
    };
  }

}); // node_modules/markdown-it/lib/rules_core/inline.js


var require_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_core/inline.js"(exports, module) {

    module.exports = function inline3(state) {
      var tokens = state.tokens,
          tok,
          i,
          l;

      for (i = 0, l = tokens.length; i < l; i++) {
        tok = tokens[i];

        if (tok.type === "inline") {
          state.md.inline.parse(tok.content, state.md, state.env, tok.children);
        }
      }
    };
  }

}); // node_modules/markdown-it/lib/rules_core/linkify.js


var require_linkify = __commonJS({
  "node_modules/markdown-it/lib/rules_core/linkify.js"(exports, module) {

    var arrayReplaceAt = require_utils().arrayReplaceAt;

    function isLinkOpen(str) {
      return /^<a[>\s]/i.test(str);
    }

    function isLinkClose(str) {
      return /^<\/a\s*>/i.test(str);
    }

    module.exports = function linkify(state) {
      var i,
          j,
          l,
          tokens,
          token,
          currentToken,
          nodes,
          ln,
          text2,
          pos,
          lastPos,
          level,
          htmlLinkLevel,
          url,
          fullUrl,
          urlText,
          blockTokens = state.tokens,
          links;

      if (!state.md.options.linkify) {
        return;
      }

      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
          continue;
        }

        tokens = blockTokens[j].children;
        htmlLinkLevel = 0;

        for (i = tokens.length - 1; i >= 0; i--) {
          currentToken = tokens[i];

          if (currentToken.type === "link_close") {
            i--;

            while (tokens[i].level !== currentToken.level && tokens[i].type !== "link_open") {
              i--;
            }

            continue;
          }

          if (currentToken.type === "html_inline") {
            if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
              htmlLinkLevel--;
            }

            if (isLinkClose(currentToken.content)) {
              htmlLinkLevel++;
            }
          }

          if (htmlLinkLevel > 0) {
            continue;
          }

          if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
            text2 = currentToken.content;
            links = state.md.linkify.match(text2);
            nodes = [];
            level = currentToken.level;
            lastPos = 0;

            for (ln = 0; ln < links.length; ln++) {
              url = links[ln].url;
              fullUrl = state.md.normalizeLink(url);

              if (!state.md.validateLink(fullUrl)) {
                continue;
              }

              urlText = links[ln].text;

              if (!links[ln].schema) {
                urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
              } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
                urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
              } else {
                urlText = state.md.normalizeLinkText(urlText);
              }

              pos = links[ln].index;

              if (pos > lastPos) {
                token = new state.Token("text", "", 0);
                token.content = text2.slice(lastPos, pos);
                token.level = level;
                nodes.push(token);
              }

              token = new state.Token("link_open", "a", 1);
              token.attrs = [["href", fullUrl]];
              token.level = level++;
              token.markup = "linkify";
              token.info = "auto";
              nodes.push(token);
              token = new state.Token("text", "", 0);
              token.content = urlText;
              token.level = level;
              nodes.push(token);
              token = new state.Token("link_close", "a", -1);
              token.level = --level;
              token.markup = "linkify";
              token.info = "auto";
              nodes.push(token);
              lastPos = links[ln].lastIndex;
            }

            if (lastPos < text2.length) {
              token = new state.Token("text", "", 0);
              token.content = text2.slice(lastPos);
              token.level = level;
              nodes.push(token);
            }

            blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
          }
        }
      }
    };
  }

}); // node_modules/markdown-it/lib/rules_core/replacements.js


var require_replacements = __commonJS({
  "node_modules/markdown-it/lib/rules_core/replacements.js"(exports, module) {

    var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
    var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
    var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
    var SCOPED_ABBR = {
      c: "\xA9",
      r: "\xAE",
      p: "\xA7",
      tm: "\u2122"
    };

    function replaceFn(match, name) {
      return SCOPED_ABBR[name.toLowerCase()];
    }

    function replace_scoped(inlineTokens) {
      var i,
          token,
          inside_autolink = 0;

      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];

        if (token.type === "text" && !inside_autolink) {
          token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
        }

        if (token.type === "link_open" && token.info === "auto") {
          inside_autolink--;
        }

        if (token.type === "link_close" && token.info === "auto") {
          inside_autolink++;
        }
      }
    }

    function replace_rare(inlineTokens) {
      var i,
          token,
          inside_autolink = 0;

      for (i = inlineTokens.length - 1; i >= 0; i--) {
        token = inlineTokens[i];

        if (token.type === "text" && !inside_autolink) {
          if (RARE_RE.test(token.content)) {
            token.content = token.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1\u2014").replace(/(^|\s)--(?=\s|$)/mg, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1\u2013");
          }
        }

        if (token.type === "link_open" && token.info === "auto") {
          inside_autolink--;
        }

        if (token.type === "link_close" && token.info === "auto") {
          inside_autolink++;
        }
      }
    }

    module.exports = function replace(state) {
      var blkIdx;

      if (!state.md.options.typographer) {
        return;
      }

      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== "inline") {
          continue;
        }

        if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
          replace_scoped(state.tokens[blkIdx].children);
        }

        if (RARE_RE.test(state.tokens[blkIdx].content)) {
          replace_rare(state.tokens[blkIdx].children);
        }
      }
    };
  }

}); // node_modules/markdown-it/lib/rules_core/smartquotes.js


var require_smartquotes = __commonJS({
  "node_modules/markdown-it/lib/rules_core/smartquotes.js"(exports, module) {

    var isWhiteSpace = require_utils().isWhiteSpace;
    var isPunctChar = require_utils().isPunctChar;
    var isMdAsciiPunct = require_utils().isMdAsciiPunct;
    var QUOTE_TEST_RE = /['"]/;
    var QUOTE_RE = /['"]/g;
    var APOSTROPHE = "\u2019";

    function replaceAt(str, index, ch) {
      return str.substr(0, index) + ch + str.substr(index + 1);
    }

    function process_inlines(tokens, state) {
      var i, token, text2, t, pos, max, thisLevel, item2, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
      stack = [];

      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        thisLevel = tokens[i].level;

        for (j = stack.length - 1; j >= 0; j--) {
          if (stack[j].level <= thisLevel) {
            break;
          }
        }

        stack.length = j + 1;

        if (token.type !== "text") {
          continue;
        }

        text2 = token.content;
        pos = 0;
        max = text2.length;

        OUTER: while (pos < max) {
          QUOTE_RE.lastIndex = pos;
          t = QUOTE_RE.exec(text2);

          if (!t) {
            break;
          }

          canOpen = canClose = true;
          pos = t.index + 1;
          isSingle = t[0] === "'";
          lastChar = 32;

          if (t.index - 1 >= 0) {
            lastChar = text2.charCodeAt(t.index - 1);
          } else {
            for (j = i - 1; j >= 0; j--) {
              if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
              if (!tokens[j].content) continue;
              lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
              break;
            }
          }

          nextChar = 32;

          if (pos < max) {
            nextChar = text2.charCodeAt(pos);
          } else {
            for (j = i + 1; j < tokens.length; j++) {
              if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
              if (!tokens[j].content) continue;
              nextChar = tokens[j].content.charCodeAt(0);
              break;
            }
          }

          isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
          isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
          isLastWhiteSpace = isWhiteSpace(lastChar);
          isNextWhiteSpace = isWhiteSpace(nextChar);

          if (isNextWhiteSpace) {
            canOpen = false;
          } else if (isNextPunctChar) {
            if (!(isLastWhiteSpace || isLastPunctChar)) {
              canOpen = false;
            }
          }

          if (isLastWhiteSpace) {
            canClose = false;
          } else if (isLastPunctChar) {
            if (!(isNextWhiteSpace || isNextPunctChar)) {
              canClose = false;
            }
          }

          if (nextChar === 34 && t[0] === '"') {
            if (lastChar >= 48 && lastChar <= 57) {
              canClose = canOpen = false;
            }
          }

          if (canOpen && canClose) {
            canOpen = isLastPunctChar;
            canClose = isNextPunctChar;
          }

          if (!canOpen && !canClose) {
            if (isSingle) {
              token.content = replaceAt(token.content, t.index, APOSTROPHE);
            }

            continue;
          }

          if (canClose) {
            for (j = stack.length - 1; j >= 0; j--) {
              item2 = stack[j];

              if (stack[j].level < thisLevel) {
                break;
              }

              if (item2.single === isSingle && stack[j].level === thisLevel) {
                item2 = stack[j];

                if (isSingle) {
                  openQuote = state.md.options.quotes[2];
                  closeQuote = state.md.options.quotes[3];
                } else {
                  openQuote = state.md.options.quotes[0];
                  closeQuote = state.md.options.quotes[1];
                }

                token.content = replaceAt(token.content, t.index, closeQuote);
                tokens[item2.token].content = replaceAt(tokens[item2.token].content, item2.pos, openQuote);
                pos += closeQuote.length - 1;

                if (item2.token === i) {
                  pos += openQuote.length - 1;
                }

                text2 = token.content;
                max = text2.length;
                stack.length = j;
                continue OUTER;
              }
            }
          }

          if (canOpen) {
            stack.push({
              token: i,
              pos: t.index,
              single: isSingle,
              level: thisLevel
            });
          } else if (canClose && isSingle) {
            token.content = replaceAt(token.content, t.index, APOSTROPHE);
          }
        }
      }
    }

    module.exports = function smartquotes(state) {
      var blkIdx;

      if (!state.md.options.typographer) {
        return;
      }

      for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
        if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
          continue;
        }

        process_inlines(state.tokens[blkIdx].children, state);
      }
    };
  }

}); // node_modules/markdown-it/lib/token.js


var require_token = __commonJS({
  "node_modules/markdown-it/lib/token.js"(exports, module) {

    function Token(type, tag, nesting) {
      this.type = type;
      this.tag = tag;
      this.attrs = null;
      this.map = null;
      this.nesting = nesting;
      this.level = 0;
      this.children = null;
      this.content = "";
      this.markup = "";
      this.info = "";
      this.meta = null;
      this.block = false;
      this.hidden = false;
    }

    Token.prototype.attrIndex = function attrIndex(name) {
      var attrs, i, len;

      if (!this.attrs) {
        return -1;
      }

      attrs = this.attrs;

      for (i = 0, len = attrs.length; i < len; i++) {
        if (attrs[i][0] === name) {
          return i;
        }
      }

      return -1;
    };

    Token.prototype.attrPush = function attrPush(attrData) {
      if (this.attrs) {
        this.attrs.push(attrData);
      } else {
        this.attrs = [attrData];
      }
    };

    Token.prototype.attrSet = function attrSet(name, value) {
      var idx = this.attrIndex(name),
          attrData = [name, value];

      if (idx < 0) {
        this.attrPush(attrData);
      } else {
        this.attrs[idx] = attrData;
      }
    };

    Token.prototype.attrGet = function attrGet(name) {
      var idx = this.attrIndex(name),
          value = null;

      if (idx >= 0) {
        value = this.attrs[idx][1];
      }

      return value;
    };

    Token.prototype.attrJoin = function attrJoin(name, value) {
      var idx = this.attrIndex(name);

      if (idx < 0) {
        this.attrPush([name, value]);
      } else {
        this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
      }
    };

    module.exports = Token;
  }

}); // node_modules/markdown-it/lib/rules_core/state_core.js


var require_state_core = __commonJS({
  "node_modules/markdown-it/lib/rules_core/state_core.js"(exports, module) {

    var Token = require_token();

    function StateCore(src, md, env) {
      this.src = src;
      this.env = env;
      this.tokens = [];
      this.inlineMode = false;
      this.md = md;
    }

    StateCore.prototype.Token = Token;
    module.exports = StateCore;
  }

}); // node_modules/markdown-it/lib/parser_core.js


var require_parser_core = __commonJS({
  "node_modules/markdown-it/lib/parser_core.js"(exports, module) {

    var Ruler = require_ruler();
    var _rules = [["normalize", require_normalize()], ["block", require_block()], ["inline", require_inline()], ["linkify", require_linkify()], ["replacements", require_replacements()], ["smartquotes", require_smartquotes()]];

    function Core() {
      this.ruler = new Ruler();

      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }
    }

    Core.prototype.process = function (state) {
      var i, l, rules;
      rules = this.ruler.getRules("");

      for (i = 0, l = rules.length; i < l; i++) {
        rules[i](state);
      }
    };

    Core.prototype.State = require_state_core();
    module.exports = Core;
  }

}); // node_modules/markdown-it/lib/rules_block/table.js


var require_table = __commonJS({
  "node_modules/markdown-it/lib/rules_block/table.js"(exports, module) {

    var isSpace = require_utils().isSpace;

    function getLine2(state, line) {
      var pos = state.bMarks[line] + state.tShift[line],
          max = state.eMarks[line];
      return state.src.substr(pos, max - pos);
    }

    function escapedSplit(str) {
      var result = [],
          pos = 0,
          max = str.length,
          ch,
          isEscaped = false,
          lastPos = 0,
          current = "";
      ch = str.charCodeAt(pos);

      while (pos < max) {
        if (ch === 124) {
          if (!isEscaped) {
            result.push(current + str.substring(lastPos, pos));
            current = "";
            lastPos = pos + 1;
          } else {
            current += str.substring(lastPos, pos - 1);
            lastPos = pos;
          }
        }

        isEscaped = ch === 92;
        pos++;
        ch = str.charCodeAt(pos);
      }

      result.push(current + str.substring(lastPos));
      return result;
    }

    module.exports = function table3(state, startLine, endLine, silent) {
      var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;

      if (startLine + 2 > endLine) {
        return false;
      }

      nextLine = startLine + 1;

      if (state.sCount[nextLine] < state.blkIndent) {
        return false;
      }

      if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent >= 4) {
        return false;
      }

      pos = state.bMarks[nextLine] + state.tShift[nextLine];

      if (pos >= state.eMarks[nextLine]) {
        return false;
      }

      firstCh = state.src.charCodeAt(pos++);

      if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
        return false;
      }

      if (pos >= state.eMarks[nextLine]) {
        return false;
      }

      secondCh = state.src.charCodeAt(pos++);

      if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
        return false;
      }

      if (firstCh === 45 && isSpace(secondCh)) {
        return false;
      }

      while (pos < state.eMarks[nextLine]) {
        ch = state.src.charCodeAt(pos);

        if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
          return false;
        }

        pos++;
      }

      lineText = getLine2(state, startLine + 1);
      columns = lineText.split("|");
      aligns = [];

      for (i = 0; i < columns.length; i++) {
        t = columns[i].trim();

        if (!t) {
          if (i === 0 || i === columns.length - 1) {
            continue;
          } else {
            return false;
          }
        }

        if (!/^:?-+:?$/.test(t)) {
          return false;
        }

        if (t.charCodeAt(t.length - 1) === 58) {
          aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
        } else if (t.charCodeAt(0) === 58) {
          aligns.push("left");
        } else {
          aligns.push("");
        }
      }

      lineText = getLine2(state, startLine).trim();

      if (lineText.indexOf("|") === -1) {
        return false;
      }

      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }

      columns = escapedSplit(lineText);
      if (columns.length && columns[0] === "") columns.shift();
      if (columns.length && columns[columns.length - 1] === "") columns.pop();
      columnCount = columns.length;

      if (columnCount === 0 || columnCount !== aligns.length) {
        return false;
      }

      if (silent) {
        return true;
      }

      oldParentType = state.parentType;
      state.parentType = "table";
      terminatorRules = state.md.block.ruler.getRules("blockquote");
      token = state.push("table_open", "table", 1);
      token.map = tableLines = [startLine, 0];
      token = state.push("thead_open", "thead", 1);
      token.map = [startLine, startLine + 1];
      token = state.push("tr_open", "tr", 1);
      token.map = [startLine, startLine + 1];

      for (i = 0; i < columns.length; i++) {
        token = state.push("th_open", "th", 1);

        if (aligns[i]) {
          token.attrs = [["style", "text-align:" + aligns[i]]];
        }

        token = state.push("inline", "", 0);
        token.content = columns[i].trim();
        token.children = [];
        token = state.push("th_close", "th", -1);
      }

      token = state.push("tr_close", "tr", -1);
      token = state.push("thead_close", "thead", -1);

      for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }

        terminate = false;

        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }

        if (terminate) {
          break;
        }

        lineText = getLine2(state, nextLine).trim();

        if (!lineText) {
          break;
        }

        if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent >= 4) {
          break;
        }

        columns = escapedSplit(lineText);
        if (columns.length && columns[0] === "") columns.shift();
        if (columns.length && columns[columns.length - 1] === "") columns.pop();

        if (nextLine === startLine + 2) {
          token = state.push("tbody_open", "tbody", 1);
          token.map = tbodyLines = [startLine + 2, 0];
        }

        token = state.push("tr_open", "tr", 1);
        token.map = [nextLine, nextLine + 1];

        for (i = 0; i < columnCount; i++) {
          token = state.push("td_open", "td", 1);

          if (aligns[i]) {
            token.attrs = [["style", "text-align:" + aligns[i]]];
          }

          token = state.push("inline", "", 0);
          token.content = columns[i] ? columns[i].trim() : "";
          token.children = [];
          token = state.push("td_close", "td", -1);
        }

        token = state.push("tr_close", "tr", -1);
      }

      if (tbodyLines) {
        token = state.push("tbody_close", "tbody", -1);
        tbodyLines[1] = nextLine;
      }

      token = state.push("table_close", "table", -1);
      tableLines[1] = nextLine;
      state.parentType = oldParentType;
      state.line = nextLine;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_block/code.js


var require_code = __commonJS({
  "node_modules/markdown-it/lib/rules_block/code.js"(exports, module) {

    module.exports = function code2(state, startLine, endLine) {
      if (state.md.options.allowIndentation) {
        return false;
      }

      var nextLine, last, token;

      if (state.sCount[startLine] - state.blkIndent < 4) {
        return false;
      }

      last = nextLine = startLine + 1;

      while (nextLine < endLine) {
        if (state.isEmpty(nextLine)) {
          nextLine++;
          continue;
        }

        if (state.sCount[nextLine] - state.blkIndent >= 4) {
          nextLine++;
          last = nextLine;
          continue;
        }

        break;
      }

      state.line = last;
      token = state.push("code_block", "code", 0);
      token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
      token.map = [startLine, state.line];
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_block/fence.js


var require_fence = __commonJS({
  "node_modules/markdown-it/lib/rules_block/fence.js"(exports, module) {

    module.exports = function fence3(state, startLine, endLine, silent) {
      var marker,
          len,
          params,
          nextLine,
          mem,
          token,
          markup,
          haveEndMarker = false,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }

      if (pos + 3 > max) {
        return false;
      }

      marker = state.src.charCodeAt(pos);

      if (marker !== 126 && marker !== 96) {
        return false;
      }

      mem = pos;
      pos = state.skipChars(pos, marker);
      len = pos - mem;

      if (len < 3) {
        return false;
      }

      markup = state.src.slice(mem, pos);
      params = state.src.slice(pos, max);

      if (marker === 96) {
        if (params.indexOf(String.fromCharCode(marker)) >= 0) {
          return false;
        }
      }

      if (silent) {
        return true;
      }

      nextLine = startLine;

      for (;;) {
        nextLine++;

        if (nextLine >= endLine) {
          break;
        }

        pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];

        if (pos < max && state.sCount[nextLine] < state.blkIndent) {
          break;
        }

        if (state.src.charCodeAt(pos) !== marker) {
          continue;
        }

        if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent >= 4) {
          continue;
        }

        pos = state.skipChars(pos, marker);

        if (pos - mem < len) {
          continue;
        }

        pos = state.skipSpaces(pos);

        if (pos < max) {
          continue;
        }

        haveEndMarker = true;
        break;
      }

      len = state.sCount[startLine];
      state.line = nextLine + (haveEndMarker ? 1 : 0);
      token = state.push("fence", "code", 0);
      token.info = params;
      token.content = state.getLines(startLine + 1, nextLine, len, true);
      token.markup = markup;
      token.map = [startLine, state.line];
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_block/blockquote.js


var require_blockquote = __commonJS({
  "node_modules/markdown-it/lib/rules_block/blockquote.js"(exports, module) {

    var isSpace = require_utils().isSpace;

    module.exports = function blockquote2(state, startLine, endLine, silent) {
      var adjustTab,
          ch,
          i,
          initial,
          l,
          lastLineEmpty,
          lines,
          nextLine,
          offset,
          oldBMarks,
          oldBSCount,
          oldIndent,
          oldParentType,
          oldSCount,
          oldTShift,
          spaceAfterMarker,
          terminate,
          terminatorRules,
          token,
          isOutdented,
          oldLineMax = state.lineMax,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }

      if (state.src.charCodeAt(pos++) !== 62) {
        return false;
      }

      if (silent) {
        return true;
      }

      initial = offset = state.sCount[startLine] + 1;

      if (state.src.charCodeAt(pos) === 32) {
        pos++;
        initial++;
        offset++;
        adjustTab = false;
        spaceAfterMarker = true;
      } else if (state.src.charCodeAt(pos) === 9) {
        spaceAfterMarker = true;

        if ((state.bsCount[startLine] + offset) % 4 === 3) {
          pos++;
          initial++;
          offset++;
          adjustTab = false;
        } else {
          adjustTab = true;
        }
      } else {
        spaceAfterMarker = false;
      }

      oldBMarks = [state.bMarks[startLine]];
      state.bMarks[startLine] = pos;

      while (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (isSpace(ch)) {
          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
          } else {
            offset++;
          }
        } else {
          break;
        }

        pos++;
      }

      oldBSCount = [state.bsCount[startLine]];
      state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
      lastLineEmpty = pos >= max;
      oldSCount = [state.sCount[startLine]];
      state.sCount[startLine] = offset - initial;
      oldTShift = [state.tShift[startLine]];
      state.tShift[startLine] = pos - state.bMarks[startLine];
      terminatorRules = state.md.block.ruler.getRules("blockquote");
      oldParentType = state.parentType;
      state.parentType = "blockquote";

      for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
        isOutdented = state.sCount[nextLine] < state.blkIndent;
        pos = state.bMarks[nextLine] + state.tShift[nextLine];
        max = state.eMarks[nextLine];

        if (pos >= max) {
          break;
        }

        if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
          initial = offset = state.sCount[nextLine] + 1;

          if (state.src.charCodeAt(pos) === 32) {
            pos++;
            initial++;
            offset++;
            adjustTab = false;
            spaceAfterMarker = true;
          } else if (state.src.charCodeAt(pos) === 9) {
            spaceAfterMarker = true;

            if ((state.bsCount[nextLine] + offset) % 4 === 3) {
              pos++;
              initial++;
              offset++;
              adjustTab = false;
            } else {
              adjustTab = true;
            }
          } else {
            spaceAfterMarker = false;
          }

          oldBMarks.push(state.bMarks[nextLine]);
          state.bMarks[nextLine] = pos;

          while (pos < max) {
            ch = state.src.charCodeAt(pos);

            if (isSpace(ch)) {
              if (ch === 9) {
                offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
              } else {
                offset++;
              }
            } else {
              break;
            }

            pos++;
          }

          lastLineEmpty = pos >= max;
          oldBSCount.push(state.bsCount[nextLine]);
          state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
          oldSCount.push(state.sCount[nextLine]);
          state.sCount[nextLine] = offset - initial;
          oldTShift.push(state.tShift[nextLine]);
          state.tShift[nextLine] = pos - state.bMarks[nextLine];
          continue;
        }

        if (lastLineEmpty) {
          break;
        }

        terminate = false;

        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }

        if (terminate) {
          state.lineMax = nextLine;

          if (state.blkIndent !== 0) {
            oldBMarks.push(state.bMarks[nextLine]);
            oldBSCount.push(state.bsCount[nextLine]);
            oldTShift.push(state.tShift[nextLine]);
            oldSCount.push(state.sCount[nextLine]);
            state.sCount[nextLine] -= state.blkIndent;
          }

          break;
        }

        oldBMarks.push(state.bMarks[nextLine]);
        oldBSCount.push(state.bsCount[nextLine]);
        oldTShift.push(state.tShift[nextLine]);
        oldSCount.push(state.sCount[nextLine]);
        state.sCount[nextLine] = -1;
      }

      oldIndent = state.blkIndent;
      state.blkIndent = 0;
      token = state.push("blockquote_open", "blockquote", 1);
      token.markup = ">";
      token.map = lines = [startLine, 0];
      state.md.block.tokenize(state, startLine, nextLine);
      token = state.push("blockquote_close", "blockquote", -1);
      token.markup = ">";
      state.lineMax = oldLineMax;
      state.parentType = oldParentType;
      lines[1] = state.line;

      for (i = 0; i < oldTShift.length; i++) {
        state.bMarks[i + startLine] = oldBMarks[i];
        state.tShift[i + startLine] = oldTShift[i];
        state.sCount[i + startLine] = oldSCount[i];
        state.bsCount[i + startLine] = oldBSCount[i];
      }

      state.blkIndent = oldIndent;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_block/hr.js


var require_hr = __commonJS({
  "node_modules/markdown-it/lib/rules_block/hr.js"(exports, module) {

    var isSpace = require_utils().isSpace;

    module.exports = function hr2(state, startLine, endLine, silent) {
      var marker,
          cnt,
          ch,
          token,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }

      marker = state.src.charCodeAt(pos++);

      if (marker !== 42 && marker !== 45 && marker !== 95) {
        return false;
      }

      cnt = 1;

      while (pos < max) {
        ch = state.src.charCodeAt(pos++);

        if (ch !== marker && !isSpace(ch)) {
          return false;
        }

        if (ch === marker) {
          cnt++;
        }
      }

      if (cnt < 3) {
        return false;
      }

      if (silent) {
        return true;
      }

      state.line = startLine + 1;
      token = state.push("hr", "hr", 0);
      token.map = [startLine, state.line];
      token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_block/list.js


var require_list = __commonJS({
  "node_modules/markdown-it/lib/rules_block/list.js"(exports, module) {

    var isSpace = require_utils().isSpace;

    function skipBulletListMarker(state, startLine) {
      var marker, pos, max, ch;
      pos = state.bMarks[startLine] + state.tShift[startLine];
      max = state.eMarks[startLine];
      marker = state.src.charCodeAt(pos++);

      if (marker !== 42 && marker !== 45 && marker !== 43) {
        return -1;
      }

      if (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (!isSpace(ch)) {
          return -1;
        }
      }

      return pos;
    }

    function skipOrderedListMarker(state, startLine) {
      var ch,
          start = state.bMarks[startLine] + state.tShift[startLine],
          pos = start,
          max = state.eMarks[startLine];

      if (pos + 1 >= max) {
        return -1;
      }

      ch = state.src.charCodeAt(pos++);

      if (ch < 48 || ch > 57) {
        return -1;
      }

      for (;;) {
        if (pos >= max) {
          return -1;
        }

        ch = state.src.charCodeAt(pos++);

        if (ch >= 48 && ch <= 57) {
          if (pos - start >= 10) {
            return -1;
          }

          continue;
        }

        if (ch === 41 || ch === 46) {
          break;
        }

        return -1;
      }

      if (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (!isSpace(ch)) {
          return -1;
        }
      }

      return pos;
    }

    function markTightParagraphs(state, idx) {
      var i,
          l,
          level = state.level + 2;

      for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
        if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
          state.tokens[i + 2].hidden = true;
          state.tokens[i].hidden = true;
          i += 2;
        }
      }
    }

    module.exports = function list2(state, startLine, endLine, silent) {
      var ch,
          contentStart,
          i,
          indent,
          indentAfterMarker,
          initial,
          isOrdered,
          itemLines,
          l,
          listLines,
          listTokIdx,
          markerCharCode,
          markerValue,
          max,
          nextLine,
          offset,
          oldListIndent,
          oldParentType,
          oldSCount,
          oldTShift,
          oldTight,
          pos,
          posAfterMarker,
          prevEmptyEnd,
          start,
          terminate,
          terminatorRules,
          token,
          isTerminatingParagraph = false,
          tight = true;

      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }

      if (!state.md.options.allowIndentation && state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
        return false;
      }

      if (silent && state.parentType === "paragraph") {
        if (state.sCount[startLine] >= state.blkIndent) {
          isTerminatingParagraph = true;
        }
      }

      if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
        isOrdered = true;
        start = state.bMarks[startLine] + state.tShift[startLine];
        markerValue = Number(state.src.slice(start, posAfterMarker - 1));
        if (isTerminatingParagraph && markerValue !== 1) return false;
      } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
        isOrdered = false;
      } else {
        return false;
      }

      if (isTerminatingParagraph) {
        if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
      }

      markerCharCode = state.src.charCodeAt(posAfterMarker - 1);

      if (silent) {
        return true;
      }

      listTokIdx = state.tokens.length;

      if (isOrdered) {
        token = state.push("ordered_list_open", "ol", 1);

        if (markerValue !== 1) {
          token.attrs = [["start", markerValue]];
        }
      } else {
        token = state.push("bullet_list_open", "ul", 1);
      }

      token.map = listLines = [startLine, 0];
      token.markup = String.fromCharCode(markerCharCode);
      nextLine = startLine;
      prevEmptyEnd = false;
      terminatorRules = state.md.block.ruler.getRules("list");
      oldParentType = state.parentType;
      state.parentType = "list";

      while (nextLine < endLine) {
        pos = posAfterMarker;
        max = state.eMarks[nextLine];
        initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);

        while (pos < max) {
          ch = state.src.charCodeAt(pos);

          if (ch === 9) {
            offset += 4 - (offset + state.bsCount[nextLine]) % 4;
          } else if (ch === 32) {
            offset++;
          } else {
            break;
          }

          pos++;
        }

        contentStart = pos;

        if (contentStart >= max) {
          indentAfterMarker = 1;
        } else {
          indentAfterMarker = offset - initial;
        }

        if (!state.md.options.allowIndentation && indentAfterMarker > 4) {
          indentAfterMarker = 1;
        }

        indent = initial + indentAfterMarker;
        token = state.push("list_item_open", "li", 1);
        token.markup = String.fromCharCode(markerCharCode);
        token.map = itemLines = [startLine, 0];

        if (isOrdered) {
          token.info = state.src.slice(start, posAfterMarker - 1);
        }

        oldTight = state.tight;
        oldTShift = state.tShift[startLine];
        oldSCount = state.sCount[startLine];
        oldListIndent = state.listIndent;
        state.listIndent = state.blkIndent;
        state.blkIndent = indent;
        state.tight = true;
        state.tShift[startLine] = contentStart - state.bMarks[startLine];
        state.sCount[startLine] = offset;

        if (contentStart >= max && state.isEmpty(startLine + 1)) {
          state.line = Math.min(state.line + 2, endLine);
        } else {
          state.md.block.tokenize(state, startLine, endLine, true);
        }

        if (!state.tight || prevEmptyEnd) {
          tight = false;
        }

        prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
        state.blkIndent = state.listIndent;
        state.listIndent = oldListIndent;
        state.tShift[startLine] = oldTShift;
        state.sCount[startLine] = oldSCount;
        state.tight = oldTight;
        token = state.push("list_item_close", "li", -1);
        token.markup = String.fromCharCode(markerCharCode);
        nextLine = startLine = state.line;
        itemLines[1] = nextLine;
        contentStart = state.bMarks[startLine];

        if (nextLine >= endLine) {
          break;
        }

        if (state.sCount[nextLine] < state.blkIndent) {
          break;
        }

        if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
          break;
        }

        terminate = false;

        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }

        if (terminate) {
          break;
        }

        if (isOrdered) {
          posAfterMarker = skipOrderedListMarker(state, nextLine);

          if (posAfterMarker < 0) {
            break;
          }

          start = state.bMarks[nextLine] + state.tShift[nextLine];
        } else {
          posAfterMarker = skipBulletListMarker(state, nextLine);

          if (posAfterMarker < 0) {
            break;
          }
        }

        if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
          break;
        }
      }

      if (isOrdered) {
        token = state.push("ordered_list_close", "ol", -1);
      } else {
        token = state.push("bullet_list_close", "ul", -1);
      }

      token.markup = String.fromCharCode(markerCharCode);
      listLines[1] = nextLine;
      state.line = nextLine;
      state.parentType = oldParentType;

      if (tight) {
        markTightParagraphs(state, listTokIdx);
      }

      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_block/reference.js


var require_reference = __commonJS({
  "node_modules/markdown-it/lib/rules_block/reference.js"(exports, module) {

    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;

    module.exports = function reference(state, startLine, _endLine, silent) {
      var ch,
          destEndPos,
          destEndLineNo,
          endLine,
          href,
          i,
          l,
          label,
          labelEnd,
          oldParentType,
          res,
          start,
          str,
          terminate,
          terminatorRules,
          title,
          lines = 0,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine],
          nextLine = startLine + 1;

      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }

      if (state.src.charCodeAt(pos) !== 91) {
        return false;
      }

      while (++pos < max) {
        if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
          if (pos + 1 === max) {
            return false;
          }

          if (state.src.charCodeAt(pos + 1) !== 58) {
            return false;
          }

          break;
        }
      }

      endLine = state.lineMax;
      terminatorRules = state.md.block.ruler.getRules("reference");
      oldParentType = state.parentType;
      state.parentType = "reference";

      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }

        if (state.sCount[nextLine] < 0) {
          continue;
        }

        terminate = false;

        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }

        if (terminate) {
          break;
        }
      }

      str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      max = str.length;

      for (pos = 1; pos < max; pos++) {
        ch = str.charCodeAt(pos);

        if (ch === 91) {
          return false;
        } else if (ch === 93) {
          labelEnd = pos;
          break;
        } else if (ch === 10) {
          lines++;
        } else if (ch === 92) {
          pos++;

          if (pos < max && str.charCodeAt(pos) === 10) {
            lines++;
          }
        }
      }

      if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
        return false;
      }

      for (pos = labelEnd + 2; pos < max; pos++) {
        ch = str.charCodeAt(pos);

        if (ch === 10) {
          lines++;
        } else if (isSpace(ch)) ; else {
          break;
        }
      }

      res = state.md.helpers.parseLinkDestination(str, pos, max);

      if (!res.ok) {
        return false;
      }

      href = state.md.normalizeLink(res.str);

      if (!state.md.validateLink(href)) {
        return false;
      }

      pos = res.pos;
      lines += res.lines;
      destEndPos = pos;
      destEndLineNo = lines;
      start = pos;

      for (; pos < max; pos++) {
        ch = str.charCodeAt(pos);

        if (ch === 10) {
          lines++;
        } else if (isSpace(ch)) ; else {
          break;
        }
      }

      res = state.md.helpers.parseLinkTitle(str, pos, max);

      if (pos < max && start !== pos && res.ok) {
        title = res.str;
        pos = res.pos;
        lines += res.lines;
      } else {
        title = "";
        pos = destEndPos;
        lines = destEndLineNo;
      }

      while (pos < max) {
        ch = str.charCodeAt(pos);

        if (!isSpace(ch)) {
          break;
        }

        pos++;
      }

      if (pos < max && str.charCodeAt(pos) !== 10) {
        if (title) {
          title = "";
          pos = destEndPos;
          lines = destEndLineNo;

          while (pos < max) {
            ch = str.charCodeAt(pos);

            if (!isSpace(ch)) {
              break;
            }

            pos++;
          }
        }
      }

      if (pos < max && str.charCodeAt(pos) !== 10) {
        return false;
      }

      label = normalizeReference(str.slice(1, labelEnd));

      if (!label) {
        return false;
      }

      if (silent) {
        return true;
      }

      if (typeof state.env.references === "undefined") {
        state.env.references = {};
      }

      if (typeof state.env.references[label] === "undefined") {
        state.env.references[label] = {
          title,
          href
        };
      }

      state.parentType = oldParentType;
      state.line = startLine + lines + 1;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/common/html_blocks.js


var require_html_blocks = __commonJS({
  "node_modules/markdown-it/lib/common/html_blocks.js"(exports, module) {

    module.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
  }

}); // node_modules/markdown-it/lib/common/html_re.js


var require_html_re = __commonJS({
  "node_modules/markdown-it/lib/common/html_re.js"(exports, module) {

    var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
    var unquoted = "[^\"'=<>`\\x00-\\x20]+";
    var single_quoted = "'[^']*'";
    var double_quoted = '"[^"]*"';
    var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
    var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
    var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
    var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
    var comment = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
    var processing = "<[?][\\s\\S]*?[?]>";
    var declaration = "<![A-Z]+\\s+[^>]*>";
    var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
    var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment + "|" + processing + "|" + declaration + "|" + cdata + ")");
    var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
    module.exports.HTML_TAG_RE = HTML_TAG_RE;
    module.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
  }

}); // node_modules/markdown-it/lib/rules_block/html_block.js


var require_html_block = __commonJS({
  "node_modules/markdown-it/lib/rules_block/html_block.js"(exports, module) {

    var block_names = require_html_blocks();
    var HTML_OPEN_CLOSE_TAG_RE = require_html_re().HTML_OPEN_CLOSE_TAG_RE;
    var HTML_SEQUENCES = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true], [new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"), /^$/, false]];

    module.exports = function html_block(state, startLine, endLine, silent) {
      var i,
          nextLine,
          token,
          lineText,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }

      if (!state.md.options.html) {
        return false;
      }

      if (state.src.charCodeAt(pos) !== 60) {
        return false;
      }

      lineText = state.src.slice(pos, max);

      for (i = 0; i < HTML_SEQUENCES.length; i++) {
        if (HTML_SEQUENCES[i][0].test(lineText)) {
          break;
        }
      }

      if (i === HTML_SEQUENCES.length) {
        return false;
      }

      if (silent) {
        return HTML_SEQUENCES[i][2];
      }

      nextLine = startLine + 1;

      if (!HTML_SEQUENCES[i][1].test(lineText)) {
        for (; nextLine < endLine; nextLine++) {
          if (state.sCount[nextLine] < state.blkIndent) {
            break;
          }

          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          lineText = state.src.slice(pos, max);

          if (HTML_SEQUENCES[i][1].test(lineText)) {
            if (lineText.length !== 0) {
              nextLine++;
            }

            break;
          }
        }
      }

      state.line = nextLine;
      token = state.push("html_block", "", 0);
      token.map = [startLine, nextLine];
      token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_block/heading.js


var require_heading = __commonJS({
  "node_modules/markdown-it/lib/rules_block/heading.js"(exports, module) {

    var isSpace = require_utils().isSpace;

    module.exports = function heading2(state, startLine, endLine, silent) {
      var ch,
          level,
          tmp,
          token,
          pos = state.bMarks[startLine] + state.tShift[startLine],
          max = state.eMarks[startLine];

      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }

      ch = state.src.charCodeAt(pos);

      if (ch !== 35 || pos >= max) {
        return false;
      }

      level = 1;
      ch = state.src.charCodeAt(++pos);

      while (ch === 35 && pos < max && level <= 6) {
        level++;
        ch = state.src.charCodeAt(++pos);
      }

      if (level > 6 || pos < max && !isSpace(ch)) {
        return false;
      }

      if (silent) {
        return true;
      }

      max = state.skipSpacesBack(max, pos);
      tmp = state.skipCharsBack(max, 35, pos);

      if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
        max = tmp;
      }

      state.line = startLine + 1;
      token = state.push("heading_open", "h" + String(level), 1);
      token.markup = "########".slice(0, level);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = state.src.slice(pos, max).trim();
      token.map = [startLine, state.line];
      token.children = [];
      token = state.push("heading_close", "h" + String(level), -1);
      token.markup = "########".slice(0, level);
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_block/lheading.js


var require_lheading = __commonJS({
  "node_modules/markdown-it/lib/rules_block/lheading.js"(exports, module) {

    module.exports = function lheading(state, startLine, endLine) {
      var content,
          terminate,
          i,
          l,
          token,
          pos,
          max,
          level,
          marker,
          nextLine = startLine + 1,
          oldParentType,
          terminatorRules = state.md.block.ruler.getRules("paragraph");

      if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
        return false;
      }

      oldParentType = state.parentType;
      state.parentType = "paragraph";

      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }

        if (state.sCount[nextLine] >= state.blkIndent) {
          pos = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];

          if (pos < max) {
            marker = state.src.charCodeAt(pos);

            if (marker === 45 || marker === 61) {
              pos = state.skipChars(pos, marker);
              pos = state.skipSpaces(pos);

              if (pos >= max) {
                level = marker === 61 ? 1 : 2;
                break;
              }
            }
          }
        }

        if (state.sCount[nextLine] < 0) {
          continue;
        }

        terminate = false;

        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }

        if (terminate) {
          break;
        }
      }

      if (!level) {
        return false;
      }

      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine + 1;
      token = state.push("heading_open", "h" + String(level), 1);
      token.markup = String.fromCharCode(marker);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = content;
      token.map = [startLine, state.line - 1];
      token.children = [];
      token = state.push("heading_close", "h" + String(level), -1);
      token.markup = String.fromCharCode(marker);
      state.parentType = oldParentType;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_block/paragraph.js


var require_paragraph = __commonJS({
  "node_modules/markdown-it/lib/rules_block/paragraph.js"(exports, module) {

    module.exports = function paragraph2(state, startLine) {
      var content,
          terminate,
          i,
          l,
          token,
          oldParentType,
          nextLine = startLine + 1,
          terminatorRules = state.md.block.ruler.getRules("paragraph"),
          endLine = state.lineMax;
      oldParentType = state.parentType;
      state.parentType = "paragraph";

      for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
        if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent > 3) {
          continue;
        }

        if (state.sCount[nextLine] < 0) {
          continue;
        }

        terminate = false;

        for (i = 0, l = terminatorRules.length; i < l; i++) {
          if (terminatorRules[i](state, nextLine, endLine, true)) {
            terminate = true;
            break;
          }
        }

        if (terminate) {
          break;
        }
      }

      content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
      state.line = nextLine;
      token = state.push("paragraph_open", "p", 1);
      token.map = [startLine, state.line];
      token = state.push("inline", "", 0);
      token.content = content;
      token.map = [startLine, state.line];
      token.children = [];
      token = state.push("paragraph_close", "p", -1);
      state.parentType = oldParentType;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_block/state_block.js


var require_state_block = __commonJS({
  "node_modules/markdown-it/lib/rules_block/state_block.js"(exports, module) {

    var Token = require_token();
    var isSpace = require_utils().isSpace;

    function StateBlock(src, md, env, tokens) {
      var ch, s2, start, pos, len, indent, offset, indent_found;
      this.src = src;
      this.md = md;
      this.env = env;
      this.tokens = tokens;
      this.bMarks = [];
      this.eMarks = [];
      this.tShift = [];
      this.sCount = [];
      this.bsCount = [];
      this.blkIndent = 0;
      this.line = 0;
      this.lineMax = 0;
      this.tight = false;
      this.ddIndent = -1;
      this.listIndent = -1;
      this.parentType = "root";
      this.level = 0;
      this.result = "";
      s2 = this.src;
      indent_found = false;

      for (start = pos = indent = offset = 0, len = s2.length; pos < len; pos++) {
        ch = s2.charCodeAt(pos);

        if (!indent_found) {
          if (isSpace(ch)) {
            indent++;

            if (ch === 9) {
              offset += 4 - offset % 4;
            } else {
              offset++;
            }

            continue;
          } else {
            indent_found = true;
          }
        }

        if (ch === 10 || pos === len - 1) {
          if (ch !== 10) {
            pos++;
          }

          this.bMarks.push(start);
          this.eMarks.push(pos);
          this.tShift.push(indent);
          this.sCount.push(offset);
          this.bsCount.push(0);
          indent_found = false;
          indent = 0;
          offset = 0;
          start = pos + 1;
        }
      }

      this.bMarks.push(s2.length);
      this.eMarks.push(s2.length);
      this.tShift.push(0);
      this.sCount.push(0);
      this.bsCount.push(0);
      this.lineMax = this.bMarks.length - 1;
    }

    StateBlock.prototype.push = function (type, tag, nesting) {
      var token = new Token(type, tag, nesting);
      token.block = true;
      if (nesting < 0) this.level--;
      token.level = this.level;
      if (nesting > 0) this.level++;
      this.tokens.push(token);
      return token;
    };

    StateBlock.prototype.isEmpty = function isEmpty(line) {
      return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
    };

    StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
      for (var max = this.lineMax; from < max; from++) {
        if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
          break;
        }
      }

      return from;
    };

    StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
      var ch;

      for (var max = this.src.length; pos < max; pos++) {
        ch = this.src.charCodeAt(pos);

        if (!isSpace(ch)) {
          break;
        }
      }

      return pos;
    };

    StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
      if (pos <= min) {
        return pos;
      }

      while (pos > min) {
        if (!isSpace(this.src.charCodeAt(--pos))) {
          return pos + 1;
        }
      }

      return pos;
    };

    StateBlock.prototype.skipChars = function skipChars(pos, code2) {
      for (var max = this.src.length; pos < max; pos++) {
        if (this.src.charCodeAt(pos) !== code2) {
          break;
        }
      }

      return pos;
    };

    StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code2, min) {
      if (pos <= min) {
        return pos;
      }

      while (pos > min) {
        if (code2 !== this.src.charCodeAt(--pos)) {
          return pos + 1;
        }
      }

      return pos;
    };

    StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
      var i,
          lineIndent,
          ch,
          first,
          last,
          queue,
          lineStart,
          line = begin;

      if (begin >= end) {
        return "";
      }

      queue = new Array(end - begin);

      for (i = 0; line < end; line++, i++) {
        lineIndent = 0;
        lineStart = first = this.bMarks[line];

        if (line + 1 < end || keepLastLF) {
          last = this.eMarks[line] + 1;
        } else {
          last = this.eMarks[line];
        }

        while (first < last && lineIndent < indent) {
          ch = this.src.charCodeAt(first);

          if (isSpace(ch)) {
            if (ch === 9) {
              lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
            } else {
              lineIndent++;
            }
          } else if (first - lineStart < this.tShift[line]) {
            lineIndent++;
          } else {
            break;
          }

          first++;
        }

        if (lineIndent > indent) {
          queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
        } else {
          queue[i] = this.src.slice(first, last);
        }
      }

      return queue.join("");
    };

    StateBlock.prototype.Token = Token;
    module.exports = StateBlock;
  }

}); // node_modules/markdown-it/lib/parser_block.js


var require_parser_block = __commonJS({
  "node_modules/markdown-it/lib/parser_block.js"(exports, module) {

    var Ruler = require_ruler();
    var _rules = [["table", require_table(), ["paragraph", "reference"]], ["code", require_code()], ["fence", require_fence(), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", require_blockquote(), ["paragraph", "reference", "blockquote", "list"]], ["hr", require_hr(), ["paragraph", "reference", "blockquote", "list"]], ["list", require_list(), ["paragraph", "reference", "blockquote"]], ["reference", require_reference()], ["html_block", require_html_block(), ["paragraph", "reference", "blockquote"]], ["heading", require_heading(), ["paragraph", "reference", "blockquote"]], ["lheading", require_lheading()], ["paragraph", require_paragraph()]];

    function ParserBlock() {
      this.ruler = new Ruler();

      for (var i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1], {
          alt: (_rules[i][2] || []).slice()
        });
      }
    }

    ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
      var ok,
          i,
          rules = this.ruler.getRules(""),
          len = rules.length,
          line = startLine,
          hasEmptyLines = false,
          maxNesting = state.md.options.maxNesting;

      while (line < endLine) {
        state.line = line = state.skipEmptyLines(line);

        if (line >= endLine) {
          break;
        }

        if (state.sCount[line] < state.blkIndent) {
          break;
        }

        if (state.level >= maxNesting) {
          state.line = endLine;
          break;
        }

        for (i = 0; i < len; i++) {
          ok = rules[i](state, line, endLine, false);

          if (ok) {
            break;
          }
        }

        state.tight = !hasEmptyLines;

        if (state.isEmpty(state.line - 1)) {
          hasEmptyLines = true;
        }

        line = state.line;

        if (line < endLine && state.isEmpty(line)) {
          hasEmptyLines = true;
          line++;
          state.line = line;
        }
      }
    };

    ParserBlock.prototype.parse = function (src, md, env, outTokens) {
      var state;

      if (!src) {
        return;
      }

      state = new this.State(src, md, env, outTokens);
      this.tokenize(state, state.line, state.lineMax);
    };

    ParserBlock.prototype.State = require_state_block();
    module.exports = ParserBlock;
  }

}); // node_modules/markdown-it/lib/rules_inline/text.js


var require_text = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/text.js"(exports, module) {

    function isTerminatorChar(ch) {
      switch (ch) {
        case 10:
        case 33:
        case 35:
        case 36:
        case 37:
        case 38:
        case 42:
        case 43:
        case 45:
        case 58:
        case 60:
        case 61:
        case 62:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 125:
        case 126:
          return true;

        default:
          return false;
      }
    }

    module.exports = function text2(state, silent) {
      var pos = state.pos;

      while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
        pos++;
      }

      if (pos === state.pos) {
        return false;
      }

      if (!silent) {
        state.pending += state.src.slice(state.pos, pos);
      }

      state.pos = pos;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/newline.js


var require_newline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/newline.js"(exports, module) {

    var isSpace = require_utils().isSpace;

    module.exports = function newline(state, silent) {
      var pmax,
          max,
          ws,
          pos = state.pos;

      if (state.src.charCodeAt(pos) !== 10) {
        return false;
      }

      pmax = state.pending.length - 1;
      max = state.posMax;

      if (!silent) {
        if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
          if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
            ws = pmax - 1;

            while (ws >= 1 && state.pending.charCodeAt(ws - 1) === 32) ws--;

            state.pending = state.pending.slice(0, ws);
            state.push("hardbreak", "br", 0);
          } else {
            state.pending = state.pending.slice(0, -1);
            state.push("softbreak", "br", 0);
          }
        } else {
          state.push("softbreak", "br", 0);
        }
      }

      pos++;

      while (pos < max && isSpace(state.src.charCodeAt(pos))) {
        pos++;
      }

      state.pos = pos;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/escape.js


var require_escape = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/escape.js"(exports, module) {

    var isSpace = require_utils().isSpace;
    var ESCAPED = [];

    for (i = 0; i < 256; i++) {
      ESCAPED.push(0);
    }

    var i;
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (ch) {
      ESCAPED[ch.charCodeAt(0)] = 1;
    });

    module.exports = function escape(state, silent) {
      var ch,
          pos = state.pos,
          max = state.posMax;

      if (state.src.charCodeAt(pos) !== 92) {
        return false;
      }

      pos++;

      if (pos < max) {
        ch = state.src.charCodeAt(pos);

        if (ch < 256 && ESCAPED[ch] !== 0) {
          if (!silent) {
            state.pending += state.src[pos];
          }

          state.pos += 2;
          return true;
        }

        if (ch === 10) {
          if (!silent) {
            state.push("hardbreak", "br", 0);
          }

          pos++;

          while (pos < max) {
            ch = state.src.charCodeAt(pos);

            if (!isSpace(ch)) {
              break;
            }

            pos++;
          }

          state.pos = pos;
          return true;
        }
      }

      if (!silent) {
        state.pending += "\\";
      }

      state.pos++;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/backticks.js


var require_backticks = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/backticks.js"(exports, module) {

    module.exports = function backtick(state, silent) {
      var start,
          max,
          marker,
          token,
          matchStart,
          matchEnd,
          openerLength,
          closerLength,
          pos = state.pos,
          ch = state.src.charCodeAt(pos);

      if (ch !== 96) {
        return false;
      }

      start = pos;
      pos++;
      max = state.posMax;

      while (pos < max && state.src.charCodeAt(pos) === 96) {
        pos++;
      }

      marker = state.src.slice(start, pos);
      openerLength = marker.length;

      if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
        if (!silent) state.pending += marker;
        state.pos += openerLength;
        return true;
      }

      matchStart = matchEnd = pos;

      while ((matchStart = state.src.indexOf("`", matchEnd)) !== -1) {
        matchEnd = matchStart + 1;

        while (matchEnd < max && state.src.charCodeAt(matchEnd) === 96) {
          matchEnd++;
        }

        closerLength = matchEnd - matchStart;

        if (closerLength === openerLength) {
          if (!silent) {
            token = state.push("code_inline", "code", 0);
            token.markup = marker;
            token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
          }

          state.pos = matchEnd;
          return true;
        }

        state.backticks[closerLength] = matchStart;
      }

      state.backticksScanned = true;
      if (!silent) state.pending += marker;
      state.pos += openerLength;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/strikethrough.js


var require_strikethrough = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/strikethrough.js"(exports, module) {

    module.exports.tokenize = function strikethrough(state, silent) {
      var i,
          scanned,
          token,
          len,
          ch,
          start = state.pos,
          marker = state.src.charCodeAt(start);

      if (silent) {
        return false;
      }

      if (marker !== 126) {
        return false;
      }

      scanned = state.scanDelims(state.pos, true);
      len = scanned.length;
      ch = String.fromCharCode(marker);

      if (len < 2) {
        return false;
      }

      if (len % 2) {
        token = state.push("text", "", 0);
        token.content = ch;
        len--;
      }

      for (i = 0; i < len; i += 2) {
        token = state.push("text", "", 0);
        token.content = ch + ch;
        state.delimiters.push({
          marker,
          length: 0,
          token: state.tokens.length - 1,
          end: -1,
          open: scanned.can_open,
          close: scanned.can_close
        });
      }

      state.pos += scanned.length;
      return true;
    };

    function postProcess(state, delimiters) {
      var i,
          j,
          startDelim,
          endDelim,
          token,
          loneMarkers = [],
          max = delimiters.length;

      for (i = 0; i < max; i++) {
        startDelim = delimiters[i];

        if (startDelim.marker !== 126) {
          continue;
        }

        if (startDelim.end === -1) {
          continue;
        }

        endDelim = delimiters[startDelim.end];
        token = state.tokens[startDelim.token];
        token.type = "s_open";
        token.tag = "s";
        token.nesting = 1;
        token.markup = "~~";
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = "s_close";
        token.tag = "s";
        token.nesting = -1;
        token.markup = "~~";
        token.content = "";

        if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
          loneMarkers.push(endDelim.token - 1);
        }
      }

      while (loneMarkers.length) {
        i = loneMarkers.pop();
        j = i + 1;

        while (j < state.tokens.length && state.tokens[j].type === "s_close") {
          j++;
        }

        j--;

        if (i !== j) {
          token = state.tokens[j];
          state.tokens[j] = state.tokens[i];
          state.tokens[i] = token;
        }
      }
    }

    module.exports.postProcess = function strikethrough(state) {
      var curr,
          tokens_meta = state.tokens_meta,
          max = state.tokens_meta.length;
      postProcess(state, state.delimiters);

      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/emphasis.js


var require_emphasis = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/emphasis.js"(exports, module) {

    module.exports.tokenize = function emphasis(state, silent) {
      var i,
          scanned,
          token,
          start = state.pos,
          marker = state.src.charCodeAt(start);

      if (silent) {
        return false;
      }

      if (marker !== 95 && marker !== 42) {
        return false;
      }

      scanned = state.scanDelims(state.pos, marker === 42);

      for (i = 0; i < scanned.length; i++) {
        token = state.push("text", "", 0);
        token.content = String.fromCharCode(marker);
        state.delimiters.push({
          marker,
          length: scanned.length,
          token: state.tokens.length - 1,
          end: -1,
          open: scanned.can_open,
          close: scanned.can_close
        });
      }

      state.pos += scanned.length;
      return true;
    };

    function postProcess(state, delimiters) {
      var i,
          startDelim,
          endDelim,
          token,
          ch,
          isStrong,
          max = delimiters.length;

      for (i = max - 1; i >= 0; i--) {
        startDelim = delimiters[i];

        if (startDelim.marker !== 95 && startDelim.marker !== 42) {
          continue;
        }

        if (startDelim.end === -1) {
          continue;
        }

        endDelim = delimiters[startDelim.end];
        isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1;
        ch = String.fromCharCode(startDelim.marker);
        token = state.tokens[startDelim.token];
        token.type = isStrong ? "strong_open" : "em_open";
        token.tag = isStrong ? "strong" : "em";
        token.nesting = 1;
        token.markup = isStrong ? ch + ch : ch;
        token.content = "";
        token = state.tokens[endDelim.token];
        token.type = isStrong ? "strong_close" : "em_close";
        token.tag = isStrong ? "strong" : "em";
        token.nesting = -1;
        token.markup = isStrong ? ch + ch : ch;
        token.content = "";

        if (isStrong) {
          state.tokens[delimiters[i - 1].token].content = "";
          state.tokens[delimiters[startDelim.end + 1].token].content = "";
          i--;
        }
      }
    }

    module.exports.postProcess = function emphasis(state) {
      var curr,
          tokens_meta = state.tokens_meta,
          max = state.tokens_meta.length;
      postProcess(state, state.delimiters);

      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          postProcess(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/link.js


var require_link = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/link.js"(exports, module) {

    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;

    module.exports = function link2(state, silent) {
      var attrs,
          code2,
          label,
          labelEnd,
          labelStart,
          pos,
          res,
          ref,
          token,
          href = "",
          title = "",
          oldPos = state.pos,
          max = state.posMax,
          start = state.pos,
          parseReference = true;

      if (state.src.charCodeAt(state.pos) !== 91) {
        return false;
      }

      labelStart = state.pos + 1;
      labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);

      if (labelEnd < 0) {
        return false;
      }

      pos = labelEnd + 1;

      if (pos < max && state.src.charCodeAt(pos) === 40) {
        parseReference = false;
        pos++;

        for (; pos < max; pos++) {
          code2 = state.src.charCodeAt(pos);

          if (!isSpace(code2) && code2 !== 10) {
            break;
          }
        }

        if (pos >= max) {
          return false;
        }

        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);

        if (res.ok) {
          href = state.md.normalizeLink(res.str);

          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }

          start = pos;

          for (; pos < max; pos++) {
            code2 = state.src.charCodeAt(pos);

            if (!isSpace(code2) && code2 !== 10) {
              break;
            }
          }

          res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);

          if (pos < max && start !== pos && res.ok) {
            title = res.str;
            pos = res.pos;

            for (; pos < max; pos++) {
              code2 = state.src.charCodeAt(pos);

              if (!isSpace(code2) && code2 !== 10) {
                break;
              }
            }
          }
        }

        if (pos >= max || state.src.charCodeAt(pos) !== 41) {
          parseReference = true;
        }

        pos++;
      }

      if (parseReference) {
        if (typeof state.env.references === "undefined") {
          return false;
        }

        if (pos < max && state.src.charCodeAt(pos) === 91) {
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);

          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }

        if (!label) {
          label = state.src.slice(labelStart, labelEnd);
        }

        ref = state.env.references[normalizeReference(label)];

        if (!ref) {
          state.pos = oldPos;
          return false;
        }

        href = ref.href;
        title = ref.title;
      }

      if (!silent) {
        state.pos = labelStart;
        state.posMax = labelEnd;
        token = state.push("link_open", "a", 1);
        token.attrs = attrs = [["href", href]];

        if (title) {
          attrs.push(["title", title]);
        }

        state.md.inline.tokenize(state);
        token = state.push("link_close", "a", -1);
      }

      state.pos = pos;
      state.posMax = max;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/image.js


var require_image = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/image.js"(exports, module) {

    var normalizeReference = require_utils().normalizeReference;
    var isSpace = require_utils().isSpace;

    module.exports = function image2(state, silent) {
      var attrs,
          code2,
          content,
          label,
          labelEnd,
          labelStart,
          pos,
          ref,
          res,
          title,
          token,
          tokens,
          start,
          href = "",
          oldPos = state.pos,
          max = state.posMax;

      if (state.src.charCodeAt(state.pos) !== 33) {
        return false;
      }

      if (state.src.charCodeAt(state.pos + 1) !== 91) {
        return false;
      }

      labelStart = state.pos + 2;
      labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

      if (labelEnd < 0) {
        return false;
      }

      pos = labelEnd + 1;

      if (pos < max && state.src.charCodeAt(pos) === 40) {
        pos++;

        for (; pos < max; pos++) {
          code2 = state.src.charCodeAt(pos);

          if (!isSpace(code2) && code2 !== 10) {
            break;
          }
        }

        if (pos >= max) {
          return false;
        }

        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);

        if (res.ok) {
          href = state.md.normalizeLink(res.str);

          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }
        }

        start = pos;

        for (; pos < max; pos++) {
          code2 = state.src.charCodeAt(pos);

          if (!isSpace(code2) && code2 !== 10) {
            break;
          }
        }

        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);

        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;

          for (; pos < max; pos++) {
            code2 = state.src.charCodeAt(pos);

            if (!isSpace(code2) && code2 !== 10) {
              break;
            }
          }
        } else {
          title = "";
        }

        if (pos >= max || state.src.charCodeAt(pos) !== 41) {
          state.pos = oldPos;
          return false;
        }

        pos++;
      } else {
        if (typeof state.env.references === "undefined") {
          return false;
        }

        if (pos < max && state.src.charCodeAt(pos) === 91) {
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);

          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }

        if (!label) {
          label = state.src.slice(labelStart, labelEnd);
        }

        ref = state.env.references[normalizeReference(label)];

        if (!ref) {
          state.pos = oldPos;
          return false;
        }

        href = ref.href;
        title = ref.title;
      }

      if (!silent) {
        content = state.src.slice(labelStart, labelEnd);
        state.md.inline.parse(content, state.md, state.env, tokens = []);
        token = state.push("image", "img", 0);
        token.attrs = attrs = [["src", href], ["alt", ""]];
        token.children = tokens;
        token.content = content;

        if (title) {
          attrs.push(["title", title]);
        }
      }

      state.pos = pos;
      state.posMax = max;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/autolink.js


var require_autolink = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/autolink.js"(exports, module) {

    var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
    var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;

    module.exports = function autolink(state, silent) {
      var url,
          fullUrl,
          token,
          ch,
          start,
          max,
          pos = state.pos;

      if (state.src.charCodeAt(pos) !== 60) {
        return false;
      }

      start = state.pos;
      max = state.posMax;

      for (;;) {
        if (++pos >= max) return false;
        ch = state.src.charCodeAt(pos);
        if (ch === 60) return false;
        if (ch === 62) break;
      }

      url = state.src.slice(start + 1, pos);

      if (AUTOLINK_RE.test(url)) {
        fullUrl = state.md.normalizeLink(url);

        if (!state.md.validateLink(fullUrl)) {
          return false;
        }

        if (!silent) {
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "autolink";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "autolink";
          token.info = "auto";
        }

        state.pos += url.length + 2;
        return true;
      }

      if (EMAIL_RE.test(url)) {
        fullUrl = state.md.normalizeLink("mailto:" + url);

        if (!state.md.validateLink(fullUrl)) {
          return false;
        }

        if (!silent) {
          token = state.push("link_open", "a", 1);
          token.attrs = [["href", fullUrl]];
          token.markup = "autolink";
          token.info = "auto";
          token = state.push("text", "", 0);
          token.content = state.md.normalizeLinkText(url);
          token = state.push("link_close", "a", -1);
          token.markup = "autolink";
          token.info = "auto";
        }

        state.pos += url.length + 2;
        return true;
      }

      return false;
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/html_inline.js


var require_html_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/html_inline.js"(exports, module) {

    var HTML_TAG_RE = require_html_re().HTML_TAG_RE;

    function isLetter(ch) {
      var lc = ch | 32;
      return lc >= 97 && lc <= 122;
    }

    module.exports = function html_inline(state, silent) {
      var ch,
          match,
          max,
          token,
          pos = state.pos;

      if (!state.md.options.html) {
        return false;
      }

      max = state.posMax;

      if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
        return false;
      }

      ch = state.src.charCodeAt(pos + 1);

      if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
        return false;
      }

      match = state.src.slice(pos).match(HTML_TAG_RE);

      if (!match) {
        return false;
      }

      if (!silent) {
        token = state.push("html_inline", "", 0);
        token.content = state.src.slice(pos, pos + match[0].length);
      }

      state.pos += match[0].length;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/entity.js


var require_entity = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/entity.js"(exports, module) {

    var entities = require_entities2();
    var has = require_utils().has;
    var isValidEntityCode = require_utils().isValidEntityCode;
    var fromCodePoint = require_utils().fromCodePoint;
    var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
    var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;

    module.exports = function entity(state, silent) {
      var ch,
          code2,
          match,
          pos = state.pos,
          max = state.posMax;

      if (state.src.charCodeAt(pos) !== 38) {
        return false;
      }

      if (pos + 1 < max) {
        ch = state.src.charCodeAt(pos + 1);

        if (ch === 35) {
          match = state.src.slice(pos).match(DIGITAL_RE);

          if (match) {
            if (!silent) {
              code2 = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
              state.pending += isValidEntityCode(code2) ? fromCodePoint(code2) : fromCodePoint(65533);
            }

            state.pos += match[0].length;
            return true;
          }
        } else {
          match = state.src.slice(pos).match(NAMED_RE);

          if (match) {
            if (has(entities, match[1])) {
              if (!silent) {
                state.pending += entities[match[1]];
              }

              state.pos += match[0].length;
              return true;
            }
          }
        }
      }

      if (!silent) {
        state.pending += "&";
      }

      state.pos++;
      return true;
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/balance_pairs.js


var require_balance_pairs = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/balance_pairs.js"(exports, module) {

    function processDelimiters(state, delimiters) {
      var closerIdx,
          openerIdx,
          closer,
          opener,
          minOpenerIdx,
          newMinOpenerIdx,
          isOddMatch,
          lastJump,
          openersBottom = {},
          max = delimiters.length;
      if (!max) return;
      var headerIdx = 0;
      var lastTokenIdx = -2;
      var jumps = [];

      for (closerIdx = 0; closerIdx < max; closerIdx++) {
        closer = delimiters[closerIdx];
        jumps.push(0);

        if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
          headerIdx = closerIdx;
        }

        lastTokenIdx = closer.token;
        closer.length = closer.length || 0;
        if (!closer.close) continue;

        if (!openersBottom.hasOwnProperty(closer.marker)) {
          openersBottom[closer.marker] = [-1, -1, -1, -1, -1, -1];
        }

        minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
        openerIdx = headerIdx - jumps[headerIdx] - 1;
        newMinOpenerIdx = openerIdx;

        for (; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1) {
          opener = delimiters[openerIdx];
          if (opener.marker !== closer.marker) continue;

          if (opener.open && opener.end < 0) {
            isOddMatch = false;

            if (opener.close || closer.open) {
              if ((opener.length + closer.length) % 3 === 0) {
                if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                  isOddMatch = true;
                }
              }
            }

            if (!isOddMatch) {
              lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
              jumps[closerIdx] = closerIdx - openerIdx + lastJump;
              jumps[openerIdx] = lastJump;
              closer.open = false;
              opener.end = closerIdx;
              opener.close = false;
              newMinOpenerIdx = -1;
              lastTokenIdx = -2;
              break;
            }
          }
        }

        if (newMinOpenerIdx !== -1) {
          openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
        }
      }
    }

    module.exports = function link_pairs(state) {
      var curr,
          tokens_meta = state.tokens_meta,
          max = state.tokens_meta.length;
      processDelimiters(state, state.delimiters);

      for (curr = 0; curr < max; curr++) {
        if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
          processDelimiters(state, tokens_meta[curr].delimiters);
        }
      }
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/text_collapse.js


var require_text_collapse = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/text_collapse.js"(exports, module) {

    module.exports = function text_collapse(state) {
      var curr,
          last,
          level = 0,
          tokens = state.tokens,
          max = state.tokens.length;

      for (curr = last = 0; curr < max; curr++) {
        if (tokens[curr].nesting < 0) level--;
        tokens[curr].level = level;
        if (tokens[curr].nesting > 0) level++;

        if (tokens[curr].type === "text" && curr + 1 < max && tokens[curr + 1].type === "text") {
          tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
        } else {
          if (curr !== last) {
            tokens[last] = tokens[curr];
          }

          last++;
        }
      }

      if (curr !== last) {
        tokens.length = last;
      }
    };
  }

}); // node_modules/markdown-it/lib/rules_inline/state_inline.js


var require_state_inline = __commonJS({
  "node_modules/markdown-it/lib/rules_inline/state_inline.js"(exports, module) {

    var Token = require_token();
    var isWhiteSpace = require_utils().isWhiteSpace;
    var isPunctChar = require_utils().isPunctChar;
    var isMdAsciiPunct = require_utils().isMdAsciiPunct;

    function StateInline(src, md, env, outTokens) {
      this.src = src;
      this.env = env;
      this.md = md;
      this.tokens = outTokens;
      this.tokens_meta = Array(outTokens.length);
      this.pos = 0;
      this.posMax = this.src.length;
      this.level = 0;
      this.pending = "";
      this.pendingLevel = 0;
      this.cache = {};
      this.delimiters = [];
      this._prev_delimiters = [];
      this.backticks = {};
      this.backticksScanned = false;
    }

    StateInline.prototype.pushPending = function () {
      var token = new Token("text", "", 0);
      token.content = this.pending;
      token.level = this.pendingLevel;
      this.tokens.push(token);
      this.pending = "";
      return token;
    };

    StateInline.prototype.push = function (type, tag, nesting) {
      if (this.pending) {
        this.pushPending();
      }

      var token = new Token(type, tag, nesting);
      var token_meta = null;

      if (nesting < 0) {
        this.level--;
        this.delimiters = this._prev_delimiters.pop();
      }

      token.level = this.level;

      if (nesting > 0) {
        this.level++;

        this._prev_delimiters.push(this.delimiters);

        this.delimiters = [];
        token_meta = {
          delimiters: this.delimiters
        };
      }

      this.pendingLevel = this.level;
      this.tokens.push(token);
      this.tokens_meta.push(token_meta);
      return token;
    };

    StateInline.prototype.scanDelims = function (start, canSplitWord) {
      var pos = start,
          lastChar,
          nextChar,
          count,
          can_open,
          can_close,
          isLastWhiteSpace,
          isLastPunctChar,
          isNextWhiteSpace,
          isNextPunctChar,
          left_flanking = true,
          right_flanking = true,
          max = this.posMax,
          marker = this.src.charCodeAt(start);
      lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;

      while (pos < max && this.src.charCodeAt(pos) === marker) {
        pos++;
      }

      count = pos - start;
      nextChar = pos < max ? this.src.charCodeAt(pos) : 32;
      isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
      isLastWhiteSpace = isWhiteSpace(lastChar);
      isNextWhiteSpace = isWhiteSpace(nextChar);

      if (isNextWhiteSpace) {
        left_flanking = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
          left_flanking = false;
        }
      }

      if (isLastWhiteSpace) {
        right_flanking = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
          right_flanking = false;
        }
      }

      if (!canSplitWord) {
        can_open = left_flanking && (!right_flanking || isLastPunctChar);
        can_close = right_flanking && (!left_flanking || isNextPunctChar);
      } else {
        can_open = left_flanking;
        can_close = right_flanking;
      }

      return {
        can_open,
        can_close,
        length: count
      };
    };

    StateInline.prototype.Token = Token;
    module.exports = StateInline;
  }

}); // node_modules/markdown-it/lib/parser_inline.js


var require_parser_inline = __commonJS({
  "node_modules/markdown-it/lib/parser_inline.js"(exports, module) {

    var Ruler = require_ruler();
    var _rules = [["text", require_text()], ["newline", require_newline()], ["escape", require_escape()], ["backticks", require_backticks()], ["strikethrough", require_strikethrough().tokenize], ["emphasis", require_emphasis().tokenize], ["link", require_link()], ["image", require_image()], ["autolink", require_autolink()], ["html_inline", require_html_inline()], ["entity", require_entity()]];
    var _rules2 = [["balance_pairs", require_balance_pairs()], ["strikethrough", require_strikethrough().postProcess], ["emphasis", require_emphasis().postProcess], ["text_collapse", require_text_collapse()]];

    function ParserInline() {
      var i;
      this.ruler = new Ruler();

      for (i = 0; i < _rules.length; i++) {
        this.ruler.push(_rules[i][0], _rules[i][1]);
      }

      this.ruler2 = new Ruler();

      for (i = 0; i < _rules2.length; i++) {
        this.ruler2.push(_rules2[i][0], _rules2[i][1]);
      }
    }

    ParserInline.prototype.skipToken = function (state) {
      var ok,
          i,
          pos = state.pos,
          rules = this.ruler.getRules(""),
          len = rules.length,
          maxNesting = state.md.options.maxNesting,
          cache = state.cache;

      if (typeof cache[pos] !== "undefined") {
        state.pos = cache[pos];
        return;
      }

      if (state.level < maxNesting) {
        for (i = 0; i < len; i++) {
          state.level++;
          ok = rules[i](state, true);
          state.level--;

          if (ok) {
            break;
          }
        }
      } else {
        state.pos = state.posMax;
      }

      if (!ok) {
        state.pos++;
      }

      cache[pos] = state.pos;
    };

    ParserInline.prototype.tokenize = function (state) {
      var ok,
          i,
          rules = this.ruler.getRules(""),
          len = rules.length,
          end = state.posMax,
          maxNesting = state.md.options.maxNesting;

      while (state.pos < end) {
        if (state.level < maxNesting) {
          for (i = 0; i < len; i++) {
            ok = rules[i](state, false);

            if (ok) {
              break;
            }
          }
        }

        if (ok) {
          if (state.pos >= end) {
            break;
          }

          continue;
        }

        state.pending += state.src[state.pos++];
      }

      if (state.pending) {
        state.pushPending();
      }
    };

    ParserInline.prototype.parse = function (str, md, env, outTokens) {
      var i, rules, len;
      var state = new this.State(str, md, env, outTokens);
      this.tokenize(state);
      rules = this.ruler2.getRules("");
      len = rules.length;

      for (i = 0; i < len; i++) {
        rules[i](state);
      }
    };

    ParserInline.prototype.State = require_state_inline();
    module.exports = ParserInline;
  }

}); // node_modules/linkify-it/lib/re.js


var require_re = __commonJS({
  "node_modules/linkify-it/lib/re.js"(exports, module) {

    module.exports = function (opts) {
      var re = {};
      re.src_Any = require_regex2().source;
      re.src_Cc = require_regex3().source;
      re.src_Z = require_regex5().source;
      re.src_P = require_regex().source;
      re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join("|");
      re.src_ZCc = [re.src_Z, re.src_Cc].join("|");
      var text_separators = "[><\uFF5C]";
      re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
      re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
      re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
      re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
      re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
      re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re.src_ZCc + ").|;(?!" + re.src_ZCc + ").|\\!+(?!" + re.src_ZCc + "|[!]).|\\?(?!" + re.src_ZCc + "|[?]).)+|\\/)?";
      re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
      re.src_xn = "xn--[a-z0-9\\-]{1,59}";
      re.src_domain_root = "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
      re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
      re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
      re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
      re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
      re.src_host_strict = re.src_host + re.src_host_terminator;
      re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
      re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
      re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
      re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
      re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
      re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
      re.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
      re.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + re.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
      return re;
    };
  }

}); // node_modules/linkify-it/index.js


var require_linkify_it = __commonJS({
  "node_modules/linkify-it/index.js"(exports, module) {

    function assign(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      sources.forEach(function (source) {
        if (!source) {
          return;
        }

        Object.keys(source).forEach(function (key) {
          obj[key] = source[key];
        });
      });
      return obj;
    }

    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }

    function isString(obj) {
      return _class(obj) === "[object String]";
    }

    function isObject(obj) {
      return _class(obj) === "[object Object]";
    }

    function isRegExp(obj) {
      return _class(obj) === "[object RegExp]";
    }

    function isFunction2(obj) {
      return _class(obj) === "[object Function]";
    }

    function escapeRE(str) {
      return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
    }

    var defaultOptions = {
      fuzzyLink: true,
      fuzzyEmail: true,
      fuzzyIP: false
    };

    function isOptionsObj(obj) {
      return Object.keys(obj || {}).reduce(function (acc, k) {
        return acc || defaultOptions.hasOwnProperty(k);
      }, false);
    }

    var defaultSchemas = {
      "http:": {
        validate: function (text2, pos, self) {
          var tail = text2.slice(pos);

          if (!self.re.http) {
            self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
          }

          if (self.re.http.test(tail)) {
            return tail.match(self.re.http)[0].length;
          }

          return 0;
        }
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function (text2, pos, self) {
          var tail = text2.slice(pos);

          if (!self.re.no_http) {
            self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
          }

          if (self.re.no_http.test(tail)) {
            if (pos >= 3 && text2[pos - 3] === ":") {
              return 0;
            }

            if (pos >= 3 && text2[pos - 3] === "/") {
              return 0;
            }

            return tail.match(self.re.no_http)[0].length;
          }

          return 0;
        }
      },
      "mailto:": {
        validate: function (text2, pos, self) {
          var tail = text2.slice(pos);

          if (!self.re.mailto) {
            self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
          }

          if (self.re.mailto.test(tail)) {
            return tail.match(self.re.mailto)[0].length;
          }

          return 0;
        }
      }
    };
    var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
    var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");

    function resetScanCache(self) {
      self.__index__ = -1;
      self.__text_cache__ = "";
    }

    function createValidator(re) {
      return function (text2, pos) {
        var tail = text2.slice(pos);

        if (re.test(tail)) {
          return tail.match(re)[0].length;
        }

        return 0;
      };
    }

    function createNormalizer() {
      return function (match, self) {
        self.normalize(match);
      };
    }

    function compile(self) {
      var re = self.re = require_re()(self.__opts__);

      var tlds = self.__tlds__.slice();

      self.onCompile();

      if (!self.__tlds_replaced__) {
        tlds.push(tlds_2ch_src_re);
      }

      tlds.push(re.src_xn);
      re.src_tlds = tlds.join("|");

      function untpl(tpl) {
        return tpl.replace("%TLDS%", re.src_tlds);
      }

      re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
      re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
      re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
      re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
      var aliases = [];
      self.__compiled__ = {};

      function schemaError(name, val) {
        throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
      }

      Object.keys(self.__schemas__).forEach(function (name) {
        var val = self.__schemas__[name];

        if (val === null) {
          return;
        }

        var compiled = {
          validate: null,
          link: null
        };
        self.__compiled__[name] = compiled;

        if (isObject(val)) {
          if (isRegExp(val.validate)) {
            compiled.validate = createValidator(val.validate);
          } else if (isFunction2(val.validate)) {
            compiled.validate = val.validate;
          } else {
            schemaError(name, val);
          }

          if (isFunction2(val.normalize)) {
            compiled.normalize = val.normalize;
          } else if (!val.normalize) {
            compiled.normalize = createNormalizer();
          } else {
            schemaError(name, val);
          }

          return;
        }

        if (isString(val)) {
          aliases.push(name);
          return;
        }

        schemaError(name, val);
      });
      aliases.forEach(function (alias) {
        if (!self.__compiled__[self.__schemas__[alias]]) {
          return;
        }

        self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
        self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
      });
      self.__compiled__[""] = {
        validate: null,
        normalize: createNormalizer()
      };
      var slist = Object.keys(self.__compiled__).filter(function (name) {
        return name.length > 0 && self.__compiled__[name];
      }).map(escapeRE).join("|");
      self.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "i");
      self.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
      self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
      resetScanCache(self);
    }

    function Match(self, shift) {
      var start = self.__index__,
          end = self.__last_index__,
          text2 = self.__text_cache__.slice(start, end);

      this.schema = self.__schema__.toLowerCase();
      this.index = start + shift;
      this.lastIndex = end + shift;
      this.raw = text2;
      this.text = text2;
      this.url = text2;
    }

    function createMatch(self, shift) {
      var match = new Match(self, shift);

      self.__compiled__[match.schema].normalize(match, self);

      return match;
    }

    function LinkifyIt(schemas, options) {
      if (!(this instanceof LinkifyIt)) {
        return new LinkifyIt(schemas, options);
      }

      if (!options) {
        if (isOptionsObj(schemas)) {
          options = schemas;
          schemas = {};
        }
      }

      this.__opts__ = assign({}, defaultOptions, options);
      this.__index__ = -1;
      this.__last_index__ = -1;
      this.__schema__ = "";
      this.__text_cache__ = "";
      this.__schemas__ = assign({}, defaultSchemas, schemas);
      this.__compiled__ = {};
      this.__tlds__ = tlds_default;
      this.__tlds_replaced__ = false;
      this.re = {};
      compile(this);
    }

    LinkifyIt.prototype.add = function add(schema, definition) {
      this.__schemas__[schema] = definition;
      compile(this);
      return this;
    };

    LinkifyIt.prototype.set = function set(options) {
      this.__opts__ = assign(this.__opts__, options);
      return this;
    };

    LinkifyIt.prototype.test = function test(text2) {
      this.__text_cache__ = text2;
      this.__index__ = -1;

      if (!text2.length) {
        return false;
      }

      var m, ml, me, len, shift, next, re, tld_pos, at_pos;

      if (this.re.schema_test.test(text2)) {
        re = this.re.schema_search;
        re.lastIndex = 0;

        while ((m = re.exec(text2)) !== null) {
          len = this.testSchemaAt(text2, m[2], re.lastIndex);

          if (len) {
            this.__schema__ = m[2];
            this.__index__ = m.index + m[1].length;
            this.__last_index__ = m.index + m[0].length + len;
            break;
          }
        }
      }

      if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
        tld_pos = text2.search(this.re.host_fuzzy_test);

        if (tld_pos >= 0) {
          if (this.__index__ < 0 || tld_pos < this.__index__) {
            if ((ml = text2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
              shift = ml.index + ml[1].length;

              if (this.__index__ < 0 || shift < this.__index__) {
                this.__schema__ = "";
                this.__index__ = shift;
                this.__last_index__ = ml.index + ml[0].length;
              }
            }
          }
        }
      }

      if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
        at_pos = text2.indexOf("@");

        if (at_pos >= 0) {
          if ((me = text2.match(this.re.email_fuzzy)) !== null) {
            shift = me.index + me[1].length;
            next = me.index + me[0].length;

            if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
              this.__schema__ = "mailto:";
              this.__index__ = shift;
              this.__last_index__ = next;
            }
          }
        }
      }

      return this.__index__ >= 0;
    };

    LinkifyIt.prototype.pretest = function pretest(text2) {
      return this.re.pretest.test(text2);
    };

    LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text2, schema, pos) {
      if (!this.__compiled__[schema.toLowerCase()]) {
        return 0;
      }

      return this.__compiled__[schema.toLowerCase()].validate(text2, pos, this);
    };

    LinkifyIt.prototype.match = function match(text2) {
      var shift = 0,
          result = [];

      if (this.__index__ >= 0 && this.__text_cache__ === text2) {
        result.push(createMatch(this, shift));
        shift = this.__last_index__;
      }

      var tail = shift ? text2.slice(shift) : text2;

      while (this.test(tail)) {
        result.push(createMatch(this, shift));
        tail = tail.slice(this.__last_index__);
        shift += this.__last_index__;
      }

      if (result.length) {
        return result;
      }

      return null;
    };

    LinkifyIt.prototype.tlds = function tlds(list2, keepOld) {
      list2 = Array.isArray(list2) ? list2 : [list2];

      if (!keepOld) {
        this.__tlds__ = list2.slice();
        this.__tlds_replaced__ = true;
        compile(this);
        return this;
      }

      this.__tlds__ = this.__tlds__.concat(list2).sort().filter(function (el, idx, arr) {
        return el !== arr[idx - 1];
      }).reverse();
      compile(this);
      return this;
    };

    LinkifyIt.prototype.normalize = function normalize(match) {
      if (!match.schema) {
        match.url = "http://" + match.url;
      }

      if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
        match.url = "mailto:" + match.url;
      }
    };

    LinkifyIt.prototype.onCompile = function onCompile() {};

    module.exports = LinkifyIt;
  }

}); // node_modules/punycode/punycode.js


var require_punycode = __commonJS({
  "node_modules/punycode/punycode.js"(exports, module) {

    var maxInt = 2147483647;
    var base = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128;
    var delimiter = "-";
    var regexPunycode = /^xn--/;
    var regexNonASCII = /[^\0-\x7E]/;
    var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    var errors = {
      "overflow": "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    var baseMinusTMin = base - tMin;
    var floor = Math.floor;
    var stringFromCharCode = String.fromCharCode;

    function error2(type) {
      throw new RangeError(errors[type]);
    }

    function map(array, fn) {
      const result = [];
      let length = array.length;

      while (length--) {
        result[length] = fn(array[length]);
      }

      return result;
    }

    function mapDomain(string, fn) {
      const parts = string.split("@");
      let result = "";

      if (parts.length > 1) {
        result = parts[0] + "@";
        string = parts[1];
      }

      string = string.replace(regexSeparators, ".");
      const labels = string.split(".");
      const encoded = map(labels, fn).join(".");
      return result + encoded;
    }

    function ucs2decode(string) {
      const output = [];
      let counter = 0;
      const length = string.length;

      while (counter < length) {
        const value = string.charCodeAt(counter++);

        if (value >= 55296 && value <= 56319 && counter < length) {
          const extra = string.charCodeAt(counter++);

          if ((extra & 64512) == 56320) {
            output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }

      return output;
    }

    var ucs2encode = array => String.fromCodePoint(...array);

    var basicToDigit = function (codePoint) {
      if (codePoint - 48 < 10) {
        return codePoint - 22;
      }

      if (codePoint - 65 < 26) {
        return codePoint - 65;
      }

      if (codePoint - 97 < 26) {
        return codePoint - 97;
      }

      return base;
    };

    var digitToBasic = function (digit, flag) {
      return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    };

    var adapt = function (delta, numPoints, firstTime) {
      let k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);

      for (; delta > baseMinusTMin * tMax >> 1; k += base) {
        delta = floor(delta / baseMinusTMin);
      }

      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    };

    var decode = function (input) {
      const output = [];
      const inputLength = input.length;
      let i = 0;
      let n = initialN;
      let bias = initialBias;
      let basic = input.lastIndexOf(delimiter);

      if (basic < 0) {
        basic = 0;
      }

      for (let j = 0; j < basic; ++j) {
        if (input.charCodeAt(j) >= 128) {
          error2("not-basic");
        }

        output.push(input.charCodeAt(j));
      }

      for (let index = basic > 0 ? basic + 1 : 0; index < inputLength;) {
        let oldi = i;

        for (let w = 1, k = base;; k += base) {
          if (index >= inputLength) {
            error2("invalid-input");
          }

          const digit = basicToDigit(input.charCodeAt(index++));

          if (digit >= base || digit > floor((maxInt - i) / w)) {
            error2("overflow");
          }

          i += digit * w;
          const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

          if (digit < t) {
            break;
          }

          const baseMinusT = base - t;

          if (w > floor(maxInt / baseMinusT)) {
            error2("overflow");
          }

          w *= baseMinusT;
        }

        const out = output.length + 1;
        bias = adapt(i - oldi, out, oldi == 0);

        if (floor(i / out) > maxInt - n) {
          error2("overflow");
        }

        n += floor(i / out);
        i %= out;
        output.splice(i++, 0, n);
      }

      return String.fromCodePoint(...output);
    };

    var encode = function (input) {
      const output = [];
      input = ucs2decode(input);
      let inputLength = input.length;
      let n = initialN;
      let delta = 0;
      let bias = initialBias;

      for (const currentValue of input) {
        if (currentValue < 128) {
          output.push(stringFromCharCode(currentValue));
        }
      }

      let basicLength = output.length;
      let handledCPCount = basicLength;

      if (basicLength) {
        output.push(delimiter);
      }

      while (handledCPCount < inputLength) {
        let m = maxInt;

        for (const currentValue of input) {
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }

        const handledCPCountPlusOne = handledCPCount + 1;

        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          error2("overflow");
        }

        delta += (m - n) * handledCPCountPlusOne;
        n = m;

        for (const currentValue of input) {
          if (currentValue < n && ++delta > maxInt) {
            error2("overflow");
          }

          if (currentValue == n) {
            let q = delta;

            for (let k = base;; k += base) {
              const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

              if (q < t) {
                break;
              }

              const qMinusT = q - t;
              const baseMinusT = base - t;
              output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
              q = floor(qMinusT / baseMinusT);
            }

            output.push(stringFromCharCode(digitToBasic(q, 0)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
            delta = 0;
            ++handledCPCount;
          }
        }

        ++delta;
        ++n;
      }

      return output.join("");
    };

    var toUnicode = function (input) {
      return mapDomain(input, function (string) {
        return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
      });
    };

    var toASCII = function (input) {
      return mapDomain(input, function (string) {
        return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
      });
    };

    var punycode = {
      "version": "2.1.0",
      "ucs2": {
        "decode": ucs2decode,
        "encode": ucs2encode
      },
      "decode": decode,
      "encode": encode,
      "toASCII": toASCII,
      "toUnicode": toUnicode
    };
    module.exports = punycode;
  }

}); // node_modules/markdown-it/lib/presets/default.js


var require_default = __commonJS({
  "node_modules/markdown-it/lib/presets/default.js"(exports, module) {

    module.exports = {
      options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 100
      },
      components: {
        core: {},
        block: {},
        inline: {}
      }
    };
  }

}); // node_modules/markdown-it/lib/presets/zero.js


var require_zero = __commonJS({
  "node_modules/markdown-it/lib/presets/zero.js"(exports, module) {

    module.exports = {
      options: {
        html: false,
        xhtmlOut: false,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {
          rules: ["normalize", "block", "inline"]
        },
        block: {
          rules: ["paragraph"]
        },
        inline: {
          rules: ["text"],
          rules2: ["balance_pairs", "text_collapse"]
        }
      }
    };
  }

}); // node_modules/markdown-it/lib/presets/commonmark.js


var require_commonmark = __commonJS({
  "node_modules/markdown-it/lib/presets/commonmark.js"(exports, module) {

    module.exports = {
      options: {
        html: true,
        xhtmlOut: true,
        breaks: false,
        langPrefix: "language-",
        linkify: false,
        typographer: false,
        quotes: "\u201C\u201D\u2018\u2019",
        highlight: null,
        maxNesting: 20
      },
      components: {
        core: {
          rules: ["normalize", "block", "inline"]
        },
        block: {
          rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
        },
        inline: {
          rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
          rules2: ["balance_pairs", "emphasis", "text_collapse"]
        }
      }
    };
  }

}); // node_modules/markdown-it/lib/index.js


var require_lib = __commonJS({
  "node_modules/markdown-it/lib/index.js"(exports, module) {

    var utils = require_utils();
    var helpers = require_helpers();
    var Renderer = require_renderer();
    var ParserCore = require_parser_core();
    var ParserBlock = require_parser_block();
    var ParserInline = require_parser_inline();
    var LinkifyIt = require_linkify_it();
    var mdurl = require_mdurl();
    var punycode = require_punycode();
    var config = {
      default: require_default(),
      zero: require_zero(),
      commonmark: require_commonmark()
    };
    var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
    var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;

    function validateLink(url) {
      var str = url.trim().toLowerCase();
      return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
    }

    var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];

    function normalizeLink(url) {
      var parsed = mdurl.parse(url, true);

      if (parsed.hostname) {
        if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
          try {
            parsed.hostname = punycode.toASCII(parsed.hostname);
          } catch (er) {}
        }
      }

      return mdurl.encode(mdurl.format(parsed));
    }

    function normalizeLinkText(url) {
      var parsed = mdurl.parse(url, true);

      if (parsed.hostname) {
        if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
          try {
            parsed.hostname = punycode.toUnicode(parsed.hostname);
          } catch (er) {}
        }
      }

      return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
    }

    function MarkdownIt3(presetName, options) {
      if (!(this instanceof MarkdownIt3)) {
        return new MarkdownIt3(presetName, options);
      }

      if (!options) {
        if (!utils.isString(presetName)) {
          options = presetName || {};
          presetName = "default";
        }
      }

      this.inline = new ParserInline();
      this.block = new ParserBlock();
      this.core = new ParserCore();
      this.renderer = new Renderer();
      this.linkify = new LinkifyIt();
      this.validateLink = validateLink;
      this.normalizeLink = normalizeLink;
      this.normalizeLinkText = normalizeLinkText;
      this.utils = utils;
      this.helpers = utils.assign({}, helpers);
      this.options = {};
      this.configure(presetName);

      if (options) {
        this.set(options);
      }
    }

    MarkdownIt3.prototype.set = function (options) {
      utils.assign(this.options, options);
      return this;
    };

    MarkdownIt3.prototype.configure = function (presets) {
      var self = this,
          presetName;

      if (utils.isString(presets)) {
        presetName = presets;
        presets = config[presetName];

        if (!presets) {
          throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
        }
      }

      if (!presets) {
        throw new Error("Wrong `markdown-it` preset, can't be empty");
      }

      if (presets.options) {
        self.set(presets.options);
      }

      if (presets.components) {
        Object.keys(presets.components).forEach(function (name) {
          if (presets.components[name].rules) {
            self[name].ruler.enableOnly(presets.components[name].rules);
          }

          if (presets.components[name].rules2) {
            self[name].ruler2.enableOnly(presets.components[name].rules2);
          }
        });
      }

      return this;
    };

    MarkdownIt3.prototype.enable = function (list2, ignoreInvalid) {
      var result = [];

      if (!Array.isArray(list2)) {
        list2 = [list2];
      }

      ["core", "block", "inline"].forEach(function (chain) {
        result = result.concat(this[chain].ruler.enable(list2, true));
      }, this);
      result = result.concat(this.inline.ruler2.enable(list2, true));
      var missed = list2.filter(function (name) {
        return result.indexOf(name) < 0;
      });

      if (missed.length && !ignoreInvalid) {
        throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
      }

      return this;
    };

    MarkdownIt3.prototype.disable = function (list2, ignoreInvalid) {
      var result = [];

      if (!Array.isArray(list2)) {
        list2 = [list2];
      }

      ["core", "block", "inline"].forEach(function (chain) {
        result = result.concat(this[chain].ruler.disable(list2, true));
      }, this);
      result = result.concat(this.inline.ruler2.disable(list2, true));
      var missed = list2.filter(function (name) {
        return result.indexOf(name) < 0;
      });

      if (missed.length && !ignoreInvalid) {
        throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
      }

      return this;
    };

    MarkdownIt3.prototype.use = function (plugin3) {
      var args = [this].concat(Array.prototype.slice.call(arguments, 1));
      plugin3.apply(plugin3, args);
      return this;
    };

    MarkdownIt3.prototype.parse = function (src, env) {
      if (typeof src !== "string") {
        throw new Error("Input data should be a String");
      }

      var state = new this.core.State(src, this, env);
      this.core.process(state);
      return state.tokens;
    };

    MarkdownIt3.prototype.render = function (src, env) {
      env = env || {};
      return this.renderer.render(this.parse(src, env), this.options, env);
    };

    MarkdownIt3.prototype.parseInline = function (src, env) {
      var state = new this.core.State(src, this, env);
      state.inlineMode = true;
      this.core.process(state);
      return state.tokens;
    };

    MarkdownIt3.prototype.renderInline = function (src, env) {
      env = env || {};
      return this.renderer.render(this.parseInline(src, env), this.options, env);
    };

    module.exports = MarkdownIt3;
  }

}); // src/grammar/tag.js


var require_tag = __commonJS({
  "src/grammar/tag.js"(exports, module) {

    function peg$subclass(child, parent) {
      function C() {
        this.constructor = child;
      }

      C.prototype = parent.prototype;
      child.prototype = new C();
    }

    function peg$SyntaxError(message, expected, found, location) {
      this.message = message;
      this.expected = expected;
      this.found = found;
      this.location = location;
      this.name = "SyntaxError";

      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(this, peg$SyntaxError);
      }
    }

    peg$subclass(peg$SyntaxError, Error);

    peg$SyntaxError.buildMessage = function (expected, found, location) {
      var DESCRIBE_EXPECTATION_FNS = {
        literal: function (expectation) {
          return '"' + literalEscape(expectation.text) + '"';
        },
        class: function (expectation) {
          var escapedParts = expectation.parts.map(function (part) {
            return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
          });
          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },
        any: function () {
          return "any character";
        },
        end: function () {
          return "end of input";
        },
        other: function (expectation) {
          return expectation.description;
        },
        not: function (expectation) {
          return "not " + describeExpectation(expectation.expected);
        }
      };

      function hex(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase();
      }

      function literalEscape(s2) {
        return s2.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
          return "\\x0" + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
          return "\\x" + hex(ch);
        });
      }

      function classEscape(s2) {
        return s2.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (ch) {
          return "\\x0" + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
          return "\\x" + hex(ch);
        });
      }

      function describeExpectation(expectation) {
        return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
      }

      function describeExpected(expected2) {
        var descriptions = expected2.map(describeExpectation);
        var i, j;
        descriptions.sort();

        if (descriptions.length > 0) {
          for (i = 1, j = 1; i < descriptions.length; i++) {
            if (descriptions[i - 1] !== descriptions[i]) {
              descriptions[j] = descriptions[i];
              j++;
            }
          }

          descriptions.length = j;
        }

        switch (descriptions.length) {
          case 1:
            return descriptions[0];

          case 2:
            return descriptions[0] + " or " + descriptions[1];

          default:
            return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
        }
      }

      function describeFound(found2) {
        return found2 ? '"' + literalEscape(found2) + '"' : "end of input";
      }

      return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    };

    function peg$parse(input, options) {
      options = options !== void 0 ? options : {};
      var peg$FAILED = {};
      var peg$startRuleFunctions = {
        Top: peg$parseTop
      };
      var peg$startRuleFunction = peg$parseTop;
      var peg$c0 = "/";
      var peg$c1 = ".";
      var peg$c2 = "#";
      var peg$c3 = "=";
      var peg$c4 = "(";
      var peg$c5 = ")";
      var peg$c6 = ",";
      var peg$c7 = "[";
      var peg$c8 = "]";
      var peg$c9 = "null";
      var peg$c10 = "true";
      var peg$c11 = "false";
      var peg$c12 = "{";
      var peg$c13 = "}";
      var peg$c14 = ":";
      var peg$c16 = '"';
      var peg$c17 = "\\";
      var peg$r0 = /^[$@]/;
      var peg$r1 = /^[0-9]/;
      var peg$r2 = /^[^\0-\x1F"\\]/;
      var peg$r3 = /^[a-zA-Z0-9_\-]/;
      var peg$r4 = /^[ \n\t]/;
      var peg$e0 = peg$literalExpectation("/", false);
      var peg$e1 = peg$otherExpectation("tag name");
      var peg$e2 = peg$otherExpectation("class");
      var peg$e3 = peg$otherExpectation("id");
      var peg$e4 = peg$literalExpectation("=", false);
      var peg$e5 = peg$literalExpectation("(", false);
      var peg$e6 = peg$literalExpectation(")", false);
      var peg$e7 = peg$literalExpectation(",", false);
      var peg$e8 = peg$otherExpectation("variable");
      var peg$e9 = peg$otherExpectation("null");
      var peg$e10 = peg$otherExpectation("boolean");
      var peg$e11 = peg$literalExpectation("[", false);
      var peg$e12 = peg$literalExpectation("]", false);
      var peg$e13 = peg$literalExpectation("{", false);
      var peg$e14 = peg$literalExpectation("}", false);
      var peg$e15 = peg$literalExpectation(":", false);
      var peg$e16 = peg$otherExpectation("number");
      var peg$e17 = peg$otherExpectation("string");
      var peg$e18 = peg$otherExpectation("identifier");
      var peg$e19 = peg$otherExpectation("whitespace");

      var peg$f0 = function (variable) {
        return {
          type: "variable",
          meta: {
            variable
          }
        };
      };

      var peg$f1 = function (attributes) {
        return {
          type: "annotation",
          meta: {
            attributes
          }
        };
      };

      var peg$f2 = function (tag, value) {
        return value;
      };

      var peg$f3 = function (tag, primary, attributes, close) {
        if (primary) {
          attributes = attributes || [];
          attributes.unshift({
            type: "attribute",
            name: "primary",
            value: primary
          });
        }

        const [type, nesting] = close ? ["tag", 0] : ["tag_open", 1];
        return {
          type,
          nesting,
          meta: {
            tag,
            attributes
          }
        };
      };

      var peg$f4 = function (tag) {
        return {
          type: "tag_close",
          nesting: -1,
          meta: {
            tag
          }
        };
      };

      var peg$f5 = function (head, tail) {
        return !head ? [] : [head, ...tail];
      };

      var peg$f6 = function (item2) {
        return item2;
      };

      var peg$f7 = function (ids) {
        return ids;
      };

      var peg$f8 = function (classes) {
        return classes;
      };

      var peg$f9 = function (attribute) {
        return attribute;
      };

      var peg$f10 = function (name) {
        return {
          type: "class",
          name,
          value: true
        };
      };

      var peg$f11 = function (value) {
        return {
          type: "attribute",
          name: "id",
          value
        };
      };

      var peg$f12 = function (name, value) {
        return {
          type: "attribute",
          name,
          value
        };
      };

      var peg$f13 = function (name, head, tail) {
        return head ? [head, ...tail] : [];
      };

      var peg$f14 = function (name, params) {
        let parameters = {};

        for (let [index, {
          name: name2,
          value
        }] of params.entries()) parameters[name2 || index] = value;

        return new Function3(name, parameters);
      };

      var peg$f15 = function (name) {
        return name;
      };

      var peg$f16 = function (name, value) {
        return {
          name,
          value
        };
      };

      var peg$f17 = function (value) {
        return value;
      };

      var peg$f18 = function (prefix, head, tail) {
        if (prefix === "@") return [head, ...tail];
        return new Variable2([head, ...tail]);
      };

      var peg$f19 = function () {
        return null;
      };

      var peg$f20 = function () {
        return true;
      };

      var peg$f21 = function () {
        return false;
      };

      var peg$f22 = function (head, tail) {
        return [head, ...tail];
      };

      var peg$f23 = function (value) {
        return value || [];
      };

      var peg$f24 = function (head, tail) {
        return Object.assign(head, ...tail);
      };

      var peg$f25 = function (value) {
        return value || {};
      };

      var peg$f26 = function (key, value) {
        return key === "$$mdtype" ? {} : {
          [key]: value
        };
      };

      var peg$f27 = function () {
        return parseFloat(text2());
      };

      var peg$f28 = function (value) {
        return value.join("");
      };

      var peg$f29 = function (sequence) {
        return sequence;
      };

      var peg$currPos = 0;
      var peg$savedPos = 0;
      var peg$posDetailsCache = [{
        line: 1,
        column: 1
      }];
      var peg$expected = [];
      var peg$silentFails = 0;
      var peg$result;

      if ("startRule" in options) {
        if (!(options.startRule in peg$startRuleFunctions)) {
          throw new Error(`Can't start parsing from rule "` + options.startRule + '".');
        }

        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
      }

      function text2() {
        return input.substring(peg$savedPos, peg$currPos);
      }

      function peg$literalExpectation(text3, ignoreCase) {
        return {
          type: "literal",
          text: text3,
          ignoreCase
        };
      }

      function peg$endExpectation() {
        return {
          type: "end"
        };
      }

      function peg$otherExpectation(description) {
        return {
          type: "other",
          description
        };
      }

      function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos];
        var p;

        if (details) {
          return details;
        } else {
          p = pos - 1;

          while (!peg$posDetailsCache[p]) {
            p--;
          }

          details = peg$posDetailsCache[p];
          details = {
            line: details.line,
            column: details.column
          };

          while (p < pos) {
            if (input.charCodeAt(p) === 10) {
              details.line++;
              details.column = 1;
            } else {
              details.column++;
            }

            p++;
          }

          peg$posDetailsCache[pos] = details;
          return details;
        }
      }

      var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;

      function peg$computeLocation(startPos, endPos) {
        var loc = {};
        if (peg$VALIDFILENAME) loc.filename = options.filename;
        var startPosDetails = peg$computePosDetails(startPos);
        loc.start = {
          offset: startPos,
          line: startPosDetails.line,
          column: startPosDetails.column
        };
        var endPosDetails = peg$computePosDetails(endPos);
        loc.end = {
          offset: endPos,
          line: endPosDetails.line,
          column: endPosDetails.column
        };
        return loc;
      }

      function peg$begin() {
        peg$expected.push({
          pos: peg$currPos,
          variants: []
        });
      }

      function peg$expect(expected2) {
        var top = peg$expected[peg$expected.length - 1];

        if (peg$currPos < top.pos) {
          return;
        }

        if (peg$currPos > top.pos) {
          top.pos = peg$currPos;
          top.variants = [];
        }

        top.variants.push(expected2);
      }

      function peg$buildStructuredError(expected2, found, location2) {
        return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected2, found, location2), expected2, found, location2);
      }

      function peg$buildError() {
        var expected2 = peg$expected[0];
        var failPos = expected2.pos;
        return peg$buildStructuredError(expected2.variants, failPos < input.length ? input.charAt(failPos) : null, failPos < input.length ? peg$computeLocation(failPos, failPos + 1) : peg$computeLocation(failPos, failPos));
      }

      function peg$parseTop() {
        var s0;

        s0 = peg$parseTopLevelValue();

        if (s0 === peg$FAILED) {
          s0 = peg$parseAnnotation();

          if (s0 === peg$FAILED) {
            s0 = peg$parseTagOpen();

            if (s0 === peg$FAILED) {
              s0 = peg$parseTagClose();
            }
          }
        }

        return s0;
      }

      function peg$parseTopLevelValue() {
        var s0, s1;

        s0 = peg$currPos;
        s1 = peg$parseVariable();

        if (s1 === peg$FAILED) {
          s1 = peg$parseFunction();
        }

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f0(s1);
        }

        s0 = s1;
        return s0;
      }

      function peg$parseAnnotation() {
        var s0, s1, s2, s3;

        s0 = peg$currPos;
        s1 = peg$parseTagAttributes();

        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parse_();

          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }

          peg$savedPos = s0;
          s0 = peg$f1(s1);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseTagOpen() {
        var s0, s1, s2, s3, s4, s5, s6;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        s1 = peg$parseTagName();

        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parse_();

          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }

          s3 = peg$currPos;
          s4 = peg$parseValue();

          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();

            if (s5 === peg$FAILED) {
              s5 = null;
            }

            peg$savedPos = s3;
            s3 = peg$f2(s1, s4);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }

          if (s3 === peg$FAILED) {
            s3 = null;
          }

          s4 = peg$parseTagAttributes();

          if (s4 === peg$FAILED) {
            s4 = null;
          }

          s5 = [];
          s6 = peg$parse_();

          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_();
          }

          rule$expects(peg$e0);

          if (input.charCodeAt(peg$currPos) === 47) {
            s6 = peg$c0;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
          }

          if (s6 === peg$FAILED) {
            s6 = null;
          }

          peg$savedPos = s0;
          s0 = peg$f3(s1, s3, s4, s6);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseTagClose() {
        var s0, s1, s2;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        rule$expects(peg$e0);

        if (input.charCodeAt(peg$currPos) === 47) {
          s1 = peg$c0;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseTagName();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f4(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseTagName() {
        var s0;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        rule$expects(peg$e1);
        peg$silentFails++;
        s0 = peg$parseIdentifier();
        peg$silentFails--;
        return s0;
      }

      function peg$parseTagAttributes() {
        var s0, s1, s2, s3;

        s0 = peg$currPos;
        s1 = peg$parseTagAttributesItem();

        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseTagAttributesTail();

          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseTagAttributesTail();
          }

          peg$savedPos = s0;
          s0 = peg$f5(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseTagAttributesTail() {
        var s0, s1, s2;

        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parse_();

        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parse_();
          }
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseTagAttributesItem();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f6(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseTagAttributesItem() {
        var s0, s1;

        s0 = peg$currPos;
        s1 = peg$parseTagShortcutId();

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f7(s1);
        }

        s0 = s1;

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseTagShortcutClass();

          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$f8(s1);
          }

          s0 = s1;

          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseTagAttribute();

            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$f9(s1);
            }

            s0 = s1;
          }
        }

        return s0;
      }

      function peg$parseTagShortcutClass() {
        var s0, s1, s2;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        rule$expects(peg$e2);
        peg$silentFails++;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 46) {
          s1 = peg$c1;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f10(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        peg$silentFails--;
        return s0;
      }

      function peg$parseTagShortcutId() {
        var s0, s1, s2;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        rule$expects(peg$e3);
        peg$silentFails++;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 35) {
          s1 = peg$c2;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f11(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        peg$silentFails--;
        return s0;
      }

      function peg$parseTagAttribute() {
        var s0, s1, s2, s3;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        s1 = peg$parseIdentifier();

        if (s1 !== peg$FAILED) {
          rule$expects(peg$e4);

          if (input.charCodeAt(peg$currPos) === 61) {
            s2 = peg$c3;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }

          if (s2 !== peg$FAILED) {
            s3 = peg$parseValue();

            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f12(s1, s3);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseFunction() {
        var s0, s1, s2, s3, s4, s5, s6, s7;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        s1 = peg$parseIdentifier();

        if (s1 !== peg$FAILED) {
          rule$expects(peg$e5);

          if (input.charCodeAt(peg$currPos) === 40) {
            s2 = peg$c4;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }

          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parse_();

            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parse_();
            }

            s4 = peg$currPos;
            s5 = peg$parseFunctionParameter();

            if (s5 === peg$FAILED) {
              s5 = null;
            }

            s6 = [];
            s7 = peg$parseFunctionParameterTail();

            while (s7 !== peg$FAILED) {
              s6.push(s7);
              s7 = peg$parseFunctionParameterTail();
            }

            peg$savedPos = s4;
            s4 = peg$f13(s1, s5, s6);
            rule$expects(peg$e6);

            if (input.charCodeAt(peg$currPos) === 41) {
              s5 = peg$c5;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
            }

            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f14(s1, s4);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseFunctionParameter() {
        var s0, s1, s2, s3;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$parseIdentifier();

        if (s2 !== peg$FAILED) {
          rule$expects(peg$e4);

          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c3;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }

          if (s3 !== peg$FAILED) {
            peg$savedPos = s1;
            s1 = peg$f15(s2);
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }

        if (s1 === peg$FAILED) {
          s1 = null;
        }

        s2 = peg$parseValue();

        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f16(s1, s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseFunctionParameterTail() {
        var s0, s1, s2, s3, s4;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parse_();

        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_();
        }

        rule$expects(peg$e7);

        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();

          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }

          s4 = peg$parseFunctionParameter();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f17(s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseTrailingComma() {
        var s0, s1, s2;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parse_();

        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_();
        }

        rule$expects(peg$e7);

        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = null;
        }

        return s0;
      }

      function peg$parseVariable() {
        var s0, s1, s2, s3, s4;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        rule$expects(peg$e8);
        peg$silentFails++;
        s0 = peg$currPos;

        if (peg$r0.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();

          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parseVariableTail();

            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseVariableTail();
            }

            peg$savedPos = s0;
            s0 = peg$f18(s1, s2, s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        peg$silentFails--;
        return s0;
      }

      function peg$parseVariableTail() {
        var s0, s1, s2, s3;

        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 46) {
          s1 = peg$c1;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = peg$parseIdentifier();

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f15(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;

          if (input.charCodeAt(peg$currPos) === 91) {
            s1 = peg$c7;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
          }

          if (s1 !== peg$FAILED) {
            s2 = peg$parseValueNumber();

            if (s2 === peg$FAILED) {
              s2 = peg$parseValueString();
            }

            if (s2 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s3 = peg$c8;
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
              }

              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f17(s2);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }

        return s0;
      }

      function peg$parseValue() {
        var s0;

        s0 = peg$parseValueNull();

        if (s0 === peg$FAILED) {
          s0 = peg$parseValueBoolean();

          if (s0 === peg$FAILED) {
            s0 = peg$parseValueString();

            if (s0 === peg$FAILED) {
              s0 = peg$parseValueNumber();

              if (s0 === peg$FAILED) {
                s0 = peg$parseValueArray();

                if (s0 === peg$FAILED) {
                  s0 = peg$parseValueHash();

                  if (s0 === peg$FAILED) {
                    s0 = peg$parseFunction();

                    if (s0 === peg$FAILED) {
                      s0 = peg$parseVariable();
                    }
                  }
                }
              }
            }
          }
        }

        return s0;
      }

      function peg$parseValueNull() {
        var s0, s1;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        rule$expects(peg$e9);
        peg$silentFails++;
        s0 = peg$currPos;

        if (input.substr(peg$currPos, 4) === peg$c9) {
          s1 = peg$c9;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f19();
        }

        s0 = s1;
        peg$silentFails--;
        return s0;
      }

      function peg$parseValueBoolean() {
        var s0, s1;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        rule$expects(peg$e10);
        peg$silentFails++;
        s0 = peg$currPos;

        if (input.substr(peg$currPos, 4) === peg$c10) {
          s1 = peg$c10;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f20();
        }

        s0 = s1;

        if (s0 === peg$FAILED) {
          s0 = peg$currPos;

          if (input.substr(peg$currPos, 5) === peg$c11) {
            s1 = peg$c11;
            peg$currPos += 5;
          } else {
            s1 = peg$FAILED;
          }

          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$f21();
          }

          s0 = s1;
        }

        peg$silentFails--;
        return s0;
      }

      function peg$parseValueArray() {
        var s0, s1, s2, s3, s4, s5, s6;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        rule$expects(peg$e11);

        if (input.charCodeAt(peg$currPos) === 91) {
          s1 = peg$c7;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parse_();

          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }

          s3 = peg$currPos;
          s4 = peg$parseValue();

          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseValueArrayTail();

            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseValueArrayTail();
            }

            s6 = peg$parseTrailingComma();
            peg$savedPos = s3;
            s3 = peg$f22(s4, s5);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }

          if (s3 === peg$FAILED) {
            s3 = null;
          }

          s4 = [];
          s5 = peg$parse_();

          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }

          rule$expects(peg$e12);

          if (input.charCodeAt(peg$currPos) === 93) {
            s5 = peg$c8;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
          }

          if (s5 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f23(s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseValueArrayTail() {
        var s0, s1, s2, s3, s4;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parse_();

        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_();
        }

        rule$expects(peg$e7);

        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();

          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }

          s4 = peg$parseValue();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f17(s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseValueHash() {
        var s0, s1, s2, s3, s4, s5, s6;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        rule$expects(peg$e13);

        if (input.charCodeAt(peg$currPos) === 123) {
          s1 = peg$c12;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parse_();

          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parse_();
          }

          s3 = peg$currPos;
          s4 = peg$parseValueHashItem();

          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parseValueHashTail();

            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseValueHashTail();
            }

            s6 = peg$parseTrailingComma();
            peg$savedPos = s3;
            s3 = peg$f24(s4, s5);
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }

          if (s3 === peg$FAILED) {
            s3 = null;
          }

          s4 = [];
          s5 = peg$parse_();

          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_();
          }

          rule$expects(peg$e14);

          if (input.charCodeAt(peg$currPos) === 125) {
            s5 = peg$c13;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
          }

          if (s5 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f25(s3);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseValueHashTail() {
        var s0, s1, s2, s3, s4;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parse_();

        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_();
        }

        rule$expects(peg$e7);

        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_();

          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_();
          }

          s4 = peg$parseValueHashItem();

          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f6(s4);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseValueHashItem() {
        var s0, s1, s2, s3, s4;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        s0 = peg$currPos;
        s1 = peg$parseIdentifier();

        if (s1 === peg$FAILED) {
          s1 = peg$parseValueString();
        }

        if (s1 !== peg$FAILED) {
          rule$expects(peg$e15);

          if (input.charCodeAt(peg$currPos) === 58) {
            s2 = peg$c14;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }

          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parse_();

            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parse_();
            }

            s4 = peg$parseValue();

            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f26(s1, s4);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseValueNumber() {
        var s0, s2, s3, s4, s5, s6;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        rule$expects(peg$e16);
        peg$silentFails++;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 45) {
          peg$currPos++;
        }

        s2 = [];

        if (peg$r1.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
        }

        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);

            if (peg$r1.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
            }
          }
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;

          if (input.charCodeAt(peg$currPos) === 46) {
            s4 = peg$c1;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
          }

          if (s4 !== peg$FAILED) {
            s5 = [];

            if (peg$r1.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
            }

            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);

                if (peg$r1.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                }
              }
            } else {
              s5 = peg$FAILED;
            }

            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }

          if (s3 === peg$FAILED) {
            s3 = null;
          }

          peg$savedPos = s0;
          s0 = peg$f27();
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        peg$silentFails--;
        return s0;
      }

      function peg$parseValueString() {
        var s0, s1, s2, s3;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        rule$expects(peg$e17);
        peg$silentFails++;
        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 34) {
          s1 = peg$c16;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseValueStringChars();

          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parseValueStringChars();
          }

          if (input.charCodeAt(peg$currPos) === 34) {
            s3 = peg$c16;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
          }

          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f28(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        peg$silentFails--;
        return s0;
      }

      function peg$parseValueStringChars() {
        var s0;

        if (peg$r2.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
        }

        if (s0 === peg$FAILED) {
          s0 = peg$parseValueStringEscapes();
        }

        return s0;
      }

      function peg$parseValueStringEscapes() {
        var s0, s1, s2;

        s0 = peg$currPos;

        if (input.charCodeAt(peg$currPos) === 92) {
          s1 = peg$c17;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s2 = peg$c16;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
          }

          if (s2 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 92) {
              s2 = peg$c17;
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
            }
          }

          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f29(s2);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parseIdentifier() {
        var s0, s1, s2;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        rule$expects(peg$e18);
        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];

        if (peg$r3.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
        }

        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);

            if (peg$r3.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
            }
          }
        } else {
          s1 = peg$FAILED;
        }

        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }

        peg$silentFails--;
        return s0;
      }

      function peg$parse_() {
        var s0;

        var rule$expects = function (expected2) {
          if (peg$silentFails === 0) peg$expect(expected2);
        };

        rule$expects(peg$e19);
        peg$silentFails++;

        if (peg$r4.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
        }

        peg$silentFails--;
        return s0;
      }

      const {
        Variable: Variable2,
        Function: Function3
      } = options;
      peg$begin();
      peg$result = peg$startRuleFunction();

      if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result;
      } else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
          peg$expect(peg$endExpectation());
        }

        throw peg$buildError();
      }
    }

    module.exports = {
      SyntaxError: peg$SyntaxError,
      parse: peg$parse
    };
  }

}); // node_modules/markdown-it-sup/index.js


var require_markdown_it_sup = __commonJS({
  "node_modules/markdown-it-sup/index.js"(exports, module) {

    var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;

    function superscript(state, silent) {
      var found,
          content,
          token,
          max = state.posMax,
          start = state.pos;

      if (state.src.charCodeAt(start) !== 94) {
        return false;
      }

      if (silent) {
        return false;
      }

      if (start + 2 >= max) {
        return false;
      }

      state.pos = start + 1;

      while (state.pos < max) {
        if (state.src.charCodeAt(state.pos) === 94) {
          found = true;
          break;
        }

        state.md.inline.skipToken(state);
      }

      if (!found || start + 1 === state.pos) {
        state.pos = start;
        return false;
      }

      content = state.src.slice(start + 1, state.pos);

      if (content.match(/(^|[^\\])(\\\\)*\s/)) {
        state.pos = start;
        return false;
      }

      state.posMax = state.pos;
      state.pos = start + 1;
      token = state.push("sup_open", "sup", 1);
      token.markup = "^";
      token = state.push("text", "", 0);
      token.content = content.replace(UNESCAPE_RE, "$1");
      token = state.push("sup_close", "sup", -1);
      token.markup = "^";
      state.pos = state.posMax + 1;
      state.posMax = max;
      return true;
    }

    module.exports = function sup_plugin(md) {
      md.inline.ruler.after("emphasis", "sup", superscript);
    };
  }

}); // node_modules/markdown-it/index.js


var require_markdown_it = __commonJS({
  "node_modules/markdown-it/index.js"(exports, module) {

    module.exports = require_lib();
  }

}); // src/tokenizer/index.ts


var import_lib = __toModule(require_lib()); // src/utils.ts


var import_tag = __toModule(require_tag()); // src/ast/variable.ts


var Variable = class {
  constructor(path = []) {
    this.$$mdtype = "Variable";
    this.path = path;
  }

  resolve({
    variables
  } = {}) {
    return variables instanceof Function ? variables(this.path) : this.path.reduce((obj = {}, key) => obj[key], variables);
  }

}; // src/ast/base.ts

var base_exports = {};

__export(base_exports, {
  getAstValues: () => getAstValues,
  isAst: () => isAst,
  isFunction: () => isFunction,
  resolve: () => resolve
});

function isAst(value) {
  return !!value?.$$mdtype;
}

function isFunction(value) {
  return !!(value?.$$mdtype === "Function");
}

function* getAstValues(value) {
  if (value == null || typeof value !== "object") return;
  if (Array.isArray(value)) for (const v of value) yield* getAstValues(v);
  if (isAst(value)) yield value;
  if (Object.getPrototypeOf(value) !== Object.prototype) return;

  for (const v of Object.values(value)) yield* getAstValues(v);
}

function resolve(value, config = {}) {
  if (value == null || typeof value !== "object") return value;
  if (Array.isArray(value)) return value.map(item2 => resolve(item2, config));
  if (isAst(value) && value?.resolve instanceof Function) return value.resolve(config);
  if (Object.getPrototypeOf(value) !== Object.prototype) return value;
  const output = {};

  for (const [k, v] of Object.entries(value)) output[k] = resolve(v, config);

  return output;
} // src/ast/function.ts


var Function2 = class {
  constructor(name, parameters) {
    this.$$mdtype = "Function";
    this.name = name;
    this.parameters = parameters;
  }

  resolve(config = {}) {
    const fn = config?.functions?.[this.name];
    if (!fn) return null;
    const parameters = resolve(this.parameters, config);
    return fn.transform?.(parameters, config);
  }

}; // src/utils.ts

var STATES;

(function (STATES2) {
  STATES2[STATES2["normal"] = 0] = "normal";
  STATES2[STATES2["string"] = 1] = "string";
  STATES2[STATES2["escape"] = 2] = "escape";
})(STATES || (STATES = {}));

var OPEN = "{%";
var CLOSE = "%}";

function findTagEnd(content, start = 0) {
  let state = 0;

  for (let pos = start; pos < content.length; pos++) {
    const char = content[pos];

    switch (state) {
      case 1:
        switch (char) {
          case '"':
            state = 0;
            break;

          case "\\":
            state = 2;
            break;
        }

        break;

      case 2:
        state = 1;
        break;

      case 0:
        if (char === '"') state = 1;else if (content.startsWith(CLOSE, pos)) return pos;
    }
  }
}

function parseTag(content, line, contentStart) {
  try {
    return (0, import_tag.parse)(content, {
      Variable,
      Function: Function2
    });
  } catch (error2) {
    if (!(error2 instanceof import_tag.SyntaxError)) throw error2;
    const {
      message,
      location: {
        start,
        end
      }
    } = error2;
    const location = {
      start: {
        line,
        character: start.offset + contentStart
      },
      end: {
        line: line + 1,
        character: end.offset + contentStart
      }
    };
    return {
      type: "error",
      meta: {
        error: {
          message,
          location
        }
      }
    };
  }
}

function parseTags(content, firstLine = 0) {
  let line = firstLine + 1;
  const output = [];
  let start = 0;

  for (let pos = 0; pos < content.length; pos++) {
    if (content[pos] === "\n") {
      line++;
      continue;
    }

    if (!content.startsWith(OPEN, pos)) continue;
    const end = findTagEnd(content, pos) || 0;
    const text2 = content.slice(pos, end + CLOSE.length);
    const inner = content.slice(pos + OPEN.length, end);
    const lineStart = content.lastIndexOf("\n", pos);
    const lineEnd = content.indexOf("\n", end);
    const lineContent = content.slice(lineStart, lineEnd);
    const tag = parseTag(inner.trim(), line, pos - lineStart);
    const precedingTextEnd = lineContent.trim() === text2 ? lineStart : pos;
    const precedingText = content.slice(start, precedingTextEnd);
    output.push({
      type: "text",
      start,
      end: pos - 1,
      content: precedingText
    });
    output.push({
      map: [line, line + 1],
      position: {
        start: pos - lineStart,
        end: pos - lineStart + text2.length
      },
      start: pos,
      end: pos + text2.length - 1,
      info: text2,
      ...tag
    });
    start = end + CLOSE.length;
    pos = start - 1;
  }

  output.push({
    type: "text",
    start,
    end: content.length - 1,
    content: content.slice(start)
  });
  return output;
} // src/tokenizer/plugins/annotations.ts


var import_tag2 = __toModule(require_tag());

function createToken(state, content, contentStart) {
  try {
    const {
      type,
      meta,
      nesting = 0
    } = (0, import_tag2.parse)(content, {
      Variable,
      Function: Function2
    });
    const token = state.push(type, "", nesting);
    token.info = content;
    token.meta = meta;
    return token;
  } catch (error2) {
    if (!(error2 instanceof import_tag2.SyntaxError)) throw error2;
    const {
      message,
      location: {
        start,
        end
      }
    } = error2;
    const location = contentStart ? {
      start: {
        offset: start.offset + contentStart
      },
      end: {
        offset: end.offset + contentStart
      }
    } : null;
    const token = state.push("error", "", 0);
    token.meta = {
      error: {
        message,
        location
      }
    };
    return token;
  }
}

function block(state, startLine, endLine, silent) {
  const start = state.bMarks[startLine] + state.tShift[startLine];
  const finish = state.eMarks[startLine];
  if (!state.src.startsWith(OPEN, start)) return false;
  const tagEnd = findTagEnd(state.src, start);
  const lastPossible = state.src.slice(0, finish).trim().length;
  if (!tagEnd || tagEnd < lastPossible - CLOSE.length) return false;
  const contentStart = start + OPEN.length;
  const content = state.src.slice(contentStart, tagEnd).trim();
  const lines = content.split("\n").length;
  if (content[0] === "$") return false;
  if (silent) return true;
  const token = createToken(state, content, contentStart);
  token.map = [startLine, startLine + lines];
  state.line += lines;
  return true;
}

function inline(state, silent) {
  if (!state.src.startsWith(OPEN, state.pos)) return false;
  const tagEnd = findTagEnd(state.src, state.pos);
  if (!tagEnd) return false;
  const content = state.src.slice(state.pos + OPEN.length, tagEnd);
  if (!silent) createToken(state, content.trim());
  state.pos = tagEnd + CLOSE.length;
  return true;
}

function core(state) {
  let token;

  for (token of state.tokens) {
    if (token.type !== "fence") continue;

    if (token.info.includes(OPEN)) {
      const start = token.info.indexOf(OPEN);
      const end = findTagEnd(token.info, start);
      const content = token.info.slice(start + OPEN.length, end);

      try {
        const {
          meta
        } = (0, import_tag2.parse)(content.trim(), {
          Variable,
          Function: Function2
        });
        token.meta = meta;
      } catch (error2) {
        if (!(error2 instanceof import_tag2.SyntaxError)) throw error2;
        if (!token.errors) token.errors = [];
        token.errors.push({
          id: "fence-tag-error",
          level: "error",
          message: `Syntax error in fence tag: ${error2.message}`
        });
      }
    }

    if (token?.meta?.attributes?.find(attr => attr.name === "process" && !attr.value)) continue;
    token.children = parseTags(token.content, token.map[0]);
  }
}

function plugin(md) {
  md.block.ruler.before("paragraph", "annotations", block, {
    alt: ["paragraph", "blockquote"]
  });
  md.inline.ruler.push("containers", inline);
  md.core.ruler.push("annotations", core);
} // src/tokenizer/plugins/frontmatter.ts


var fence$1 = "---";

function getLine(state, n) {
  return state.src.slice(state.bMarks[n], state.eMarks[n]).trim();
}

function findClose(state, endLine) {
  for (let line = 1; line < endLine; line++) if (getLine(state, line) === fence$1) return line;
}

function block2(state, startLine, endLine, silent) {
  if (startLine != 0 || getLine(state, 0) != fence$1) return false;
  const close = findClose(state, endLine);
  if (!close) return false;
  if (silent) return true;
  const token = state.push("frontmatter", "", 0);
  token.content = state.src.slice(state.eMarks[0], state.bMarks[close]).trim();
  token.map = [0, close];
  token.hidden = true;
  state.line = close + 1;
  return true;
}

function plugin2(md) {
  md.block.ruler.before("hr", "frontmatter", block2);
} // src/tokenizer/index.ts


var Tokenizer$2 = class {
  constructor(config = {}) {
    this.parser = new import_lib.default(config);
    this.parser.use(plugin, "annotations", {});
    this.parser.use(plugin2, "frontmatter", {});
    this.parser.use(require_markdown_it_sup());
    this.parser.disable("lheading");
  }

  tokenize(content) {
    return this.parser.parse(content.toString(), {});
  }

}; // src/ast/tag.ts

var Tag = class {
  constructor(name = "div", attributes = {}, children = []) {
    this.$$mdtype = "Tag";
    this.name = name;
    this.attributes = attributes;
    this.children = children;
  }

}; // src/schema-types/class.ts

var Class = class {
  validate(value) {
    if (typeof value === "string" || typeof value === "object") return [];
    return [{
      id: "attribute-type-invalid",
      level: "error",
      message: `Attribute 'class' must be type 'string | object'`
    }];
  }

  transform(value) {
    if (!value || typeof value === "string") return value;
    const classes = [];

    for (const [k, v] of Object.entries(value ?? {})) if (v) classes.push(k);

    return classes.join(" ");
  }

}; // src/transformer.ts

var globalAttributes = {
  class: {
    type: Class,
    render: true
  },
  id: {
    type: String,
    render: true
  }
};
var transformer_default = {
  findSchema(node, {
    nodes = {},
    tags = {}
  } = {}) {
    return node.tag ? tags[node.tag] : nodes[node.type];
  },

  attributes(node, config = {}) {
    const schema = this.findSchema(node, config) ?? {};
    const output = {};
    const attrs = { ...globalAttributes,
      ...schema.attributes
    };

    for (const [key, attr] of Object.entries(attrs)) {
      if (attr.render == false) continue;
      const name = typeof attr.render === "string" ? attr.render : key;
      let value = node.attributes[key];

      if (typeof attr.type === "function") {
        const instance = new attr.type();

        if (instance.transform) {
          value = instance.transform(value, config);
        }
      }

      value = value === void 0 ? attr.default : value;
      if (value === void 0) continue;
      output[name] = value;
    }

    return output;
  },

  children(node, config = {}) {
    return node.children.flatMap(child => this.node(child, config));
  },

  node(node, config = {}) {
    const schema = this.findSchema(node, config) ?? {};
    if (schema && schema.transform instanceof Function) return schema.transform(node, config);
    const children = this.children(node, config);
    if (!schema || !schema.render) return children;
    const attributes = this.attributes(node, config);
    return new Tag(schema.render, attributes, children);
  }

}; // src/ast/node.ts

var Node = class {
  constructor(type = "node", attributes = {}, children = [], tag) {
    this.$$mdtype = "Node";
    this.errors = [];
    this.lines = [];
    this.inline = false;
    this.attributes = attributes;
    this.children = children;
    this.type = type;
    this.tag = tag;
  }

  *walk() {
    for (const child of this.children) {
      yield child;
      yield* child.walk();
    }
  }

  push(node) {
    this.children.push(node);
  }

  resolve(config = {}) {
    return Object.assign(new Node(), this, {
      children: this.children.map(child => child.resolve(config)),
      attributes: resolve(this.attributes, config)
    });
  }

  findSchema(config = {}) {
    return transformer_default.findSchema(this, config);
  }

  transformAttributes(config = {}) {
    return transformer_default.attributes(this, config);
  }

  transformChildren(config) {
    return transformer_default.children(this, config);
  }

  transform(config) {
    return transformer_default.node(this, config);
  }

}; // src/ast/index.ts

var AstTypes = {
  Function: Function2,
  Node,
  Variable
};

function reviver(_, value) {
  if (!value) return value;
  const klass = AstTypes[value.$$mdtype];
  return klass ? Object.assign(new klass(), value) : value;
}

function fromJSON(text2) {
  return JSON.parse(text2, reviver);
}

var ast_default = { ...AstTypes,
  ...base_exports,
  fromJSON
}; // src/transforms/table.ts

function convertToRow(node, cellType = "td") {
  node.type = "tr";
  node.attributes = {};

  for (const cell of node.children) cell.type = cellType;

  return node;
}

function transform(document2) {
  for (const node of document2.walk()) {
    if (node.type !== "tag" || node.tag !== "table") continue;
    const [first, ...rest] = node.children;
    if (!first || first.type === "table") continue;
    const table3 = new ast_default.Node("table", node.attributes, [new ast_default.Node("thead"), new ast_default.Node("tbody")]);
    const [thead2, tbody2] = table3.children;
    if (first.type === "list") thead2.push(convertToRow(first, "th"));

    for (const row of rest) {
      if (row.type === "list") convertToRow(row);else if (row.type === "tag" && row.tag == "if") {
        const children = [];

        for (const child of row.children) {
          if (child.type === "hr") continue;
          if (child.type === "list") convertToRow(child);
          children.push(child);
        }

        row.children = children;
      } else continue;
      tbody2.push(row);
    }

    node.children = [table3];
  }
} // src/transforms/index.ts


var transforms_default = [transform]; // src/parser.ts

var mappings = {
  ordered_list: "list",
  bullet_list: "list",
  code_inline: "code",
  list_item: "item",
  variable: "text",
  html_block: "html",
  html_inline: "html"
};

function annotate(node, attributes) {
  for (const {
    name,
    value,
    type
  } of attributes) if (type === "attribute") node.attributes[name] = value;else if (type === "class") if (node.attributes.class) node.attributes.class[name] = value;else node.attributes.class = {
    [name]: value
  };
}

function handleAttrs(token, type) {
  switch (type) {
    case "heading":
      return {
        level: Number(token.tag.replace("h", ""))
      };

    case "list":
      return {
        ordered: token.type.startsWith("ordered")
      };

    case "link":
      {
        const attrs = Object.fromEntries(token.attrs);
        return {
          href: attrs.href
        };
      }

    case "image":
      {
        const attrs = Object.fromEntries(token.attrs);
        return {
          alt: token.content,
          src: attrs.src
        };
      }

    case "text":
    case "code":
    case "html":
      return {
        content: (token.meta || {}).variable || token.content
      };

    case "fence":
      {
        const [language] = token.info.split(" ", 1);
        return language === "" ? {
          content: token.content
        } : {
          content: token.content,
          language
        };
      }

    default:
      return {};
  }
}

function handleToken(token, nodes, file, inlineParent) {
  if (token.type === "frontmatter") {
    nodes[0].attributes.frontmatter = token.content;
    return;
  }

  if (token.hidden || token.type === "text" && token.content === "") return;
  const errors = token.errors || [];
  const parent = nodes[nodes.length - 1];
  const {
    tag,
    attributes,
    error: error2
  } = token.meta || {};

  if (token.type === "annotation") {
    if (inlineParent) return annotate(inlineParent, attributes);
    return parent.errors.push({
      id: "no-inline-annotations",
      level: "error",
      message: `Can't apply inline annotations to '${parent.type}'`
    });
  }

  let typeName = token.type.replace(/_(open|close)$/, "");
  if (mappings[typeName]) typeName = mappings[typeName];

  if (typeName === "error") {
    const {
      message,
      location
    } = error2;
    errors.push({
      id: "parse-error",
      level: "critical",
      message,
      location
    });
  }

  if (token.nesting < 0) {
    if (parent.type === typeName) {
      if (parent.lines && token.map) parent.lines.push(...token.map);
      return nodes.pop();
    }

    errors.push({
      id: "missing-opening",
      level: "critical",
      message: `Node '${typeName}' is missing opening`
    });
  }

  const attrs = handleAttrs(token, typeName);
  const node = new Node(typeName, attrs, void 0, tag || void 0);
  const {
    position = {}
  } = token;
  node.errors = errors;
  node.lines = token.map || parent.lines || [];
  node.location = {
    file,
    start: {
      line: node.lines[0],
      character: position.start
    },
    end: {
      line: node.lines[1],
      character: position.end
    }
  };
  if (inlineParent) node.inline = true;
  if (attributes && ["tag", "fence", "image"].includes(typeName)) annotate(node, attributes);
  parent.push(node);
  if (token.nesting > 0) nodes.push(node);
  if (!Array.isArray(token.children)) return;
  inlineParent = parent;
  nodes.push(node);
  const isLeafNode = typeName === "image";

  if (!isLeafNode) {
    for (const child of token.children) handleToken(child, nodes, file, inlineParent);
  }

  nodes.pop();
}

function parser(tokens, file) {
  const doc = new Node("document");
  const nodes = [doc];

  for (const token of tokens) handleToken(token, nodes, file);

  if (nodes.length > 1) for (const node of nodes.slice(1)) node.errors.push({
    id: "missing-closing",
    level: "critical",
    message: `Node '${node.tag || node.type}' is missing closing`
  });

  for (const transform3 of transforms_default) transform3(doc);

  return doc;
} // src/schema.ts


var schema_exports = {};

__export(schema_exports, {
  blockquote: () => blockquote,
  code: () => code,
  document: () => document$1,
  em: () => em,
  error: () => error,
  fence: () => fence2,
  hardbreak: () => hardbreak,
  heading: () => heading$1,
  hr: () => hr,
  html: () => html$1,
  image: () => image$1,
  inline: () => inline2,
  item: () => item,
  link: () => link$1,
  list: () => list,
  paragraph: () => paragraph,
  s: () => s,
  softbreak: () => softbreak,
  strong: () => strong,
  table: () => table,
  tbody: () => tbody,
  td: () => td,
  text: () => text,
  th: () => th,
  thead: () => thead,
  tr: () => tr
}); // src/ast/raw.ts


var Raw = class {
  constructor(content, inline3) {
    this.$$mdtype = "Raw";
    this.content = content;
    this.inline = inline3;
  }

}; // src/schema.ts

var document$1 = {
  render: "article",
  children: ["heading", "paragraph", "image", "table", "tag", "fence", "blockquote", "list", "hr"],
  attributes: {
    frontmatter: {
      render: false
    }
  }
};
var heading$1 = {
  children: ["inline"],
  attributes: {
    level: {
      type: Number,
      render: false,
      required: true
    }
  },

  transform(node, config) {
    return new Tag(`h${node.attributes["level"]}`, node.transformAttributes(config), node.transformChildren(config));
  }

};
var paragraph = {
  render: "p",
  children: ["inline"]
};
var image$1 = {
  render: "img",
  attributes: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    }
  }
};
var fence2 = {
  render: "pre",
  attributes: {
    content: {
      type: String,
      render: false,
      required: true
    },
    language: {
      type: String,
      render: "data-language"
    },
    process: {
      type: Boolean,
      render: false,
      default: true
    }
  },

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.children.length ? node.transformChildren(config) : [node.attributes.content];
    return new Tag("pre", attributes, children);
  }

};
var blockquote = {
  render: "blockquote",
  children: ["heading", "paragraph", "image", "table", "tag", "fence", "blockquote", "list", "hr"]
};
var item = {
  render: "li",
  children: ["inline", "heading", "paragraph", "image", "table", "tag", "fence", "blockquote", "list", "hr"]
};
var list = {
  children: ["item"],
  attributes: {
    ordered: {
      type: Boolean,
      render: false,
      required: true
    }
  },

  transform(node, config) {
    return new Tag(node.attributes.ordered ? "ol" : "ul", node.transformAttributes(config), node.transformChildren(config));
  }

};
var hr = {
  render: "hr"
};
var table = {
  render: "table"
};
var td = {
  render: "td",
  children: ["inline", "heading", "paragraph", "image", "table", "tag", "fence", "blockquote", "list", "hr"],
  attributes: {
    colspan: {
      type: Number
    },
    rowspan: {
      type: Number
    },
    align: {
      type: String
    }
  }
};
var th = {
  render: "th",
  attributes: {
    width: {
      type: Number
    },
    align: {
      type: String
    }
  }
};
var tr = {
  render: "tr",
  children: ["th", "td"]
};
var tbody = {
  render: "tbody",
  children: ["tr", "tag"]
};
var thead = {
  render: "thead",
  children: ["tr"]
};
var strong = {
  render: "strong",
  children: ["em", "s", "link", "code", "text", "tag"]
};
var em = {
  render: "em",
  children: ["strong", "s", "link", "code", "text", "tag"]
};
var s = {
  render: "s",
  children: ["strong", "em", "link", "code", "text", "tag"]
};
var inline2 = {
  children: ["strong", "em", "s", "code", "text", "tag", "link", "image", "hardbreak", "softbreak"]
};
var link$1 = {
  render: "a",
  children: ["strong", "em", "s", "code", "text", "tag"],
  attributes: {
    href: {
      type: String,
      required: true
    },
    title: {
      type: String
    }
  }
};
var code = {
  render: "code",
  attributes: {
    content: {
      type: String,
      render: false,
      required: true
    }
  },

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    return new Tag("code", attributes, [node.attributes.content]);
  }

};
var text = {
  attributes: {
    content: {
      type: String,
      required: true
    }
  },

  transform(node) {
    return node.attributes.content;
  }

};
var hardbreak = {
  render: "br"
};
var softbreak = {
  transform(_node, _config) {
    return " ";
  }

};
var html$1 = {
  attributes: {
    content: {
      type: String,
      required: true
    }
  },

  transform(node) {
    return node.attributes.content ? new Raw(node.attributes.content, node.inline) : null;
  }

};
var error = {}; // src/tags/conditional.ts

function truthy(value) {
  return value !== false && value !== void 0 && value !== null;
}

function renderConditions(node) {
  const conditions = [{
    condition: node.attributes.primary,
    children: []
  }];

  for (const child of node.children) {
    if (child.type === "tag" && child.tag === "else") conditions.push({
      condition: "primary" in child.attributes ? child.attributes.primary : true,
      children: []
    });else conditions[conditions.length - 1].children.push(child);
  }

  return conditions;
}

var tagIf = {
  attributes: {
    primary: {
      type: Object,
      render: false
    }
  },

  transform(node, config) {
    const conditions = renderConditions(node);

    for (const {
      condition,
      children
    } of conditions) if (truthy(condition)) return children.flatMap(child => child.transform(config));

    return [];
  }

};
var tagElse = {
  selfClosing: true,
  attributes: {
    primary: {
      type: Object,
      render: false
    }
  }
}; // src/tags/partial.ts

var partial = {
  selfClosing: true,
  attributes: {
    file: {
      type: String,
      render: false,
      required: true
    },
    variables: {
      type: Object,
      render: false
    }
  },

  transform(node, config) {
    const {
      partials = {}
    } = config;
    const {
      file,
      variables
    } = node.attributes;
    const partial2 = partials[file];
    if (!partial2) return null;
    const scopedConfig = { ...config,
      variables: { ...config.variables,
        ...variables,
        ["$$partial:filename"]: file
      }
    };

    const transformChildren = part => part.resolve(scopedConfig).transformChildren(scopedConfig);

    return Array.isArray(partial2) ? partial2.flatMap(transformChildren) : transformChildren(partial2);
  }

}; // src/tags/table.ts

var table2 = {
  children: ["table"]
}; // src/tags/index.ts

var tags_default = {
  if: tagIf,
  else: tagElse,
  partial,
  table: table2
}; // src/functions/index.ts

var and = {
  transform(parameters) {
    return Object.values(parameters).every(x => truthy(x));
  }

};
var or = {
  transform(parameters) {
    return Object.values(parameters).find(x => truthy(x)) !== void 0;
  }

};
var not = {
  parameters: {
    0: {
      required: true
    }
  },

  transform(parameters) {
    return !truthy(parameters[0]);
  }

};
var equals = {
  transform(parameters) {
    const values = Object.values(parameters);
    return values.every(v => v === values[0]);
  }

};
var debug = {
  transform(parameters) {
    return JSON.stringify(parameters[0], null, 2);
  }

};
var defaultFn = {
  transform(parameters) {
    return parameters[0] === void 0 ? parameters[1] : parameters[0];
  }

};
var functions_default = {
  and,
  or,
  not,
  equals,
  default: defaultFn,
  debug
}; // src/renderers/html.ts

var import_markdown_it = __toModule(require_markdown_it());

var {
  escapeHtml
} = (0, import_markdown_it.default)().utils;
var voidElements$1 = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

function render(node) {
  if (typeof node === "string") return escapeHtml(node);
  if (Array.isArray(node)) return node.map(render).join("");
  if (node === null || typeof node !== "object") return "";
  if (node.$$mdtype === "Raw") return node.content;
  const {
    name,
    attributes,
    children = []
  } = node;
  if (!name) return render(children);
  let output = `<${name}`;

  for (const [k, v] of Object.entries(attributes ?? {})) output += ` ${k}="${escapeHtml(String(v))}"`;

  output += ">";
  if (voidElements$1.has(name)) return output;
  if (children.length) output += render(children);
  output += `</${name}>`;
  return output;
} // src/renderers/react/shared.ts


function tagName(name, components) {
  return typeof name !== "string" ? "Fragment" : name[0] !== name[0].toUpperCase() ? name : components instanceof Function ? components(name) : components[name];
} // src/renderers/react/react.ts


function dynamic(node, React, {
  components = {}
} = {}, raw) {
  function deepRender(value) {
    if (value == null || typeof value !== "object") return value;
    if (Array.isArray(value)) return value.map(item2 => deepRender(item2));
    if (["Tag", "Raw"].includes(value.$$mdtype)) return render2(value);
    if (typeof value !== "object") return value;
    const output = {};

    for (const [k, v] of Object.entries(value)) output[k] = deepRender(v);

    return output;
  }

  function render2(node2) {
    if (Array.isArray(node2)) return React.createElement(React.Fragment, null, ...node2.map(render2));
    if (node2 === null || typeof node2 !== "object") return node2;
    if (node2.$$mdtype === "Raw") return raw?.(node2.content, node2.inline);
    const {
      name,
      attributes: {
        class: className,
        ...attrs
      } = {},
      children = []
    } = node2;
    if (className) attrs.className = className;
    return React.createElement(tagName(name, components), Object.keys(attrs).length == 0 ? null : deepRender(attrs), ...children.map(render2));
  }

  return render2(node);
} // src/renderers/react/static.ts


function reactStatic(node, raw) {
  function renderArray(children) {
    return children.map(render2).join(", ");
  }

  function deepRender(value) {
    if (value == null || typeof value !== "object") return JSON.stringify(value);
    if (Array.isArray(value)) return `[${value.map(item2 => deepRender(item2)).join(", ")}]`;
    if (["Tag", "Raw"].includes(value.$$mdtype)) return render2(value);
    if (typeof value !== "object") return JSON.stringify(value);
    const object = Object.entries(value).map(([k, v]) => [JSON.stringify(k), deepRender(v)].join(": ")).join(", ");
    return `{${object}}`;
  }

  function render2(node2) {
    if (Array.isArray(node2)) return `React.createElement(React.Fragment, null, ${renderArray(node2)})`;
    if (node2 === null || typeof node2 !== "object") return JSON.stringify(node2);
    if (node2.$$mdtype === "Raw") return raw?.(node2.content, node2.inline) ?? "";
    const {
      name,
      attributes: {
        class: className,
        ...attrs
      } = {},
      children = []
    } = node2;
    if (className) attrs.className = className;
    return `React.createElement(
    tagName(${JSON.stringify(name)}, components),
    ${Object.keys(attrs).length == 0 ? "null" : deepRender(attrs)},
    ${renderArray(children)})`;
  }

  return `
  (({components = {}} = {}) => {
    ${tagName}
    return ${render2(node)};
  })
`;
} // src/renderers/index.ts


var renderers_default = {
  html: render,
  react: dynamic,
  reactStatic
}; // src/validator.ts

var TypeMappings = {
  String,
  Number,
  Array,
  Object,
  Boolean
};

function validateType(type, value, config) {
  if (!type) return true;

  if (ast_default.isFunction(value) && config.validation?.validateFunctions) {
    const schema = config.functions?.[value.name];
    return !schema?.returns ? true : Array.isArray(schema.returns) ? schema.returns.find(t => t === type) !== void 0 : schema.returns === type;
  }

  if (ast_default.isAst(value)) return true;
  if (Array.isArray(type)) return type.some(t => validateType(t, value, config));
  if (typeof type === "string") type = TypeMappings[type];

  if (typeof type === "function") {
    const instance = new type();

    if (instance.validate) {
      return instance.validate(value, config);
    }
  }

  return value != null && value.constructor === type;
}

function typeToString(type) {
  if (typeof type === "string") return type;
  if (Array.isArray(type)) return type.map(typeToString).join(" | ");
  return type.name;
}

function validateFunction(fn, config) {
  const schema = config.functions?.[fn.name];
  const errors = [];
  if (!schema) return [{
    id: "function-undefined",
    level: "critical",
    message: `Undefined function '${fn.name}'`
  }];
  if (schema.validate) errors.push(...schema.validate(fn, config));

  if (schema.parameters) {
    for (const [key, value] of Object.entries(fn.parameters)) {
      const param = schema.parameters?.[key];

      if (!param) {
        errors.push({
          id: "parameter-undefined",
          level: "error",
          message: `Invalid parameter '${key}'`
        });
        continue;
      }

      if (ast_default.isAst(value) && !ast_default.isFunction(value)) continue;

      if (param.type) {
        const valid = validateType(param.type, value, config);

        if (valid === false) {
          errors.push({
            id: "parameter-type-invalid",
            level: "error",
            message: `Parameter '${key}' of '${fn.name}' must be type '${typeToString(param.type)}'`
          });
        } else if (Array.isArray(valid)) {
          errors.push(...valid);
        }
      }
    }
  }

  for (const [key, {
    required
  }] of Object.entries(schema.parameters ?? {})) if (required && fn.parameters[key] === void 0) errors.push({
    id: "parameter-missing-required",
    level: "error",
    message: `Missing required parameter '${key}'`
  });

  return errors;
}

function validate(node, config) {
  const schema = node.findSchema(config);
  const errors = [...(node.errors || [])];

  if (!schema) {
    errors.push({
      id: node.tag ? "tag-undefined" : "node-undefined",
      level: "critical",
      message: node.tag ? `Undefined tag '${node.tag}'` : `Undefined node '${node.type}'`
    });
    return errors;
  }

  if (schema.selfClosing && node.children.length > 0) errors.push({
    id: "tag-selfclosing-has-children",
    level: "critical",
    message: `Tag '${node.tag}' should be self-closing`
  });
  const attributes = { ...globalAttributes,
    ...schema.attributes
  };
  if (schema.validate) errors.push(...schema.validate(node, config));

  for (let [key, value] of Object.entries(node.attributes)) {
    const attrib = attributes[key];

    if (!attrib) {
      errors.push({
        id: "attribute-undefined",
        level: "error",
        message: `Invalid attribute '${key}'`
      });
      continue;
    }

    let {
      type,
      matches,
      errorLevel
    } = attrib;

    if (ast_default.isAst(value)) {
      if (ast_default.isFunction(value) && config.validation?.validateFunctions) errors.push(...validateFunction(value, config));else continue;
    }

    value = value;
    if (key === "id" && value.match(/^[0-9]/)) errors.push({
      id: "attribute-value-invalid",
      level: "error",
      message: "The ID attribute must not start with a number"
    });

    if (type) {
      const valid = validateType(type, value, config);

      if (valid === false) {
        errors.push({
          id: "attribute-type-invalid",
          level: errorLevel || "error",
          message: `Attribute '${key}' must be type '${typeToString(type)}'`
        });
      }

      if (Array.isArray(valid)) {
        errors.push(...valid);
      }
    }

    if (typeof matches === "function") matches = matches(config);
    if (Array.isArray(matches) && !matches.includes(value)) errors.push({
      id: "attribute-value-invalid",
      level: errorLevel || "error",
      message: `Attribute '${key}' must match one of ${JSON.stringify(matches)}`
    });
    if (matches instanceof RegExp && !matches.test(value)) errors.push({
      id: "attribute-value-invalid",
      level: errorLevel || "error",
      message: `Attribute '${key}' must match ${matches}`
    });
  }

  for (const [key, {
    required
  }] of Object.entries(attributes)) if (required && node.attributes[key] === void 0) errors.push({
    id: "attribute-missing-required",
    level: "error",
    message: `Missing required attribute '${key}'`
  });

  for (const {
    type
  } of node.children) {
    if (schema.children && type !== "error" && !schema.children.includes(type)) errors.push({
      id: "child-invalid",
      level: "warning",
      message: `Can't nest '${type}' in '${node.tag || node.type}'`
    });
  }

  return errors;
} // index.ts


var tokenizer = new Tokenizer$2();

function mergeConfig(config = {}) {
  return { ...config,
    tags: { ...tags_default,
      ...config.tags
    },
    nodes: { ...schema_exports,
      ...config.nodes
    },
    functions: { ...functions_default,
      ...config.functions
    }
  };
}

function parse3(content, file) {
  if (typeof content === "string") content = tokenizer.tokenize(content);
  return parser(content, file);
}

function resolve2(content, config) {
  if (Array.isArray(content)) return content.flatMap(child => child.resolve(config));
  return content.resolve(config);
}

function transform2(nodes, options) {
  const config = mergeConfig(options);
  const content = resolve2(nodes, config);
  if (Array.isArray(content)) return content.flatMap(child => child.transform(config));
  return content.transform(config);
}

function validate2(content, options) {
  const config = mergeConfig(options);
  const output = [];

  for (const node of [content, ...content.walk()]) {
    const {
      type,
      lines,
      location
    } = node;
    const errors = validate(node, config);

    for (const error2 of errors) output.push({
      type,
      lines,
      location,
      error: error2
    });
  }

  return output;
}

function createElement(name, attributes = {}, ...children) {
  return {
    name,
    attributes,
    children
  };
}

var markdoc_default = {
  nodes: schema_exports,
  tags: tags_default,
  functions: functions_default,
  renderers: renderers_default,
  transforms: transforms_default,
  Ast: ast_default,
  Tag,
  Raw,
  Tokenizer: Tokenizer$2,
  parseTags,
  transformer: transformer_default,
  validator: validate,
  parse: parse3,
  transform: transform2,
  validate: validate2,
  createElement,
  truthy
};

function generateID(children, attributes) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }

  const bottomChildren = children.map(child => child.children ? child.children : child).flat();
  return bottomChildren.filter(child => typeof child === "string").join(" ").replace(/[=?!><:;,+#^|$&~"*@\.%/]/g, "").replace(/\s+/g, "-").toLowerCase();
}

const heading = {
  children: ["inline"],
  attributes: {
    id: {
      type: String
    },
    level: {
      type: Number,
      required: true,
      default: 1
    }
  },

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);
    return new Tag(`h${node.attributes["level"]}`, { ...attributes,
      id
    }, children);
  }

};

const footnoteRef = {
  attributes: {
    id: {
      type: String,
      render: true,
      required: true
    },
    href: {
      type: String,
      render: true,
      required: true
    },
    label: {
      type: String,
      render: false,
      required: true
    }
  },

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const link = new Tag("a", attributes, [`${node.attributes.label}`]);
    return new Tag(`sup`, {
      class: "footnote-ref"
    }, [link]);
  }

};

const footnoteItem = {
  attributes: {
    id: {
      type: String,
      render: true,
      required: true
    },
    href: {
      type: String,
      render: false,
      required: true
    }
  },

  transform(node, config) {
    node.attributes.class = `footnote-item`;
    const anchor = new ast_default.Node("link", {
      class: "footnote-anchor",
      href: node.attributes.href
    }, [new ast_default.Node("text", {
      content: "↩"
    })]);
    node.push(anchor);
    return new Tag("li", node.transformAttributes(config), node.transformChildren(config));
  }

};

function checkIfExternal(attributes) {
  const href = attributes.href;

  if (href.includes("urbit.org") || href.startsWith("/") || href.startsWith("#") || href.startsWith("?")) {
    return "_self";
  } else {
    return "_blank";
  }
}

const link = {
  render: "NextLink",
  children: ["strong", "em", "s", "code", "text", "tag"],
  attributes: {
    href: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    target: {
      type: String
    }
  },

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const target = checkIfExternal(attributes);
    return new Tag("NextLink", { ...attributes,
      target
    }, children);
  }

};

const image = {
  render: "span",
  attributes: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    title: {
      type: String
    }
  },

  transform(node, config) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const imageTag = new Tag("img", attributes, children);
    return new Tag("span", {
      id: "figure"
    }, [imageTag]);
  }

};

const sup = {
  render: "superscript",
  children: ["strong", "em", "s", "code", "text", "tag"],
  attributes: {},

  transform(node, config) {
    return new Tag(`sup`, node.transformAttributes(config), node.transformChildren(config));
  }

};

const TabContext = /*#__PURE__*/React$2.createContext();

const Tabs = ({
  labels,
  children
}) => {
  const [currentTab, setCurrentTab] = React$2.useState(labels[0]);
  return /*#__PURE__*/React$2.createElement(TabContext.Provider, {
    value: currentTab
  }, /*#__PURE__*/React$2.createElement("ul", {
    className: "flex items-center display cursor-pointer space-x-4"
  }, labels.map(label => /*#__PURE__*/React$2.createElement("li", {
    className: "block bg-wall-100 tab rounded-xl " + (currentTab === label ? "font-semibold" : ""),
    key: label,
    onClick: () => setCurrentTab(label)
  }, label))), children);
};

const Tab = ({
  label,
  children
}) => {
  const currentTab = React$2.useContext(TabContext);

  if (label !== currentTab) {
    return null;
  }

  return children;
};

const Button = ({
  label,
  link,
  color
}) => {
  return /*#__PURE__*/React$2.createElement(Link, {
    passHref: true,
    href: link
  }, /*#__PURE__*/React$2.createElement("a", {
    className: "button-lg max-w-fit " + color
  }, label));
};

const Callout = ({
  title,
  children
}) => {
  return /*#__PURE__*/React$2.createElement("div", {
    className: "bg-wall-100 rounded-xl display p-7 flex flex-col space-y-4"
  }, title && /*#__PURE__*/React$2.createElement("h2", null, title), children);
};

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */

/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */
var Prism = function () {
  // Private helper vars
  var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var uniqueId = 0; // The grammar object for plaintext

  var plainTextGrammar = {};
  var _ = {
    /**
     * A namespace for utility methods.
     *
     * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
     * change or disappear at any time.
     *
     * @namespace
     * @memberof Prism
     */
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
        }
      },

      /**
       * Returns the name of the type of the given value.
       *
       * @param {any} o
       * @returns {string}
       * @example
       * type(null)      === 'Null'
       * type(undefined) === 'Undefined'
       * type(123)       === 'Number'
       * type('foo')     === 'String'
       * type(true)      === 'Boolean'
       * type([1, 2])    === 'Array'
       * type({})        === 'Object'
       * type(String)    === 'Function'
       * type(/abc+/)    === 'RegExp'
       */
      type: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },

      /**
       * Returns a unique number for the given object. Later calls will still return the same number.
       *
       * @param {Object} obj
       * @returns {number}
       */
      objId: function (obj) {
        if (!obj['__id']) {
          Object.defineProperty(obj, '__id', {
            value: ++uniqueId
          });
        }

        return obj['__id'];
      },

      /**
       * Creates a deep clone of the given object.
       *
       * The main intended use of this function is to clone language definitions.
       *
       * @param {T} o
       * @param {Record<number, any>} [visited]
       * @returns {T}
       * @template T
       */
      clone: function deepClone(o, visited) {
        visited = visited || {};
        var clone;
        var id;

        switch (_.util.type(o)) {
          case 'Object':
            id = _.util.objId(o);

            if (visited[id]) {
              return visited[id];
            }

            clone =
            /** @type {Record<string, any>} */
            {};
            visited[id] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }

            return (
              /** @type {any} */
              clone
            );

          case 'Array':
            id = _.util.objId(o);

            if (visited[id]) {
              return visited[id];
            }

            clone = [];
            visited[id] = clone;

            /** @type {Array} */

            /** @type {any} */
            o.forEach(function (v, i) {
              clone[i] = deepClone(v, visited);
            });
            return (
              /** @type {any} */
              clone
            );

          default:
            return o;
        }
      },

      /**
       * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
       *
       * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
       *
       * @param {Element} element
       * @returns {string}
       */
      getLanguage: function (element) {
        while (element) {
          var m = lang.exec(element.className);

          if (m) {
            return m[1].toLowerCase();
          }

          element = element.parentElement;
        }

        return 'none';
      },

      /**
       * Sets the Prism `language-xxxx` class of the given element.
       *
       * @param {Element} element
       * @param {string} language
       * @returns {void}
       */
      setLanguage: function (element, language) {
        // remove all `language-xxxx` classes
        // (this might leave behind a leading space)
        element.className = element.className.replace(RegExp(lang, 'gi'), ''); // add the new `language-xxxx` class
        // (using `classList` will automatically clean up spaces for us)

        element.classList.add('language-' + language);
      },

      /**
       * Returns whether a given class is active for `element`.
       *
       * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
       * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
       * given class is just the given class with a `no-` prefix.
       *
       * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
       * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
       * ancestors have the given class or the negated version of it, then the default activation will be returned.
       *
       * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
       * version of it, the class is considered active.
       *
       * @param {Element} element
       * @param {string} className
       * @param {boolean} [defaultActivation=false]
       * @returns {boolean}
       */
      isActive: function (element, className, defaultActivation) {
        var no = 'no-' + className;

        while (element) {
          var classList = element.classList;

          if (classList.contains(className)) {
            return true;
          }

          if (classList.contains(no)) {
            return false;
          }

          element = element.parentElement;
        }

        return !!defaultActivation;
      }
    },

    /**
     * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
     *
     * @namespace
     * @memberof Prism
     * @public
     */
    languages: {
      /**
       * The grammar for plain, unformatted text.
       */
      plain: plainTextGrammar,
      plaintext: plainTextGrammar,
      text: plainTextGrammar,
      txt: plainTextGrammar,

      /**
       * Creates a deep copy of the language with the given id and appends the given tokens.
       *
       * If a token in `redef` also appears in the copied language, then the existing token in the copied language
       * will be overwritten at its original position.
       *
       * ## Best practices
       *
       * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
       * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
       * understand the language definition because, normally, the order of tokens matters in Prism grammars.
       *
       * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
       * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
       *
       * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
       * @param {Grammar} redef The new tokens to append.
       * @returns {Grammar} The new language created.
       * @public
       * @example
       * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
       *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
       *     // at its original position
       *     'comment': { ... },
       *     // CSS doesn't have a 'color' token, so this token will be appended
       *     'color': /\b(?:red|green|blue)\b/
       * });
       */
      extend: function (id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Inserts tokens _before_ another token in a language definition or any other grammar.
       *
       * ## Usage
       *
       * This helper method makes it easy to modify existing languages. For example, the CSS language definition
       * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
       * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
       * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
       * this:
       *
       * ```js
       * Prism.languages.markup.style = {
       *     // token
       * };
       * ```
       *
       * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
       * before existing tokens. For the CSS example above, you would use it like this:
       *
       * ```js
       * Prism.languages.insertBefore('markup', 'cdata', {
       *     'style': {
       *         // token
       *     }
       * });
       * ```
       *
       * ## Special cases
       *
       * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
       * will be ignored.
       *
       * This behavior can be used to insert tokens after `before`:
       *
       * ```js
       * Prism.languages.insertBefore('markup', 'comment', {
       *     'comment': Prism.languages.markup.comment,
       *     // tokens after 'comment'
       * });
       * ```
       *
       * ## Limitations
       *
       * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
       * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
       * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
       * deleting properties which is necessary to insert at arbitrary positions.
       *
       * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
       * Instead, it will create a new object and replace all references to the target object with the new one. This
       * can be done without temporarily deleting properties, so the iteration order is well-defined.
       *
       * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
       * you hold the target object in a variable, then the value of the variable will not change.
       *
       * ```js
       * var oldMarkup = Prism.languages.markup;
       * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
       *
       * assert(oldMarkup !== Prism.languages.markup);
       * assert(newMarkup === Prism.languages.markup);
       * ```
       *
       * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
       * object to be modified.
       * @param {string} before The key to insert before.
       * @param {Grammar} insert An object containing the key-value pairs to be inserted.
       * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
       * object to be modified.
       *
       * Defaults to `Prism.languages`.
       * @returns {Grammar} The new grammar object.
       * @public
       */
      insertBefore: function (inside, before, insert, root) {
        root = root ||
        /** @type {any} */
        _.languages;
        var grammar = root[inside];
        /** @type {Grammar} */

        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            } // Do not insert token which also occur in insert. See #1525


            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }

        var old = root[inside];
        root[inside] = ret; // Update references in other language definitions

        _.languages.DFS(_.languages, function (key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });

        return ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);
            var property = o[i];

            var propertyType = _.util.type(property);

            if (propertyType === 'Object' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === 'Array' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},

    /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
     * and the language definitions to use, and returns a string with the HTML produced.
     *
     * The following hooks will be run:
     * 1. `before-tokenize`
     * 2. `after-tokenize`
     * 3. `wrap`: On each {@link Token}.
     *
     * @param {string} text A string with the code to be highlighted.
     * @param {Grammar} grammar An object containing the tokens to use.
     *
     * Usually a language definition like `Prism.languages.markup`.
     * @param {string} language The name of the language definition passed to `grammar`.
     * @returns {string} The highlighted HTML.
     * @memberof Prism
     * @public
     * @example
     * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
     */
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };

      _.hooks.run('before-tokenize', env);

      env.tokens = _.tokenize(env.code, env.grammar);

      _.hooks.run('after-tokenize', env);

      return Token.stringify(_.util.encode(env.tokens), env.language);
    },

    /**
     * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
     * and the language definitions to use, and returns an array with the tokenized code.
     *
     * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
     *
     * This method could be useful in other contexts as well, as a very crude parser.
     *
     * @param {string} text A string with the code to be highlighted.
     * @param {Grammar} grammar An object containing the tokens to use.
     *
     * Usually a language definition like `Prism.languages.markup`.
     * @returns {TokenStream} An array of strings and tokens, a token stream.
     * @memberof Prism
     * @public
     * @example
     * let code = `var foo = 0;`;
     * let tokens = Prism.tokenize(code, Prism.languages.javascript);
     * tokens.forEach(token => {
     *     if (token instanceof Prism.Token && token.type === 'number') {
     *         console.log(`Found numeric literal: ${token.content}`);
     *     }
     * });
     */
    tokenize: function (text, grammar) {
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);
      matchGrammar(text, tokenList, grammar, tokenList.head, 0);
      return toArray(tokenList);
    },

    /**
     * @namespace
     * @memberof Prism
     * @public
     */
    hooks: {
      all: {},

      /**
       * Adds the given callback to the list of callbacks for the given hook.
       *
       * The callback will be invoked when the hook it is registered for is run.
       * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
       *
       * One callback function can be registered to multiple hooks and the same hook multiple times.
       *
       * @param {string} name The name of the hook.
       * @param {HookCallback} callback The callback function which is given environment variables.
       * @public
       */
      add: function (name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },

      /**
       * Runs a hook invoking all registered callbacks with the given environment variables.
       *
       * Callbacks will be invoked synchronously and in the order in which they were registered.
       *
       * @param {string} name The name of the hook.
       * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
       * @public
       */
      run: function (name, env) {
        var callbacks = _.hooks.all[name];

        if (!callbacks || !callbacks.length) {
          return;
        }

        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    },
    Token: Token
  }; // Typescript note:
  // The following can be used to import the Token type in JSDoc:
  //
  //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

  /**
   * Creates a new token.
   *
   * @param {string} type See {@link Token#type type}
   * @param {string | TokenStream} content See {@link Token#content content}
   * @param {string|string[]} [alias] The alias(es) of the token.
   * @param {string} [matchedStr=""] A copy of the full string this token was created from.
   * @class
   * @global
   * @public
   */

  function Token(type, content, alias, matchedStr) {
    /**
     * The type of the token.
     *
     * This is usually the key of a pattern in a {@link Grammar}.
     *
     * @type {string}
     * @see GrammarToken
     * @public
     */
    this.type = type;
    /**
     * The strings or tokens contained by this token.
     *
     * This will be a token stream if the pattern matched also defined an `inside` grammar.
     *
     * @type {string | TokenStream}
     * @public
     */

    this.content = content;
    /**
     * The alias(es) of the token.
     *
     * @type {string|string[]}
     * @see GrammarToken
     * @public
     */

    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || '').length | 0;
  }
  /**
   * A token stream is an array of strings and {@link Token Token} objects.
   *
   * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
   * them.
   *
   * 1. No adjacent strings.
   * 2. No empty strings.
   *
   *    The only exception here is the token stream that only contains the empty string and nothing else.
   *
   * @typedef {Array<string | Token>} TokenStream
   * @global
   * @public
   */

  /**
   * Converts the given token or token stream to an HTML representation.
   *
   * The following hooks will be run:
   * 1. `wrap`: On each {@link Token}.
   *
   * @param {string | Token | TokenStream} o The token or token stream to be converted.
   * @param {string} language The name of current language.
   * @returns {string} The HTML representation of the token or token stream.
   * @memberof Token
   * @static
   */


  Token.stringify = function stringify(o, language) {
    if (typeof o == 'string') {
      return o;
    }

    if (Array.isArray(o)) {
      var s = '';
      o.forEach(function (e) {
        s += stringify(e, language);
      });
      return s;
    }

    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: 'span',
      classes: ['token', o.type],
      attributes: {},
      language: language
    };
    var aliases = o.alias;

    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }

    _.hooks.run('wrap', env);

    var attributes = '';

    for (var name in env.attributes) {
      attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
    }

    return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
  };
  /**
   * @param {RegExp} pattern
   * @param {number} pos
   * @param {string} text
   * @param {boolean} lookbehind
   * @returns {RegExpExecArray | null}
   */


  function matchPattern(pattern, pos, text, lookbehind) {
    pattern.lastIndex = pos;
    var match = pattern.exec(text);

    if (match && lookbehind && match[1]) {
      // change the match to remove the text matched by the Prism lookbehind group
      var lookbehindLength = match[1].length;
      match.index += lookbehindLength;
      match[0] = match[0].slice(lookbehindLength);
    }

    return match;
  }
  /**
   * @param {string} text
   * @param {LinkedList<string | Token>} tokenList
   * @param {any} grammar
   * @param {LinkedListNode<string | Token>} startNode
   * @param {number} startPos
   * @param {RematchOptions} [rematch]
   * @returns {void}
   * @private
   *
   * @typedef RematchOptions
   * @property {string} cause
   * @property {number} reach
   */


  function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }

      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];

      for (var j = 0; j < patterns.length; ++j) {
        if (rematch && rematch.cause == token + ',' + j) {
          return;
        }

        var patternObj = patterns[j];
        var inside = patternObj.inside;
        var lookbehind = !!patternObj.lookbehind;
        var greedy = !!patternObj.greedy;
        var alias = patternObj.alias;

        if (greedy && !patternObj.pattern.global) {
          // Without the global flag, lastIndex won't work
          var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
          patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
        }
        /** @type {RegExp} */


        var pattern = patternObj.pattern || patternObj;

        for ( // iterate the token list and keep track of the current token/string position
        var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
          if (rematch && pos >= rematch.reach) {
            break;
          }

          var str = currentNode.value;

          if (tokenList.length > text.length) {
            // Something went terribly wrong, ABORT, ABORT!
            return;
          }

          if (str instanceof Token) {
            continue;
          }

          var removeCount = 1; // this is the to parameter of removeBetween

          var match;

          if (greedy) {
            match = matchPattern(pattern, pos, text, lookbehind);

            if (!match || match.index >= text.length) {
              break;
            }

            var from = match.index;
            var to = match.index + match[0].length;
            var p = pos; // find the node that contains the match

            p += currentNode.value.length;

            while (from >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            } // adjust pos (and p)


            p -= currentNode.value.length;
            pos = p; // the current node is a Token, then the match starts inside another Token, which is invalid

            if (currentNode.value instanceof Token) {
              continue;
            } // find the last node which is affected by this match


            for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next) {
              removeCount++;
              p += k.value.length;
            }

            removeCount--; // replace with the new match

            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            match = matchPattern(pattern, 0, str, lookbehind);

            if (!match) {
              continue;
            }
          } // eslint-disable-next-line no-redeclare


          var from = match.index;
          var matchStr = match[0];
          var before = str.slice(0, from);
          var after = str.slice(from + matchStr.length);
          var reach = pos + str.length;

          if (rematch && reach > rematch.reach) {
            rematch.reach = reach;
          }

          var removeFrom = currentNode.prev;

          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }

          removeRange(tokenList, removeFrom, removeCount);
          var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
          currentNode = addAfter(tokenList, removeFrom, wrapped);

          if (after) {
            addAfter(tokenList, currentNode, after);
          }

          if (removeCount > 1) {
            // at least one Token object was removed, so we have to do some rematching
            // this can only happen if the current pattern is greedy

            /** @type {RematchOptions} */
            var nestedRematch = {
              cause: token + ',' + j,
              reach: reach
            };
            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch); // the reach might have been extended because of the rematching

            if (rematch && nestedRematch.reach > rematch.reach) {
              rematch.reach = nestedRematch.reach;
            }
          }
        }
      }
    }
  }
  /**
   * @typedef LinkedListNode
   * @property {T} value
   * @property {LinkedListNode<T> | null} prev The previous node.
   * @property {LinkedListNode<T> | null} next The next node.
   * @template T
   * @private
   */

  /**
   * @template T
   * @private
   */


  function LinkedList() {
    /** @type {LinkedListNode<T>} */
    var head = {
      value: null,
      prev: null,
      next: null
    };
    /** @type {LinkedListNode<T>} */

    var tail = {
      value: null,
      prev: head,
      next: null
    };
    head.next = tail;
    /** @type {LinkedListNode<T>} */

    this.head = head;
    /** @type {LinkedListNode<T>} */

    this.tail = tail;
    this.length = 0;
  }
  /**
   * Adds a new node with the given value to the list.
   *
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {T} value
   * @returns {LinkedListNode<T>} The added node.
   * @template T
   */


  function addAfter(list, node, value) {
    // assumes that node != list.tail && values.length >= 0
    var next = node.next;
    var newNode = {
      value: value,
      prev: node,
      next: next
    };
    node.next = newNode;
    next.prev = newNode;
    list.length++;
    return newNode;
  }
  /**
   * Removes `count` nodes after the given node. The given node will not be removed.
   *
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {number} count
   * @template T
   */


  function removeRange(list, node, count) {
    var next = node.next;

    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }

    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  /**
   * @param {LinkedList<T>} list
   * @returns {T[]}
   * @template T
   */


  function toArray(list) {
    var array = [];
    var node = list.head.next;

    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }

    return array;
  }

  return _;
}();

var prism = Prism;
Prism.default = Prism;
/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

prism.languages.markup = {
  'comment': {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  'prolog': {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below

      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, /"|'/]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = prism.languages.markup['entity'];
prism.languages.markup['doctype'].inside['internal-subset'].inside = prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Object.defineProperty(prism.languages.markup.tag, 'addAttribute', {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function (attrName, lang) {
    prism.languages.markup.tag.inside['special-attr'].push({
      pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
      lookbehind: true,
      inside: {
        'attr-name': /^[^\s=]+/,
        'attr-value': {
          pattern: /=[\s\S]+/,
          inside: {
            'value': {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, 'language-' + lang],
              inside: prism.languages[lang]
            },
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend('markup', {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: 'punctuation',
    // this looks reasonably well in all themes
    inside: null // see below

  };
  var insideString = {
    'bash': commandAfterHeredoc,
    'environment': {
      pattern: RegExp('\\$' + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp('(\\{)' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        'bash': commandAfterHeredoc
      }
    }, // “Normal” string
    {
      // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        'entity': insideString.entity
      }
    }],
    'environment': {
      pattern: RegExp('\\$?' + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism.languages.bash;
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(prism);
/* "prismjs/components/prism-clike" */


prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  'boolean': /\b(?:false|true)\b/,
  'function': /\b\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

prism.languages.c = prism.languages.extend('clike', {
  'comment': {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'string': {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  'function': /\b[a-z_]\w*(?=\s*\()/i,
  'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore('c', 'string', {
  'char': {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: 'property',
    inside: {
      'string': [{
        // highlight the path of the include statement as a string
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c['string']],
      'char': prism.languages.c['char'],
      'comment': prism.languages.c['comment'],
      'macro-name': [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: 'function'
      }],
      // highlight macro directives as keywords
      'directive': {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: 'keyword'
      },
      'directive-hash': /^#/,
      'punctuation': /##|\\(?=[\r\n])/,
      'expression': {
        pattern: /\S[\s\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore('c', 'function', {
  // highlight predefined macros as constants
  'constant': /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

(function (Prism) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
    return keyword.source;
  });
  Prism.languages.cpp = Prism.languages.extend('c', {
    'class-name': [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, // This is intended to capture the class name of method implementations like:
    //   void foo::bar() const {}
    // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
    // it starts with an uppercase letter. This approximation should give decent results.
    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, // This will capture the class name before destructors like:
    //   Foo::~Foo() {}
    /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, // This also intends to capture the class name of method implementations but here the class has template
    // parameters, so it can't be a namespace (until C++ adds generic namespaces).
    /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    'keyword': keyword,
    'number': {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    'operator': />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    'boolean': /\b(?:false|true)\b/
  });
  Prism.languages.insertBefore('cpp', 'string', {
    'module': {
      // https://en.cppreference.com/w/cpp/language/modules
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + '(?:' + // header-name
      /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + '|' + // module name or partition or both
      /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
        return modName;
      }) + ')'),
      lookbehind: true,
      greedy: true,
      inside: {
        'string': /^[<"][\s\S]+/,
        'operator': /:/,
        'punctuation': /\./
      }
    },
    'raw-string': {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: 'string',
      greedy: true
    }
  });
  Prism.languages.insertBefore('cpp', 'keyword', {
    'generic-function': {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        'function': /^\w+/,
        'generic': {
          pattern: /<[\s\S]+/,
          alias: 'class-name',
          inside: Prism.languages.cpp
        }
      }
    }
  });
  Prism.languages.insertBefore('cpp', 'operator', {
    'double-colon': {
      pattern: /::/,
      alias: 'punctuation'
    }
  });
  Prism.languages.insertBefore('cpp', 'class-name', {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    'base-clause': {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism.languages.extend('cpp', {})
    }
  });
  Prism.languages.insertBefore('inside', 'double-colon', {
    // All untokenized words that are not namespaces should be class names
    'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism.languages.cpp['base-clause']);
})(prism);
/* "prismjs/components/prism-css" */


(function (Prism) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        } // See rest below

      }
    },
    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': {
      pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
      lookbehind: true
    },
    'string': {
      pattern: string,
      greedy: true
    },
    'property': {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    'important': /!important\b/i,
    'function': {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    markup.tag.addAttribute('style', 'css');
  }
})(prism);
/* "prismjs/components/prism-css-extras" */


(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      'class': /\.[-\w]+/,
      'id': /#[-\w]+/,
      'attribute': {
        pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
        greedy: true,
        inside: {
          'punctuation': /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          'namespace': {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              'punctuation': /\|$/
            }
          },
          'attr-name': {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          'attr-value': [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          'operator': /[|~*^$]?=/
        }
      },
      'n-th': [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          'number': /[\dn]+/,
          'operator': /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      'combinator': />|\+|~|\|\|/,
      // the `tag` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      'punctuation': /[(),]/
    }
  };
  Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;
  Prism.languages.insertBefore('css', 'property', {
    'variable': {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism.languages.insertBefore('css', 'function', {
    'operator': {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    'hexcode': {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: 'color'
    },
    'color': [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    // it's important that there is no boundary assertion after the hex digits
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'number': number
  });
})(prism);
/* "prismjs/components/prism-javascript" */


prism.languages.javascript = prism.languages.extend('clike', {
  'class-name': [prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'number': {
    pattern: RegExp(/(^|[^\w$])/.source + '(?:' + ( // constant
    /NaN|Infinity/.source + '|' + // binary integer
    /0[bB][01]+(?:_[01]+)*n?/.source + '|' + // octal integer
    /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' + // hexadecimal integer
    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' + // decimal bigint
    /\d+(?:_\d+)*n/.source + '|' + // decimal number (integer or float) but no bigint
    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
    lookbehind: true
  },
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: prism.languages.regex
      },
      'regex-delimiter': /^\/|\/$/,
      'regex-flags': /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
prism.languages.insertBefore('javascript', 'string', {
  'hashbang': {
    pattern: /^#!.*/,
    greedy: true,
    alias: 'comment'
  },
  'template-string': {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  },
  'string-property': {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: 'property'
  }
});
prism.languages.insertBefore('javascript', 'operator', {
  'literal-property': {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: 'property'
  }
});

if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined('script', 'javascript'); // add attribute support for all DOM events.
  // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events

  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}

prism.languages.js = prism.languages.javascript;
/* "prismjs/components/prism-coffeescript" */

(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/;
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        'script': {
          pattern: /[\s\S]+/,
          alias: 'language-javascript',
          inside: Prism.languages.javascript
        }
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(prism);
/* "prismjs/components/prism-yaml" */


(function (Prism) {
  // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
  // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
  var anchorOrAlias = /[*&][^\s[\]{},]+/; // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property

  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/; // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)

  var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|' + anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)'; // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
  // This is a simplified version that doesn't support "#" and multiline keys
  // All these long scarry character classes are simplified versions of YAML's characters

  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  /**
   *
   * @param {string} value
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function createValuePattern(value, flags) {
    flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag

    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }

  Prism.languages.yaml = {
    'scalar': {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: 'string'
    },
    'comment': /#.*/,
    'key': {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return '(?:' + plainKey + '|' + string + ')';
      })),
      lookbehind: true,
      greedy: true,
      alias: 'atrule'
    },
    'directive': {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    'datetime': {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: 'number'
    },
    'boolean': {
      pattern: createValuePattern(/false|true/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'null': {
      pattern: createValuePattern(/null|~/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'string': {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    'number': {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
      lookbehind: true
    },
    'tag': tag,
    'important': anchorOrAlias,
    'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism.languages.yml = Prism.languages.yaml;
})(prism);
/* "prismjs/components/prism-markdown" */


(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @returns {RegExp}
   */

  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'front-matter-block': {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        'punctuation': /^---|---$/,
        'front-matter': {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ['yaml', 'language-yaml'],
          inside: Prism.languages.yaml
        }
      }
    },
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'code-snippet': {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ['code', 'keyword']
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'operator': /^!/,
        'content': {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'variable': {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'url': {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        'string': {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          // do some replacements to support C++, C#, and F#
          var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'); // only use the first word

          lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
          var alias = 'language-' + lang; // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi');
  /**
   * A list of known entity names.
   *
   * This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
   *
   * @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
   */

  var KNOWN_ENTITY_NAMES = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"'
  }; // IE 11 doesn't support `String.fromCodePoint`

  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  /**
   * Returns the text content of a given HTML source code string.
   *
   * @param {string} html
   * @returns {string}
   */

  function textContent(html) {
    // remove all tags
    var text = html.replace(tagPattern, ''); // decode known entities

    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
      code = code.toLowerCase();

      if (code[0] === '#') {
        var value;

        if (code[1] === 'x') {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }

        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];

        if (known) {
          return known;
        } // unable to decode


        return m;
      }
    });
    return text;
  }

  Prism.languages.md = Prism.languages.markdown;
})(prism);
/* "prismjs/components/prism-graphql" */


prism.languages.graphql = {
  'comment': /#.*/,
  'description': {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  'string': {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:false|true)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'atom-input': {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: 'class-name'
  },
  'scalar': /\b(?:Boolean|Float|ID|Int|String)\b/,
  'constant': /\b[A-Z][A-Z_\d]*\b/,
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-mutation': {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-query': {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  'operator': /[!=|&]|\.{3}/,
  'property-query': /\w+(?=\s*\()/,
  'object': /\w+(?=\s*\{)/,
  'punctuation': /[!(){}\[\]:=,]/,
  'property': /\w+/
};
prism.hooks.add('after-tokenize', function afterTokenizeGraphql(env) {
  if (env.language !== 'graphql') {
    return;
  }
  /**
   * get the graphql token stream that we want to customize
   *
   * @typedef {InstanceType<import("./prism-core")["Token"]>} Token
   * @type {Token[]}
   */


  var validTokens = env.tokens.filter(function (token) {
    return typeof token !== 'string' && token.type !== 'comment' && token.type !== 'scalar';
  });
  var currentIndex = 0;
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {number} offset
   * @returns {Token | undefined}
   */

  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }
  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {readonly string[]} types
   * @param {number} [offset=0]
   * @returns {boolean}
   */


  function isTokenType(types, offset) {
    offset = offset || 0;

    for (var i = 0; i < types.length; i++) {
      var token = getToken(i + offset);

      if (!token || token.type !== types[i]) {
        return false;
      }
    }

    return true;
  }
  /**
   * Returns the index of the closing bracket to an opening bracket.
   *
   * It is assumed that `token[currentIndex - 1]` is an opening bracket.
   *
   * If no closing bracket could be found, `-1` will be returned.
   *
   * @param {RegExp} open
   * @param {RegExp} close
   * @returns {number}
   */


  function findClosingBracket(open, close) {
    var stackHeight = 1;

    for (var i = currentIndex; i < validTokens.length; i++) {
      var token = validTokens[i];
      var content = token.content;

      if (token.type === 'punctuation' && typeof content === 'string') {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;

          if (stackHeight === 0) {
            return i;
          }
        }
      }
    }

    return -1;
  }
  /**
   * Adds an alias to the given token.
   *
   * @param {Token} token
   * @param {string} alias
   * @returns {void}
   */


  function addAlias(token, alias) {
    var aliases = token.alias;

    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }

    aliases.push(alias);
  }

  for (; currentIndex < validTokens.length;) {
    var startToken = validTokens[currentIndex++]; // add special aliases for mutation tokens

    if (startToken.type === 'keyword' && startToken.content === 'mutation') {
      // any array of the names of all input variables (if any)
      var inputVariables = [];

      if (isTokenType(['definition-mutation', 'punctuation']) && getToken(1).content === '(') {
        // definition
        currentIndex += 2; // skip 'definition-mutation' and 'punctuation'

        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);

        if (definitionEnd === -1) {
          continue;
        } // find all input variables


        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);

          if (t.type === 'variable') {
            addAlias(t, 'variable-input');
            inputVariables.push(t.content);
          }
        }

        currentIndex = definitionEnd + 1;
      }

      if (isTokenType(['punctuation', 'property-query']) && getToken(0).content === '{') {
        currentIndex++; // skip opening bracket

        addAlias(getToken(0), 'property-mutation');

        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);

          if (mutationEnd === -1) {
            continue;
          } // give references to input variables a special alias


          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];

            if (varToken.type === 'variable' && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, 'variable-input');
            }
          }
        }
      }
    }
  }
});
/* "prismjs/components/prism-sql" */

prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'identifier': {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      'punctuation': /^`|`$/
    }
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:FALSE|NULL|TRUE)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-js-templates" */

(function (Prism) {
  var templateString = Prism.languages.javascript['template-string']; // see the pattern in prism-javascript.js

  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside['interpolation'];
  var interpolationPunctuationObject = interpolationObject.inside['interpolation-punctuation'];
  var interpolationPattern = interpolationObject.pattern.source;
  /**
   * Creates a new pattern to match a template string with a special tag.
   *
   * This will return `undefined` if there is no grammar with the given language id.
   *
   * @param {string} language The language id of the embedded language. E.g. `markdown`.
   * @param {string} tag The regex pattern to match the tag.
   * @returns {object | undefined}
   * @example
   * createTemplate('css', /\bcss/.source);
   */

  function createTemplate(language, tag) {
    if (!Prism.languages[language]) {
      return undefined;
    }

    return {
      pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'embedded-code': {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }

  Prism.languages.javascript['template-string'] = [// styled-jsx:
  //   css`a { color: #25F; }`
  // styled-components:
  //   styled.h1`color: red;`
  createTemplate('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), // html`<p></p>`
  // div.innerHTML = `<p></p>`
  createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), // svg`<path fill="#fff" d="M55.37 ..."/>`
  createTemplate('svg', /\bsvg/.source), // md`# h1`, markdown`## h2`
  createTemplate('markdown', /\b(?:markdown|md)/.source), // gql`...`, graphql`...`, graphql.experimental`...`
  createTemplate('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), // sql`...`
  createTemplate('sql', /\bsql/.source), // vanilla template string
  templateString].filter(Boolean);
  /**
   * Returns a specific placeholder literal for the given language.
   *
   * @param {number} counter
   * @param {string} language
   * @returns {string}
   */

  function getPlaceholder(counter, language) {
    return '___' + language.toUpperCase() + '_' + counter + '___';
  }
  /**
   * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
   *
   * @param {string} code
   * @param {any} grammar
   * @param {string} language
   * @returns {(string|Token)[]}
   */


  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code: code,
      grammar: grammar,
      language: language
    };
    Prism.hooks.run('before-tokenize', env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    Prism.hooks.run('after-tokenize', env);
    return env.tokens;
  }
  /**
   * Returns the token of the given JavaScript interpolation expression.
   *
   * @param {string} expression The code of the expression. E.g. `"${42}"`
   * @returns {Token}
   */


  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject;
    /** @type {Array} */

    var tokens = Prism.tokenize(expression, tempGrammar);

    if (tokens.length === 3) {
      /**
       * The token array will look like this
       * [
       *     ["interpolation-punctuation", "${"]
       *     "..." // JavaScript expression of the interpolation
       *     ["interpolation-punctuation", "}"]
       * ]
       */
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript'));
      tokens.splice.apply(tokens, args);
    }

    return new Prism.Token('interpolation', tokens, interpolationObject.alias, expression);
  }
  /**
   * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
   *
   * This function has 3 phases:
   *
   * 1. Replace all JavaScript interpolation expression with a placeholder.
   *    The placeholder will have the syntax of a identify of the target language.
   * 2. Tokenize the code with placeholders.
   * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
   *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
   *    tokenized as two tokens by the grammar of the embedded language.
   *
   * @param {string} code
   * @param {object} grammar
   * @param {string} language
   * @returns {Token}
   */


  function tokenizeEmbedded(code, grammar, language) {
    // 1. First filter out all interpolations
    // because they might be escaped, we need a lookbehind, so we use Prism

    /** @type {(Token|string)[]} */
    var _tokens = Prism.tokenize(code, {
      'interpolation': {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    }); // replace all interpolations with a placeholder which is not in the code already


    var placeholderCounter = 0;
    /** @type {Object<string, string>} */

    var placeholderMap = {};

    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === 'string') {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;

        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {
          /* noop */
        }

        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join(''); // 2. Tokenize the embedded code


    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language); // 3. Re-insert the interpolation

    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    /**
     *
     * @param {(Token|string)[]} tokens
     * @returns {void}
     */

    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }

        var token = tokens[i];

        if (typeof token === 'string' || typeof token.content === 'string') {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === 'string' ? token :
          /** @type {string} */
          token.content;
          var index = s.indexOf(placeholder);

          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];

            if (before) {
              replacement.push(before);
            }

            replacement.push(middle);

            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }

            if (typeof token === 'string') {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;

          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }

    walkTokens(embeddedTokens);
    return new Prism.Token(language, embeddedTokens, 'language-' + language, code);
  }
  /**
   * The languages for which JS templating will handle tagged template literals.
   *
   * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
   */


  var supportedLanguages = {
    'javascript': true,
    'js': true,
    'typescript': true,
    'ts': true,
    'jsx': true,
    'tsx': true
  };
  Prism.hooks.add('after-tokenize', function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    /**
     * Finds and tokenizes all template strings with an embedded languages.
     *
     * @param {(Token | string)[]} tokens
     * @returns {void}
     */


    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          continue;
        }

        var content = token.content;

        if (!Array.isArray(content)) {
          if (typeof content !== 'string') {
            findTemplateStrings([content]);
          }

          continue;
        }

        if (token.type === 'template-string') {
          /**
           * A JavaScript template-string token will look like this:
           *
           * ["template-string", [
           *     ["template-punctuation", "`"],
           *     (
           *         An array of "string" and "interpolation" tokens. This is the simple string case.
           *         or
           *         ["embedded-code", "..."] This is the token containing the embedded code.
           *                                  It also has an alias which is the language of the embedded code.
           *     ),
           *     ["template-punctuation", "`"]
           * ]]
           */
          var embedded = content[1];

          if (content.length === 3 && typeof embedded !== 'string' && embedded.type === 'embedded-code') {
            // get string content
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism.languages[language];

            if (!grammar) {
              // the embedded language isn't registered.
              continue;
            }

            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }

    findTemplateStrings(env.tokens);
  });
  /**
   * Returns the string content of a token or token stream.
   *
   * @param {string | Token | (string | Token)[]} value
   * @returns {string}
   */

  function stringContent(value) {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join('');
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
/* "prismjs/components/prism-typescript" */


(function (Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null // see below

    },
    'builtin': /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  }); // The keywords TypeScript adds to JavaScript

  Prism.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, // keywords that have to be followed by an identifier
  /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, // This is for `import type *, {}`
  /\btype\b(?=\s*(?:[\{*]|$))/); // doesn't work with TS because TS is too complex

  delete Prism.languages.typescript['parameter'];
  delete Prism.languages.typescript['literal-property']; // a version of typescript specifically for highlighting types

  var typeInside = Prism.languages.extend('typescript', {});
  delete typeInside['class-name'];
  Prism.languages.typescript['class-name'].inside = typeInside;
  Prism.languages.insertBefore('typescript', 'function', {
    'decorator': {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        'at': {
          pattern: /^@/,
          alias: 'operator'
        },
        'function': /^[\s\S]+/
      }
    },
    'generic-function': {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        'generic': {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: 'class-name',
          inside: typeInside
        }
      }
    }
  });
  Prism.languages.ts = Prism.languages.typescript;
})(prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: 'class-name'
    }]
  });
  /**
   * Replaces the `<ID>` placeholder in the given pattern with a pattern for general JS identifiers.
   *
   * @param {string} source
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }

  Prism.languages.insertBefore('javascript', 'keyword', {
    'imports': {
      // https://tc39.es/ecma262/#sec-imports
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    'exports': {
      // https://tc39.es/ecma262/#sec-exports
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: 'module'
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: 'control-flow'
  }, {
    pattern: /\bnull\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\bundefined\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\bconsole(?=\s*\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(prism);
/* "prismjs/components/prism-jsx" */


(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  /**
   * @param {string} source
   * @param {string} [flags]
   */

  function re(source, flags) {
    source = source.replace(/<S>/g, function () {
      return space;
    }).replace(/<BRACES>/g, function () {
      return braces;
    }).replace(/<SPREAD>/g, function () {
      return spread;
    });
    return RegExp(source, flags);
  }

  spread = re(spread).source;
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.jsx.tag.inside['comment'] = javascript['comment'];
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: re(/<SPREAD>/.source),
      inside: Prism.languages.jsx
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'special-attr', {
    'script': {
      // Allow for two levels of nesting
      pattern: re(/=<BRACES>/.source),
      alias: 'language-javascript',
      inside: {
        'script-punctuation': {
          pattern: /^=(?=\{)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      }
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ;else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\d.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }

    if (name === 'diff') {
      alias.push('bold');
    }

    Prism.languages.diff[name] = {
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias,
      inside: {
        'line': {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        'prefix': {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(prism);
/* "prismjs/components/prism-git" */


prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit-sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

prism.languages.go = prism.languages.extend('clike', {
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'boolean': /\b(?:_|false|iota|nil|true)\b/,
  'number': [// binary and octal integers
  /\b0(?:b[01_]+|o[0-7_]+)i?\b/i, // hexadecimal integers and floats
  /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, // decimal integers and floats
  /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'builtin': /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
prism.languages.insertBefore('go', 'string', {
  'char': {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go['class-name'];
/* "prismjs/components/prism-markup-templating" */

(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
              walkTokens(token.content);
            }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(prism);
/* "prismjs/components/prism-handlebars" */


(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:false|true)\b/,
    'block': {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
  Prism.languages.hbs = Prism.languages.handlebars;
})(prism);
/* "prismjs/components/prism-json" */
// https://www.json.org/json-en.html


prism.languages.json = {
  'property': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'comment': {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
prism.languages.webmanifest = prism.languages.json;
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

prism.languages.less = prism.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  'operator': /[+\-*\/]/
});
prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      'punctuation': /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'builtin-target': {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: 'builtin'
  },
  'target': {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: 'symbol',
    inside: {
      'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  // Directives
  'keyword': /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  'function': {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-objectivec" */

prism.languages.objectivec = prism.languages.extend('c', {
  'string': {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'keyword': /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete prism.languages.objectivec['class-name'];
prism.languages.objc = prism.languages.objectivec;
/* "prismjs/components/prism-ocaml" */
// https://ocaml.org/manual/lex.html

prism.languages.ocaml = {
  'comment': {
    pattern: /\(\*[\s\S]*?\*\)/,
    greedy: true
  },
  'char': {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  'string': [{
    pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
    greedy: true
  }],
  'number': [// binary and octal
  /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i, // hexadecimal
  /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i, // decimal
  /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],
  'directive': {
    pattern: /\B#\w+/,
    alias: 'property'
  },
  'label': {
    pattern: /\B~\w+/,
    alias: 'property'
  },
  'type-variable': {
    pattern: /\B'\w+/,
    alias: 'function'
  },
  'variant': {
    pattern: /`\w+/,
    alias: 'symbol'
  },
  // For the list of keywords and operators,
  // see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  'operator-like-punctuation': {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: 'punctuation'
  },
  // Custom operators are allowed
  'operator': /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  'punctuation': /;;|::|[(){}\[\].,:;#]|\b_\b/
};
/* "prismjs/components/prism-python" */

prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  'string-interpolation': {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:False|None|True)\b/,
  'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
/* "prismjs/components/prism-reason" */

prism.languages.reason = prism.languages.extend('clike', {
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
prism.languages.insertBefore('reason', 'class-name', {
  'char': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: true
  },
  // Negative look-ahead prevents from matching things like String.capitalize
  'constructor': /\b[A-Z]\w*\b(?!\s*\.)/,
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: true,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
    pattern: /(\s)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      greedy: true,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: true,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
/* "prismjs/components/prism-scss" */


prism.languages.scss = prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
prism.languages.insertBefore('scss', 'function', {
  'module-modifier': {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: 'keyword'
  },
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: true
  }
});
prism.languages.scss['atrule'].inside.rest = prism.languages.scss;
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'url': {
      pattern: /\burl\((["']?).*?\1\)/i,
      greedy: true
    },
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'color': [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'boolean': /\b(?:false|true)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'number': number,
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^\{|\}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'atrule-declaration': {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        'keyword': /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'comment': inside.comment,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(prism);
/* "prismjs/components/prism-tsx" */


(function (Prism) {
  var typescript = Prism.util.clone(Prism.languages.typescript);
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript); // doesn't work with TS because TS is too complex

  delete Prism.languages.tsx['parameter'];
  delete Prism.languages.tsx['literal-property']; // This will prevent collisions between TSX tags and TS generic types.
  // Idea by https://github.com/karlhorky
  // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928

  var tag = Prism.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
/* "prismjs/components/prism-wasm" */


prism.languages.wasm = {
  'comment': [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      'punctuation': /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  'punctuation': /[()]/
};

// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

var defaultProps = {
  // $FlowFixMe
  Prism: prism,
  theme: theme
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1$1.themeDict !== undefined && props.theme === this$1$1.prevTheme && props.language === this$1$1.prevLanguage) {
        return this$1$1.themeDict;
      }

      this$1$1.prevTheme = props.theme;
      this$1$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1$1.getThemeDict(this$1$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1$1.getThemeDict(this$1$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(Component);

var htmlReactParser = {exports: {}};

var lib$2 = {};

var possibleStandardNamesOptimized$1 = {};

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME$1 = 0;
possibleStandardNamesOptimized$1.SAME = SAME$1; // An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').

var CAMELCASE$1 = 1;
possibleStandardNamesOptimized$1.CAMELCASE = CAMELCASE$1;
possibleStandardNamesOptimized$1.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  'accept-charset': 'acceptCharset',
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: 'className',
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: 'htmlFor',
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  'http-equiv': 'httpEquiv',
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  'accent-height': 'accentHeight',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  'alignment-baseline': 'alignmentBaseline',
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  'arabic-form': 'arabicForm',
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  'baseline-shift': 'baselineShift',
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  'cap-height': 'capHeight',
  clip: 0,
  clipPath: 1,
  'clip-path': 'clipPath',
  clipPathUnits: 1,
  clipRule: 1,
  'clip-rule': 'clipRule',
  color: 0,
  colorInterpolation: 1,
  'color-interpolation': 'colorInterpolation',
  colorInterpolationFilters: 1,
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorProfile: 1,
  'color-profile': 'colorProfile',
  colorRendering: 1,
  'color-rendering': 'colorRendering',
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  'dominant-baseline': 'dominantBaseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  'enable-background': 'enableBackground',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  'fill-opacity': 'fillOpacity',
  fillRule: 1,
  'fill-rule': 'fillRule',
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  'flood-opacity': 'floodOpacity',
  floodColor: 1,
  'flood-color': 'floodColor',
  focusable: 0,
  fontFamily: 1,
  'font-family': 'fontFamily',
  fontSize: 1,
  'font-size': 'fontSize',
  fontSizeAdjust: 1,
  'font-size-adjust': 'fontSizeAdjust',
  fontStretch: 1,
  'font-stretch': 'fontStretch',
  fontStyle: 1,
  'font-style': 'fontStyle',
  fontVariant: 1,
  'font-variant': 'fontVariant',
  fontWeight: 1,
  'font-weight': 'fontWeight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  'glyph-name': 'glyphName',
  glyphOrientationHorizontal: 1,
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphOrientationVertical: 1,
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  'horiz-adv-x': 'horizAdvX',
  horizOriginX: 1,
  'horiz-origin-x': 'horizOriginX',
  ideographic: 0,
  imageRendering: 1,
  'image-rendering': 'imageRendering',
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  'letter-spacing': 'letterSpacing',
  lightingColor: 1,
  'lighting-color': 'lightingColor',
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  'marker-end': 'markerEnd',
  markerHeight: 1,
  markerMid: 1,
  'marker-mid': 'markerMid',
  markerStart: 1,
  'marker-start': 'markerStart',
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  'overline-position': 'overlinePosition',
  overlineThickness: 1,
  'overline-thickness': 'overlineThickness',
  paintOrder: 1,
  'paint-order': 'paintOrder',
  panose1: 0,
  'panose-1': 'panose1',
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  'pointer-events': 'pointerEvents',
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  'rendering-intent': 'renderingIntent',
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  'shape-rendering': 'shapeRendering',
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  'stop-color': 'stopColor',
  stopOpacity: 1,
  'stop-opacity': 'stopOpacity',
  strikethroughPosition: 1,
  'strikethrough-position': 'strikethroughPosition',
  strikethroughThickness: 1,
  'strikethrough-thickness': 'strikethroughThickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  'stroke-dasharray': 'strokeDasharray',
  strokeDashoffset: 1,
  'stroke-dashoffset': 'strokeDashoffset',
  strokeLinecap: 1,
  'stroke-linecap': 'strokeLinecap',
  strokeLinejoin: 1,
  'stroke-linejoin': 'strokeLinejoin',
  strokeMiterlimit: 1,
  'stroke-miterlimit': 'strokeMiterlimit',
  strokeWidth: 1,
  'stroke-width': 'strokeWidth',
  strokeOpacity: 1,
  'stroke-opacity': 'strokeOpacity',
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  'text-anchor': 'textAnchor',
  textDecoration: 1,
  'text-decoration': 'textDecoration',
  textLength: 1,
  textRendering: 1,
  'text-rendering': 'textRendering',
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  'underline-position': 'underlinePosition',
  underlineThickness: 1,
  'underline-thickness': 'underlineThickness',
  unicode: 0,
  unicodeBidi: 1,
  'unicode-bidi': 'unicodeBidi',
  unicodeRange: 1,
  'unicode-range': 'unicodeRange',
  unitsPerEm: 1,
  'units-per-em': 'unitsPerEm',
  unselectable: 0,
  vAlphabetic: 1,
  'v-alphabetic': 'vAlphabetic',
  values: 0,
  vectorEffect: 1,
  'vector-effect': 'vectorEffect',
  version: 0,
  vertAdvY: 1,
  'vert-adv-y': 'vertAdvY',
  vertOriginX: 1,
  'vert-origin-x': 'vertOriginX',
  vertOriginY: 1,
  'vert-origin-y': 'vertOriginY',
  vHanging: 1,
  'v-hanging': 'vHanging',
  vIdeographic: 1,
  'v-ideographic': 'vIdeographic',
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  'v-mathematical': 'vMathematical',
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  'word-spacing': 'wordSpacing',
  writingMode: 1,
  'writing-mode': 'writingMode',
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  'x-height': 'xHeight',
  xlinkActuate: 1,
  'xlink:actuate': 'xlinkActuate',
  xlinkArcrole: 1,
  'xlink:arcrole': 'xlinkArcrole',
  xlinkHref: 1,
  'xlink:href': 'xlinkHref',
  xlinkRole: 1,
  'xlink:role': 'xlinkRole',
  xlinkShow: 1,
  'xlink:show': 'xlinkShow',
  xlinkTitle: 1,
  'xlink:title': 'xlinkTitle',
  xlinkType: 1,
  'xlink:type': 'xlinkType',
  xmlBase: 1,
  'xml:base': 'xmlBase',
  xmlLang: 1,
  'xml:lang': 'xmlLang',
  xmlns: 0,
  'xml:space': 'xmlSpace',
  xmlnsXlink: 1,
  'xmlns:xlink': 'xmlnsXlink',
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};

Object.defineProperty(lib$2, '__esModule', {
  value: true
});

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
} // A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.


var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      attributeName = _ref2[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize$1 = function capitalize(token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize$1);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize$1);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize$1);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

var _require = possibleStandardNamesOptimized$1,
    CAMELCASE = _require.CAMELCASE,
    SAME = _require.SAME,
    possibleStandardNamesOptimized = _require.possibleStandardNames;

var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
/**
 * Checks whether a property name is a custom attribute.
 *
 * @see {@link https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25}
 *
 * @param {string}
 * @return {boolean}
 */

var isCustomAttribute = RegExp.prototype.test.bind( // eslint-disable-next-line no-misleading-character-class
new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
var possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(function (accumulator, standardName) {
  var propName = possibleStandardNamesOptimized[standardName];

  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }

  return accumulator;
}, {});
lib$2.BOOLEAN = BOOLEAN;
lib$2.BOOLEANISH_STRING = BOOLEANISH_STRING;
lib$2.NUMERIC = NUMERIC;
lib$2.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
lib$2.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
lib$2.RESERVED = RESERVED;
lib$2.STRING = STRING;
lib$2.getPropertyInfo = getPropertyInfo;
lib$2.isCustomAttribute = isCustomAttribute;
lib$2.possibleStandardNames = possibleStandardNames;

var cjs = {};

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/; // declaration

var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/; // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill

var TRIM_REGEX = /^\s+|\s+$/g; // strings

var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = ''; // types

var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */

var inlineStyleParser = function (style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];
  options = options || {};
  /**
   * Positional.
   */

  var lineno = 1;
  var column = 1;
  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */

  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }
  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */


  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */


  function Position(start) {
    this.start = start;
    this.end = {
      line: lineno,
      column: column
    };
    this.source = options.source;
  }
  /**
   * Non-enumerable source string.
   */


  Position.prototype.content = style;
  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */

  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) ; else {
      throw err;
    }
  }
  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */


  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }
  /**
   * Parse whitespace.
   */


  function whitespace() {
    match(WHITESPACE_REGEX);
  }
  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */


  function comments(rules) {
    var c;
    rules = rules || [];

    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }

    return rules;
  }
  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */


  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
    var i = 2;

    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }

    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */


  function declaration() {
    var pos = position(); // prop

    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment(); // :

    if (!match(COLON_REGEX)) return error("property missing ':'"); // val

    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    }); // ;

    match(SEMICOLON_REGEX);
    return ret;
  }
  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */


  function declarations() {
    var decls = [];
    comments(decls); // declarations

    var decl;

    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */


function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}

var parse$1 = inlineStyleParser;
/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */


function StyleToObject(style, iterator) {
  var output = null;

  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse$1(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

var styleToObject = StyleToObject;

var utilities$4 = {};

utilities$4.__esModule = true;
utilities$4.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;

var skipCamelCase = function (property) {
  return !property || NO_HYPHEN_REGEX.test(property) || CUSTOM_PROPERTY_REGEX.test(property);
};

var capitalize = function (match, character) {
  return character.toUpperCase();
};

var trimHyphen = function (match, prefix) {
  return "".concat(prefix, "-");
};

var camelCase = function (property, options) {
  if (options === void 0) {
    options = {};
  }

  if (skipCamelCase(property)) {
    return property;
  }

  property = property.toLowerCase();

  if (options.reactCompat) {
    property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
  } else {
    property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
  }

  return property.replace(HYPHEN_REGEX, capitalize);
};

utilities$4.camelCase = camelCase;

(function (exports) {

	var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	exports.__esModule = true;

	var style_to_object_1 = __importDefault(styleToObject);

	var utilities_1 = utilities$4;

	function StyleToJS(style, options) {
	  var output = {};

	  if (!style || typeof style !== 'string') {
	    return output;
	  }

	  (0, style_to_object_1["default"])(style, function (property, value) {
	    if (property && value) {
	      output[(0, utilities_1.camelCase)(property, options)] = value;
	    }
	  });
	  return output;
	}

	exports["default"] = StyleToJS;
} (cjs));

var React$1 = React$2;

var styleToJS = cjs.default;
/**
 * Swap key with value in an object.
 *
 * @param {object} obj - The object.
 * @param {Function} [override] - The override method.
 * @returns - The inverted object.
 */


function invertObject(obj, override) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('First argument must be an object');
  }

  var key;
  var value;
  var isOverridePresent = typeof override === 'function';
  var overrides = {};
  var result = {};

  for (key in obj) {
    value = obj[key];

    if (isOverridePresent) {
      overrides = override(key, value);

      if (overrides && overrides.length === 2) {
        result[overrides[0]] = overrides[1];
        continue;
      }
    }

    if (typeof value === 'string') {
      result[value] = key;
    }
  }

  return result;
}
/**
 * Check if a given tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param {string} tagName - The name of the html tag.
 * @param {object} props - The props being passed to the element.
 * @returns - Whether tag is custom component.
 */


function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return props && typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var styleToJSOptions = {
  reactCompat: true
};
/**
 * Sets style prop.
 *
 * @param {null|undefined|string} style
 * @param {object} props
 */

function setStyleProp$1(style, props) {
  if (style === null || style === undefined) {
    return;
  }

  try {
    props.style = styleToJS(style, styleToJSOptions);
  } catch (err) {
    props.style = {};
  }
}
/**
 * @constant {boolean}
 * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
 */


var PRESERVE_CUSTOM_ATTRIBUTES = React$1.version.split('.')[0] >= 16; // Taken from
// https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213

var elementsWithNoTextChildren = new Set(['tr', 'tbody', 'thead', 'tfoot', 'colgroup', 'table', 'head', 'html', 'frameset']);
/**
 * Checks if the given node can contain text nodes
 *
 * @param {DomElement} node - Node.
 * @returns - Whether node can contain text nodes.
 */

function canTextBeChildOfNode$1(node) {
  return !elementsWithNoTextChildren.has(node.name);
}

var utilities$3 = {
  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
  invertObject: invertObject,
  isCustomComponent: isCustomComponent,
  setStyleProp: setStyleProp$1,
  canTextBeChildOfNode: canTextBeChildOfNode$1,
  elementsWithNoTextChildren: elementsWithNoTextChildren
};

var reactProperty = lib$2;

var utilities$2 = utilities$3;
/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param {object} [attributes={}] - HTML/SVG DOM attributes.
 * @returns - React props.
 */


var attributesToProps$2 = function attributesToProps(attributes) {
  attributes = attributes || {};
  var valueOnlyInputs = {
    reset: true,
    submit: true
  };
  var attributeName;
  var attributeNameLowerCased;
  var attributeValue;
  var propName;
  var propertyInfo;
  var props = {};
  var inputIsValueOnly = attributes.type && valueOnlyInputs[attributes.type];

  for (attributeName in attributes) {
    attributeValue = attributes[attributeName]; // ARIA (aria-*) or custom data (data-*) attribute

    if (reactProperty.isCustomAttribute(attributeName)) {
      props[attributeName] = attributeValue;
      continue;
    } // convert HTML/SVG attribute to React prop


    attributeNameLowerCased = attributeName.toLowerCase();
    propName = getPropName(attributeNameLowerCased);

    if (propName) {
      propertyInfo = reactProperty.getPropertyInfo(propName); // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
      // https://reactjs.org/docs/uncontrolled-components.html

      if ((propName === 'checked' || propName === 'value') && !inputIsValueOnly) {
        propName = getPropName('default' + attributeNameLowerCased);
      }

      props[propName] = attributeValue;

      switch (propertyInfo && propertyInfo.type) {
        case reactProperty.BOOLEAN:
          props[propName] = true;
          break;

        case reactProperty.OVERLOADED_BOOLEAN:
          if (attributeValue === '') {
            props[propName] = true;
          }

          break;
      }

      continue;
    } // preserve custom attribute if React >=16


    if (utilities$2.PRESERVE_CUSTOM_ATTRIBUTES) {
      props[attributeName] = attributeValue;
    }
  } // transform inline style to object


  utilities$2.setStyleProp(attributes.style, props);
  return props;
};
/**
 * Gets prop name from lowercased attribute name.
 *
 * @param {string} attributeName - Lowercased attribute name.
 * @returns - Prop name.
 */


function getPropName(attributeName) {
  return reactProperty.possibleStandardNames[attributeName];
}

var React = React$2;

var attributesToProps$1 = attributesToProps$2;

var utilities$1 = utilities$3;

var setStyleProp = utilities$1.setStyleProp;
var canTextBeChildOfNode = utilities$1.canTextBeChildOfNode;
/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param {DomElement[]} nodes - DOM nodes.
 * @param {object} [options={}] - Options.
 * @param {Function} [options.replace] - Replacer.
 * @param {object} [options.library] - Library (React, Preact, etc.).
 * @returns - String or JSX element(s).
 */

function domToReact$1(nodes, options) {
  options = options || {};
  var library = options.library || React;
  var cloneElement = library.cloneElement;
  var createElement = library.createElement;
  var isValidElement = library.isValidElement;
  var result = [];
  var node;
  var isWhitespace;
  var hasReplace = typeof options.replace === 'function';
  var replaceElement;
  var props;
  var children;
  var trim = options.trim;

  for (var i = 0, len = nodes.length; i < len; i++) {
    node = nodes[i]; // replace with custom React element (if present)

    if (hasReplace) {
      replaceElement = options.replace(node);

      if (isValidElement(replaceElement)) {
        // set "key" prop for sibling elements
        // https://fb.me/react-warning-keys
        if (len > 1) {
          replaceElement = cloneElement(replaceElement, {
            key: replaceElement.key || i
          });
        }

        result.push(replaceElement);
        continue;
      }
    }

    if (node.type === 'text') {
      isWhitespace = !node.data.trim().length;

      if (isWhitespace && node.parent && !canTextBeChildOfNode(node.parent)) {
        // We have a whitespace node that can't be nested in its parent
        // so skip it
        continue;
      }

      if (trim && isWhitespace) {
        // Trim is enabled and we have a whitespace node
        // so skip it
        continue;
      } // We have a text node that's not whitespace and it can be nested
      // in its parent so add it to the results


      result.push(node.data);
      continue;
    }

    props = node.attribs;

    if (skipAttributesToProps(node)) {
      setStyleProp(props.style, props);
    } else if (props) {
      props = attributesToProps$1(props);
    }

    children = null;

    switch (node.type) {
      case 'script':
      case 'style':
        // prevent text in <script> or <style> from being escaped
        // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
        if (node.children[0]) {
          props.dangerouslySetInnerHTML = {
            __html: node.children[0].data
          };
        }

        break;

      case 'tag':
        // setting textarea value in children is an antipattern in React
        // https://reactjs.org/docs/forms.html#the-textarea-tag
        if (node.name === 'textarea' && node.children[0]) {
          props.defaultValue = node.children[0].data;
        } else if (node.children && node.children.length) {
          // continue recursion of creating React elements (if applicable)
          children = domToReact$1(node.children, options);
        }

        break;
      // skip all other cases (e.g., comment)

      default:
        continue;
    } // set "key" prop for sibling elements
    // https://fb.me/react-warning-keys


    if (len > 1) {
      props.key = i;
    }

    result.push(createElement(node.name, props, children));
  }

  return result.length === 1 ? result[0] : result;
}
/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param {DomElement} node
 * @returns - Whether node attributes should be converted to props.
 */


function skipAttributesToProps(node) {
  return utilities$1.PRESERVE_CUSTOM_ATTRIBUTES && node.type === 'tag' && utilities$1.isCustomComponent(node.name, node.attribs);
}

var domToReact_1 = domToReact$1;

var htmlDomParser = {exports: {}};

var Parser$2 = {};

var Tokenizer$1 = {};

var decode_codepoint = {};

Object.defineProperty(decode_codepoint, "__esModule", {
  value: true
});
var decodeMap = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);

var fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
String.fromCodePoint || function (codePoint) {
  var output = "";

  if (codePoint > 0xffff) {
    codePoint -= 0x10000;
    output += String.fromCharCode(codePoint >>> 10 & 0x3ff | 0xd800);
    codePoint = 0xdc00 | codePoint & 0x3ff;
  }

  output += String.fromCharCode(codePoint);
  return output;
};

function decodeCodePoint(codePoint) {
  var _a;

  if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) {
    return "\uFFFD";
  }

  return fromCodePoint((_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint);
}

decode_codepoint.default = decodeCodePoint;

var decode = {};

var decodeDataHtml = {};

Object.defineProperty(decodeDataHtml, "__esModule", {
  value: true
}); // Generated using scripts/write-decode-map.ts
// prettier-ignore

decodeDataHtml.default = new Uint16Array([14866, 60, 237, 340, 721, 1312, 1562, 1654, 1838, 1957, 2183, 2239, 2301, 2958, 3037, 3893, 4123, 4298, 4330, 4801, 5191, 5395, 5752, 5903, 5943, 5972, 6050, 0, 0, 0, 0, 0, 0, 6135, 6565, 7422, 8183, 8738, 9242, 9503, 9938, 10189, 10573, 10637, 10715, 11950, 12246, 13539, 13950, 14445, 14533, 15364, 16514, 16980, 17390, 17763, 17849, 18036, 18125, 4096, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 92, 100, 106, 115, 122, 137, 142, 151, 157, 163, 167, 182, 196, 204, 220, 229, 108, 105, 103, 33024, 198, 59, 32768, 198, 80, 33024, 38, 59, 32768, 38, 99, 117, 116, 101, 33024, 193, 59, 32768, 193, 114, 101, 118, 101, 59, 32768, 258, 512, 105, 121, 127, 134, 114, 99, 33024, 194, 59, 32768, 194, 59, 32768, 1040, 114, 59, 32896, 55349, 56580, 114, 97, 118, 101, 33024, 192, 59, 32768, 192, 112, 104, 97, 59, 32768, 913, 97, 99, 114, 59, 32768, 256, 100, 59, 32768, 10835, 512, 103, 112, 172, 177, 111, 110, 59, 32768, 260, 102, 59, 32896, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 32768, 8289, 105, 110, 103, 33024, 197, 59, 32768, 197, 512, 99, 115, 209, 214, 114, 59, 32896, 55349, 56476, 105, 103, 110, 59, 32768, 8788, 105, 108, 100, 101, 33024, 195, 59, 32768, 195, 109, 108, 33024, 196, 59, 32768, 196, 2048, 97, 99, 101, 102, 111, 114, 115, 117, 253, 278, 282, 310, 315, 321, 327, 332, 512, 99, 114, 258, 267, 107, 115, 108, 97, 115, 104, 59, 32768, 8726, 583, 271, 274, 59, 32768, 10983, 101, 100, 59, 32768, 8966, 121, 59, 32768, 1041, 768, 99, 114, 116, 289, 296, 306, 97, 117, 115, 101, 59, 32768, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 32768, 8492, 97, 59, 32768, 914, 114, 59, 32896, 55349, 56581, 112, 102, 59, 32896, 55349, 56633, 101, 118, 101, 59, 32768, 728, 99, 114, 59, 32768, 8492, 109, 112, 101, 113, 59, 32768, 8782, 3584, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 368, 373, 380, 426, 461, 466, 487, 491, 495, 533, 593, 695, 701, 707, 99, 121, 59, 32768, 1063, 80, 89, 33024, 169, 59, 32768, 169, 768, 99, 112, 121, 387, 393, 419, 117, 116, 101, 59, 32768, 262, 512, 59, 105, 398, 400, 32768, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 32768, 8517, 108, 101, 121, 115, 59, 32768, 8493, 1024, 97, 101, 105, 111, 435, 441, 449, 454, 114, 111, 110, 59, 32768, 268, 100, 105, 108, 33024, 199, 59, 32768, 199, 114, 99, 59, 32768, 264, 110, 105, 110, 116, 59, 32768, 8752, 111, 116, 59, 32768, 266, 512, 100, 110, 471, 478, 105, 108, 108, 97, 59, 32768, 184, 116, 101, 114, 68, 111, 116, 59, 32768, 183, 114, 59, 32768, 8493, 105, 59, 32768, 935, 114, 99, 108, 101, 1024, 68, 77, 80, 84, 508, 513, 520, 526, 111, 116, 59, 32768, 8857, 105, 110, 117, 115, 59, 32768, 8854, 108, 117, 115, 59, 32768, 8853, 105, 109, 101, 115, 59, 32768, 8855, 111, 512, 99, 115, 539, 562, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8754, 101, 67, 117, 114, 108, 121, 512, 68, 81, 573, 586, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 32768, 8221, 117, 111, 116, 101, 59, 32768, 8217, 1024, 108, 110, 112, 117, 602, 614, 648, 664, 111, 110, 512, 59, 101, 609, 611, 32768, 8759, 59, 32768, 10868, 768, 103, 105, 116, 621, 629, 634, 114, 117, 101, 110, 116, 59, 32768, 8801, 110, 116, 59, 32768, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8750, 512, 102, 114, 653, 656, 59, 32768, 8450, 111, 100, 117, 99, 116, 59, 32768, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8755, 111, 115, 115, 59, 32768, 10799, 99, 114, 59, 32896, 55349, 56478, 112, 512, 59, 67, 713, 715, 32768, 8915, 97, 112, 59, 32768, 8781, 2816, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 743, 758, 763, 768, 773, 795, 809, 821, 826, 910, 1295, 512, 59, 111, 748, 750, 32768, 8517, 116, 114, 97, 104, 100, 59, 32768, 10513, 99, 121, 59, 32768, 1026, 99, 121, 59, 32768, 1029, 99, 121, 59, 32768, 1039, 768, 103, 114, 115, 780, 786, 790, 103, 101, 114, 59, 32768, 8225, 114, 59, 32768, 8609, 104, 118, 59, 32768, 10980, 512, 97, 121, 800, 806, 114, 111, 110, 59, 32768, 270, 59, 32768, 1044, 108, 512, 59, 116, 815, 817, 32768, 8711, 97, 59, 32768, 916, 114, 59, 32896, 55349, 56583, 512, 97, 102, 831, 897, 512, 99, 109, 836, 891, 114, 105, 116, 105, 99, 97, 108, 1024, 65, 68, 71, 84, 852, 859, 877, 884, 99, 117, 116, 101, 59, 32768, 180, 111, 581, 864, 867, 59, 32768, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 32768, 733, 114, 97, 118, 101, 59, 32768, 96, 105, 108, 100, 101, 59, 32768, 732, 111, 110, 100, 59, 32768, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 32768, 8518, 2113, 920, 0, 0, 0, 925, 946, 0, 1139, 102, 59, 32896, 55349, 56635, 768, 59, 68, 69, 931, 933, 938, 32768, 168, 111, 116, 59, 32768, 8412, 113, 117, 97, 108, 59, 32768, 8784, 98, 108, 101, 1536, 67, 68, 76, 82, 85, 86, 961, 978, 996, 1080, 1101, 1125, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 32768, 8751, 111, 1093, 985, 0, 0, 988, 59, 32768, 168, 110, 65, 114, 114, 111, 119, 59, 32768, 8659, 512, 101, 111, 1001, 1034, 102, 116, 768, 65, 82, 84, 1010, 1017, 1029, 114, 114, 111, 119, 59, 32768, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8660, 101, 101, 59, 32768, 10980, 110, 103, 512, 76, 82, 1041, 1068, 101, 102, 116, 512, 65, 82, 1049, 1056, 114, 114, 111, 119, 59, 32768, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10233, 105, 103, 104, 116, 512, 65, 84, 1089, 1096, 114, 114, 111, 119, 59, 32768, 8658, 101, 101, 59, 32768, 8872, 112, 1042, 1108, 0, 0, 1115, 114, 114, 111, 119, 59, 32768, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 32768, 8741, 110, 1536, 65, 66, 76, 82, 84, 97, 1152, 1179, 1186, 1236, 1272, 1288, 114, 114, 111, 119, 768, 59, 66, 85, 1163, 1165, 1170, 32768, 8595, 97, 114, 59, 32768, 10515, 112, 65, 114, 114, 111, 119, 59, 32768, 8693, 114, 101, 118, 101, 59, 32768, 785, 101, 102, 116, 1315, 1196, 0, 1209, 0, 1220, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 32768, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10590, 101, 99, 116, 111, 114, 512, 59, 66, 1229, 1231, 32768, 8637, 97, 114, 59, 32768, 10582, 105, 103, 104, 116, 805, 1245, 0, 1256, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10591, 101, 99, 116, 111, 114, 512, 59, 66, 1265, 1267, 32768, 8641, 97, 114, 59, 32768, 10583, 101, 101, 512, 59, 65, 1279, 1281, 32768, 8868, 114, 114, 111, 119, 59, 32768, 8615, 114, 114, 111, 119, 59, 32768, 8659, 512, 99, 116, 1300, 1305, 114, 59, 32896, 55349, 56479, 114, 111, 107, 59, 32768, 272, 4096, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1344, 1348, 1354, 1363, 1386, 1391, 1396, 1405, 1413, 1460, 1475, 1483, 1514, 1527, 1531, 1538, 71, 59, 32768, 330, 72, 33024, 208, 59, 32768, 208, 99, 117, 116, 101, 33024, 201, 59, 32768, 201, 768, 97, 105, 121, 1370, 1376, 1383, 114, 111, 110, 59, 32768, 282, 114, 99, 33024, 202, 59, 32768, 202, 59, 32768, 1069, 111, 116, 59, 32768, 278, 114, 59, 32896, 55349, 56584, 114, 97, 118, 101, 33024, 200, 59, 32768, 200, 101, 109, 101, 110, 116, 59, 32768, 8712, 512, 97, 112, 1418, 1423, 99, 114, 59, 32768, 274, 116, 121, 1060, 1431, 0, 0, 1444, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9643, 512, 103, 112, 1465, 1470, 111, 110, 59, 32768, 280, 102, 59, 32896, 55349, 56636, 115, 105, 108, 111, 110, 59, 32768, 917, 117, 512, 97, 105, 1489, 1504, 108, 512, 59, 84, 1495, 1497, 32768, 10869, 105, 108, 100, 101, 59, 32768, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 8652, 512, 99, 105, 1519, 1523, 114, 59, 32768, 8496, 109, 59, 32768, 10867, 97, 59, 32768, 919, 109, 108, 33024, 203, 59, 32768, 203, 512, 105, 112, 1543, 1549, 115, 116, 115, 59, 32768, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 32768, 8519, 1280, 99, 102, 105, 111, 115, 1572, 1576, 1581, 1620, 1648, 121, 59, 32768, 1060, 114, 59, 32896, 55349, 56585, 108, 108, 101, 100, 1060, 1591, 0, 0, 1604, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 32768, 9642, 1601, 1628, 0, 1633, 0, 0, 1639, 102, 59, 32896, 55349, 56637, 65, 108, 108, 59, 32768, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 32768, 8497, 99, 114, 59, 32768, 8497, 3072, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1678, 1683, 1688, 1701, 1708, 1729, 1734, 1739, 1742, 1748, 1828, 1834, 99, 121, 59, 32768, 1027, 33024, 62, 59, 32768, 62, 109, 109, 97, 512, 59, 100, 1696, 1698, 32768, 915, 59, 32768, 988, 114, 101, 118, 101, 59, 32768, 286, 768, 101, 105, 121, 1715, 1721, 1726, 100, 105, 108, 59, 32768, 290, 114, 99, 59, 32768, 284, 59, 32768, 1043, 111, 116, 59, 32768, 288, 114, 59, 32896, 55349, 56586, 59, 32768, 8921, 112, 102, 59, 32896, 55349, 56638, 101, 97, 116, 101, 114, 1536, 69, 70, 71, 76, 83, 84, 1766, 1783, 1794, 1803, 1809, 1821, 113, 117, 97, 108, 512, 59, 76, 1775, 1777, 32768, 8805, 101, 115, 115, 59, 32768, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8807, 114, 101, 97, 116, 101, 114, 59, 32768, 10914, 101, 115, 115, 59, 32768, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 10878, 105, 108, 100, 101, 59, 32768, 8819, 99, 114, 59, 32896, 55349, 56482, 59, 32768, 8811, 2048, 65, 97, 99, 102, 105, 111, 115, 117, 1854, 1861, 1874, 1880, 1884, 1897, 1919, 1934, 82, 68, 99, 121, 59, 32768, 1066, 512, 99, 116, 1866, 1871, 101, 107, 59, 32768, 711, 59, 32768, 94, 105, 114, 99, 59, 32768, 292, 114, 59, 32768, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 32768, 8459, 833, 1902, 0, 1906, 102, 59, 32768, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 32768, 9472, 512, 99, 116, 1924, 1928, 114, 59, 32768, 8459, 114, 111, 107, 59, 32768, 294, 109, 112, 533, 1940, 1950, 111, 119, 110, 72, 117, 109, 112, 59, 32768, 8782, 113, 117, 97, 108, 59, 32768, 8783, 3584, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 1985, 1990, 1996, 2001, 2010, 2025, 2030, 2034, 2043, 2077, 2134, 2155, 2160, 2167, 99, 121, 59, 32768, 1045, 108, 105, 103, 59, 32768, 306, 99, 121, 59, 32768, 1025, 99, 117, 116, 101, 33024, 205, 59, 32768, 205, 512, 105, 121, 2015, 2022, 114, 99, 33024, 206, 59, 32768, 206, 59, 32768, 1048, 111, 116, 59, 32768, 304, 114, 59, 32768, 8465, 114, 97, 118, 101, 33024, 204, 59, 32768, 204, 768, 59, 97, 112, 2050, 2052, 2070, 32768, 8465, 512, 99, 103, 2057, 2061, 114, 59, 32768, 298, 105, 110, 97, 114, 121, 73, 59, 32768, 8520, 108, 105, 101, 115, 59, 32768, 8658, 837, 2082, 0, 2110, 512, 59, 101, 2086, 2088, 32768, 8748, 512, 103, 114, 2093, 2099, 114, 97, 108, 59, 32768, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 32768, 8898, 105, 115, 105, 98, 108, 101, 512, 67, 84, 2120, 2127, 111, 109, 109, 97, 59, 32768, 8291, 105, 109, 101, 115, 59, 32768, 8290, 768, 103, 112, 116, 2141, 2146, 2151, 111, 110, 59, 32768, 302, 102, 59, 32896, 55349, 56640, 97, 59, 32768, 921, 99, 114, 59, 32768, 8464, 105, 108, 100, 101, 59, 32768, 296, 828, 2172, 0, 2177, 99, 121, 59, 32768, 1030, 108, 33024, 207, 59, 32768, 207, 1280, 99, 102, 111, 115, 117, 2193, 2206, 2211, 2217, 2232, 512, 105, 121, 2198, 2203, 114, 99, 59, 32768, 308, 59, 32768, 1049, 114, 59, 32896, 55349, 56589, 112, 102, 59, 32896, 55349, 56641, 820, 2222, 0, 2227, 114, 59, 32896, 55349, 56485, 114, 99, 121, 59, 32768, 1032, 107, 99, 121, 59, 32768, 1028, 1792, 72, 74, 97, 99, 102, 111, 115, 2253, 2258, 2263, 2269, 2283, 2288, 2294, 99, 121, 59, 32768, 1061, 99, 121, 59, 32768, 1036, 112, 112, 97, 59, 32768, 922, 512, 101, 121, 2274, 2280, 100, 105, 108, 59, 32768, 310, 59, 32768, 1050, 114, 59, 32896, 55349, 56590, 112, 102, 59, 32896, 55349, 56642, 99, 114, 59, 32896, 55349, 56486, 2816, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2323, 2328, 2333, 2374, 2396, 2775, 2780, 2797, 2804, 2934, 2954, 99, 121, 59, 32768, 1033, 33024, 60, 59, 32768, 60, 1280, 99, 109, 110, 112, 114, 2344, 2350, 2356, 2360, 2370, 117, 116, 101, 59, 32768, 313, 98, 100, 97, 59, 32768, 923, 103, 59, 32768, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 32768, 8466, 114, 59, 32768, 8606, 768, 97, 101, 121, 2381, 2387, 2393, 114, 111, 110, 59, 32768, 317, 100, 105, 108, 59, 32768, 315, 59, 32768, 1051, 512, 102, 115, 2401, 2702, 116, 2560, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2423, 2470, 2479, 2530, 2537, 2561, 2618, 2666, 2683, 2690, 512, 110, 114, 2428, 2441, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10216, 114, 111, 119, 768, 59, 66, 82, 2451, 2453, 2458, 32768, 8592, 97, 114, 59, 32768, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8646, 101, 105, 108, 105, 110, 103, 59, 32768, 8968, 111, 838, 2485, 0, 2498, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10214, 110, 805, 2503, 0, 2514, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10593, 101, 99, 116, 111, 114, 512, 59, 66, 2523, 2525, 32768, 8643, 97, 114, 59, 32768, 10585, 108, 111, 111, 114, 59, 32768, 8970, 105, 103, 104, 116, 512, 65, 86, 2546, 2553, 114, 114, 111, 119, 59, 32768, 8596, 101, 99, 116, 111, 114, 59, 32768, 10574, 512, 101, 114, 2566, 2591, 101, 768, 59, 65, 86, 2574, 2576, 2583, 32768, 8867, 114, 114, 111, 119, 59, 32768, 8612, 101, 99, 116, 111, 114, 59, 32768, 10586, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 2604, 2606, 2611, 32768, 8882, 97, 114, 59, 32768, 10703, 113, 117, 97, 108, 59, 32768, 8884, 112, 768, 68, 84, 86, 2626, 2638, 2649, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 32768, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10592, 101, 99, 116, 111, 114, 512, 59, 66, 2659, 2661, 32768, 8639, 97, 114, 59, 32768, 10584, 101, 99, 116, 111, 114, 512, 59, 66, 2676, 2678, 32768, 8636, 97, 114, 59, 32768, 10578, 114, 114, 111, 119, 59, 32768, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8660, 115, 1536, 69, 70, 71, 76, 83, 84, 2716, 2730, 2741, 2750, 2756, 2768, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 32768, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8806, 114, 101, 97, 116, 101, 114, 59, 32768, 8822, 101, 115, 115, 59, 32768, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 10877, 105, 108, 100, 101, 59, 32768, 8818, 114, 59, 32896, 55349, 56591, 512, 59, 101, 2785, 2787, 32768, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 32768, 8666, 105, 100, 111, 116, 59, 32768, 319, 768, 110, 112, 119, 2811, 2899, 2904, 103, 1024, 76, 82, 108, 114, 2821, 2848, 2860, 2887, 101, 102, 116, 512, 65, 82, 2829, 2836, 114, 114, 111, 119, 59, 32768, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 10230, 101, 102, 116, 512, 97, 114, 2868, 2875, 114, 114, 111, 119, 59, 32768, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10233, 102, 59, 32896, 55349, 56643, 101, 114, 512, 76, 82, 2911, 2922, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8600, 768, 99, 104, 116, 2941, 2945, 2948, 114, 59, 32768, 8466, 59, 32768, 8624, 114, 111, 107, 59, 32768, 321, 59, 32768, 8810, 2048, 97, 99, 101, 102, 105, 111, 115, 117, 2974, 2978, 2982, 3007, 3012, 3022, 3028, 3033, 112, 59, 32768, 10501, 121, 59, 32768, 1052, 512, 100, 108, 2987, 2998, 105, 117, 109, 83, 112, 97, 99, 101, 59, 32768, 8287, 108, 105, 110, 116, 114, 102, 59, 32768, 8499, 114, 59, 32896, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 32768, 8723, 112, 102, 59, 32896, 55349, 56644, 99, 114, 59, 32768, 8499, 59, 32768, 924, 2304, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3055, 3060, 3067, 3089, 3201, 3206, 3874, 3880, 3889, 99, 121, 59, 32768, 1034, 99, 117, 116, 101, 59, 32768, 323, 768, 97, 101, 121, 3074, 3080, 3086, 114, 111, 110, 59, 32768, 327, 100, 105, 108, 59, 32768, 325, 59, 32768, 1053, 768, 103, 115, 119, 3096, 3160, 3194, 97, 116, 105, 118, 101, 768, 77, 84, 86, 3108, 3121, 3145, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 32768, 8203, 104, 105, 512, 99, 110, 3128, 3137, 107, 83, 112, 97, 99, 101, 59, 32768, 8203, 83, 112, 97, 99, 101, 59, 32768, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 32768, 8203, 116, 101, 100, 512, 71, 76, 3168, 3184, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 32768, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 32768, 8810, 76, 105, 110, 101, 59, 32768, 10, 114, 59, 32896, 55349, 56593, 1024, 66, 110, 112, 116, 3215, 3222, 3238, 3242, 114, 101, 97, 107, 59, 32768, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 32768, 160, 102, 59, 32768, 8469, 3328, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3269, 3271, 3293, 3312, 3352, 3430, 3455, 3551, 3589, 3625, 3678, 3821, 3861, 32768, 10988, 512, 111, 117, 3276, 3286, 110, 103, 114, 117, 101, 110, 116, 59, 32768, 8802, 112, 67, 97, 112, 59, 32768, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 32768, 8742, 768, 108, 113, 120, 3319, 3327, 3345, 101, 109, 101, 110, 116, 59, 32768, 8713, 117, 97, 108, 512, 59, 84, 3335, 3337, 32768, 8800, 105, 108, 100, 101, 59, 32896, 8770, 824, 105, 115, 116, 115, 59, 32768, 8708, 114, 101, 97, 116, 101, 114, 1792, 59, 69, 70, 71, 76, 83, 84, 3373, 3375, 3382, 3394, 3404, 3410, 3423, 32768, 8815, 113, 117, 97, 108, 59, 32768, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32896, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 32896, 8811, 824, 101, 115, 115, 59, 32768, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32896, 10878, 824, 105, 108, 100, 101, 59, 32768, 8821, 117, 109, 112, 533, 3437, 3448, 111, 119, 110, 72, 117, 109, 112, 59, 32896, 8782, 824, 113, 117, 97, 108, 59, 32896, 8783, 824, 101, 512, 102, 115, 3461, 3492, 116, 84, 114, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 3477, 3479, 3485, 32768, 8938, 97, 114, 59, 32896, 10703, 824, 113, 117, 97, 108, 59, 32768, 8940, 115, 1536, 59, 69, 71, 76, 83, 84, 3506, 3508, 3515, 3524, 3531, 3544, 32768, 8814, 113, 117, 97, 108, 59, 32768, 8816, 114, 101, 97, 116, 101, 114, 59, 32768, 8824, 101, 115, 115, 59, 32896, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32896, 10877, 824, 105, 108, 100, 101, 59, 32768, 8820, 101, 115, 116, 101, 100, 512, 71, 76, 3561, 3578, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 32896, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 32896, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 768, 59, 69, 83, 3603, 3605, 3613, 32768, 8832, 113, 117, 97, 108, 59, 32896, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8928, 512, 101, 105, 3630, 3645, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 32768, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 3663, 3665, 3671, 32768, 8939, 97, 114, 59, 32896, 10704, 824, 113, 117, 97, 108, 59, 32768, 8941, 512, 113, 117, 3683, 3732, 117, 97, 114, 101, 83, 117, 512, 98, 112, 3694, 3712, 115, 101, 116, 512, 59, 69, 3702, 3705, 32896, 8847, 824, 113, 117, 97, 108, 59, 32768, 8930, 101, 114, 115, 101, 116, 512, 59, 69, 3722, 3725, 32896, 8848, 824, 113, 117, 97, 108, 59, 32768, 8931, 768, 98, 99, 112, 3739, 3757, 3801, 115, 101, 116, 512, 59, 69, 3747, 3750, 32896, 8834, 8402, 113, 117, 97, 108, 59, 32768, 8840, 99, 101, 101, 100, 115, 1024, 59, 69, 83, 84, 3771, 3773, 3781, 3793, 32768, 8833, 113, 117, 97, 108, 59, 32896, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8929, 105, 108, 100, 101, 59, 32896, 8831, 824, 101, 114, 115, 101, 116, 512, 59, 69, 3811, 3814, 32896, 8835, 8402, 113, 117, 97, 108, 59, 32768, 8841, 105, 108, 100, 101, 1024, 59, 69, 70, 84, 3834, 3836, 3843, 3854, 32768, 8769, 113, 117, 97, 108, 59, 32768, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8775, 105, 108, 100, 101, 59, 32768, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 32768, 8740, 99, 114, 59, 32896, 55349, 56489, 105, 108, 100, 101, 33024, 209, 59, 32768, 209, 59, 32768, 925, 3584, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 3921, 3927, 3936, 3951, 3958, 3963, 3972, 3996, 4002, 4034, 4037, 4055, 4071, 4078, 108, 105, 103, 59, 32768, 338, 99, 117, 116, 101, 33024, 211, 59, 32768, 211, 512, 105, 121, 3941, 3948, 114, 99, 33024, 212, 59, 32768, 212, 59, 32768, 1054, 98, 108, 97, 99, 59, 32768, 336, 114, 59, 32896, 55349, 56594, 114, 97, 118, 101, 33024, 210, 59, 32768, 210, 768, 97, 101, 105, 3979, 3984, 3989, 99, 114, 59, 32768, 332, 103, 97, 59, 32768, 937, 99, 114, 111, 110, 59, 32768, 927, 112, 102, 59, 32896, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 512, 68, 81, 4014, 4027, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 32768, 8220, 117, 111, 116, 101, 59, 32768, 8216, 59, 32768, 10836, 512, 99, 108, 4042, 4047, 114, 59, 32896, 55349, 56490, 97, 115, 104, 33024, 216, 59, 32768, 216, 105, 573, 4060, 4067, 100, 101, 33024, 213, 59, 32768, 213, 101, 115, 59, 32768, 10807, 109, 108, 33024, 214, 59, 32768, 214, 101, 114, 512, 66, 80, 4085, 4109, 512, 97, 114, 4090, 4094, 114, 59, 32768, 8254, 97, 99, 512, 101, 107, 4101, 4104, 59, 32768, 9182, 101, 116, 59, 32768, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 32768, 9180, 2304, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4141, 4150, 4154, 4159, 4163, 4166, 4176, 4198, 4284, 114, 116, 105, 97, 108, 68, 59, 32768, 8706, 121, 59, 32768, 1055, 114, 59, 32896, 55349, 56595, 105, 59, 32768, 934, 59, 32768, 928, 117, 115, 77, 105, 110, 117, 115, 59, 32768, 177, 512, 105, 112, 4181, 4194, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 32768, 8460, 102, 59, 32768, 8473, 1024, 59, 101, 105, 111, 4207, 4209, 4251, 4256, 32768, 10939, 99, 101, 100, 101, 115, 1024, 59, 69, 83, 84, 4223, 4225, 4232, 4244, 32768, 8826, 113, 117, 97, 108, 59, 32768, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8828, 105, 108, 100, 101, 59, 32768, 8830, 109, 101, 59, 32768, 8243, 512, 100, 112, 4261, 4267, 117, 99, 116, 59, 32768, 8719, 111, 114, 116, 105, 111, 110, 512, 59, 97, 4278, 4280, 32768, 8759, 108, 59, 32768, 8733, 512, 99, 105, 4289, 4294, 114, 59, 32896, 55349, 56491, 59, 32768, 936, 1024, 85, 102, 111, 115, 4306, 4313, 4318, 4323, 79, 84, 33024, 34, 59, 32768, 34, 114, 59, 32896, 55349, 56596, 112, 102, 59, 32768, 8474, 99, 114, 59, 32896, 55349, 56492, 3072, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4354, 4360, 4366, 4395, 4417, 4473, 4477, 4481, 4743, 4764, 4776, 4788, 97, 114, 114, 59, 32768, 10512, 71, 33024, 174, 59, 32768, 174, 768, 99, 110, 114, 4373, 4379, 4383, 117, 116, 101, 59, 32768, 340, 103, 59, 32768, 10219, 114, 512, 59, 116, 4389, 4391, 32768, 8608, 108, 59, 32768, 10518, 768, 97, 101, 121, 4402, 4408, 4414, 114, 111, 110, 59, 32768, 344, 100, 105, 108, 59, 32768, 342, 59, 32768, 1056, 512, 59, 118, 4422, 4424, 32768, 8476, 101, 114, 115, 101, 512, 69, 85, 4433, 4458, 512, 108, 113, 4438, 4446, 101, 109, 101, 110, 116, 59, 32768, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 10607, 114, 59, 32768, 8476, 111, 59, 32768, 929, 103, 104, 116, 2048, 65, 67, 68, 70, 84, 85, 86, 97, 4501, 4547, 4556, 4607, 4614, 4671, 4719, 4736, 512, 110, 114, 4506, 4519, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10217, 114, 111, 119, 768, 59, 66, 76, 4529, 4531, 4536, 32768, 8594, 97, 114, 59, 32768, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8644, 101, 105, 108, 105, 110, 103, 59, 32768, 8969, 111, 838, 4562, 0, 4575, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 32768, 10215, 110, 805, 4580, 0, 4591, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10589, 101, 99, 116, 111, 114, 512, 59, 66, 4600, 4602, 32768, 8642, 97, 114, 59, 32768, 10581, 108, 111, 111, 114, 59, 32768, 8971, 512, 101, 114, 4619, 4644, 101, 768, 59, 65, 86, 4627, 4629, 4636, 32768, 8866, 114, 114, 111, 119, 59, 32768, 8614, 101, 99, 116, 111, 114, 59, 32768, 10587, 105, 97, 110, 103, 108, 101, 768, 59, 66, 69, 4657, 4659, 4664, 32768, 8883, 97, 114, 59, 32768, 10704, 113, 117, 97, 108, 59, 32768, 8885, 112, 768, 68, 84, 86, 4679, 4691, 4702, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 32768, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 32768, 10588, 101, 99, 116, 111, 114, 512, 59, 66, 4712, 4714, 32768, 8638, 97, 114, 59, 32768, 10580, 101, 99, 116, 111, 114, 512, 59, 66, 4729, 4731, 32768, 8640, 97, 114, 59, 32768, 10579, 114, 114, 111, 119, 59, 32768, 8658, 512, 112, 117, 4748, 4752, 102, 59, 32768, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 32768, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8667, 512, 99, 104, 4781, 4785, 114, 59, 32768, 8475, 59, 32768, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 32768, 10740, 3328, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 4827, 4842, 4849, 4856, 4889, 4894, 4949, 4955, 4967, 4973, 5059, 5065, 5070, 512, 67, 99, 4832, 4838, 72, 99, 121, 59, 32768, 1065, 121, 59, 32768, 1064, 70, 84, 99, 121, 59, 32768, 1068, 99, 117, 116, 101, 59, 32768, 346, 1280, 59, 97, 101, 105, 121, 4867, 4869, 4875, 4881, 4886, 32768, 10940, 114, 111, 110, 59, 32768, 352, 100, 105, 108, 59, 32768, 350, 114, 99, 59, 32768, 348, 59, 32768, 1057, 114, 59, 32896, 55349, 56598, 111, 114, 116, 1024, 68, 76, 82, 85, 4906, 4917, 4928, 4940, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8594, 112, 65, 114, 114, 111, 119, 59, 32768, 8593, 103, 109, 97, 59, 32768, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 32768, 8728, 112, 102, 59, 32896, 55349, 56650, 1091, 4979, 0, 0, 4983, 116, 59, 32768, 8730, 97, 114, 101, 1024, 59, 73, 83, 85, 4994, 4996, 5010, 5052, 32768, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 32768, 8851, 117, 512, 98, 112, 5016, 5033, 115, 101, 116, 512, 59, 69, 5024, 5026, 32768, 8847, 113, 117, 97, 108, 59, 32768, 8849, 101, 114, 115, 101, 116, 512, 59, 69, 5043, 5045, 32768, 8848, 113, 117, 97, 108, 59, 32768, 8850, 110, 105, 111, 110, 59, 32768, 8852, 99, 114, 59, 32896, 55349, 56494, 97, 114, 59, 32768, 8902, 1024, 98, 99, 109, 112, 5079, 5102, 5155, 5158, 512, 59, 115, 5084, 5086, 32768, 8912, 101, 116, 512, 59, 69, 5093, 5095, 32768, 8912, 113, 117, 97, 108, 59, 32768, 8838, 512, 99, 104, 5107, 5148, 101, 101, 100, 115, 1024, 59, 69, 83, 84, 5120, 5122, 5129, 5141, 32768, 8827, 113, 117, 97, 108, 59, 32768, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 32768, 8829, 105, 108, 100, 101, 59, 32768, 8831, 84, 104, 97, 116, 59, 32768, 8715, 59, 32768, 8721, 768, 59, 101, 115, 5165, 5167, 5185, 32768, 8913, 114, 115, 101, 116, 512, 59, 69, 5176, 5178, 32768, 8835, 113, 117, 97, 108, 59, 32768, 8839, 101, 116, 59, 32768, 8913, 2816, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5213, 5221, 5227, 5241, 5252, 5274, 5279, 5323, 5362, 5368, 5378, 79, 82, 78, 33024, 222, 59, 32768, 222, 65, 68, 69, 59, 32768, 8482, 512, 72, 99, 5232, 5237, 99, 121, 59, 32768, 1035, 121, 59, 32768, 1062, 512, 98, 117, 5246, 5249, 59, 32768, 9, 59, 32768, 932, 768, 97, 101, 121, 5259, 5265, 5271, 114, 111, 110, 59, 32768, 356, 100, 105, 108, 59, 32768, 354, 59, 32768, 1058, 114, 59, 32896, 55349, 56599, 512, 101, 105, 5284, 5300, 835, 5289, 0, 5297, 101, 102, 111, 114, 101, 59, 32768, 8756, 97, 59, 32768, 920, 512, 99, 110, 5305, 5315, 107, 83, 112, 97, 99, 101, 59, 32896, 8287, 8202, 83, 112, 97, 99, 101, 59, 32768, 8201, 108, 100, 101, 1024, 59, 69, 70, 84, 5335, 5337, 5344, 5355, 32768, 8764, 113, 117, 97, 108, 59, 32768, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 32768, 8773, 105, 108, 100, 101, 59, 32768, 8776, 112, 102, 59, 32896, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 32768, 8411, 512, 99, 116, 5383, 5388, 114, 59, 32896, 55349, 56495, 114, 111, 107, 59, 32768, 358, 5426, 5417, 5444, 5458, 5473, 0, 5480, 5485, 0, 0, 0, 0, 0, 5494, 5500, 5564, 5579, 0, 5726, 5732, 5738, 5745, 512, 99, 114, 5421, 5429, 117, 116, 101, 33024, 218, 59, 32768, 218, 114, 512, 59, 111, 5435, 5437, 32768, 8607, 99, 105, 114, 59, 32768, 10569, 114, 820, 5449, 0, 5453, 121, 59, 32768, 1038, 118, 101, 59, 32768, 364, 512, 105, 121, 5462, 5469, 114, 99, 33024, 219, 59, 32768, 219, 59, 32768, 1059, 98, 108, 97, 99, 59, 32768, 368, 114, 59, 32896, 55349, 56600, 114, 97, 118, 101, 33024, 217, 59, 32768, 217, 97, 99, 114, 59, 32768, 362, 512, 100, 105, 5504, 5548, 101, 114, 512, 66, 80, 5511, 5535, 512, 97, 114, 5516, 5520, 114, 59, 32768, 95, 97, 99, 512, 101, 107, 5527, 5530, 59, 32768, 9183, 101, 116, 59, 32768, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 32768, 9181, 111, 110, 512, 59, 80, 5555, 5557, 32768, 8899, 108, 117, 115, 59, 32768, 8846, 512, 103, 112, 5568, 5573, 111, 110, 59, 32768, 370, 102, 59, 32896, 55349, 56652, 2048, 65, 68, 69, 84, 97, 100, 112, 115, 5595, 5624, 5635, 5648, 5664, 5671, 5682, 5712, 114, 114, 111, 119, 768, 59, 66, 68, 5606, 5608, 5613, 32768, 8593, 97, 114, 59, 32768, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 32768, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 32768, 10606, 101, 101, 512, 59, 65, 5655, 5657, 32768, 8869, 114, 114, 111, 119, 59, 32768, 8613, 114, 114, 111, 119, 59, 32768, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 32768, 8661, 101, 114, 512, 76, 82, 5689, 5700, 101, 102, 116, 65, 114, 114, 111, 119, 59, 32768, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 32768, 8599, 105, 512, 59, 108, 5718, 5720, 32768, 978, 111, 110, 59, 32768, 933, 105, 110, 103, 59, 32768, 366, 99, 114, 59, 32896, 55349, 56496, 105, 108, 100, 101, 59, 32768, 360, 109, 108, 33024, 220, 59, 32768, 220, 2304, 68, 98, 99, 100, 101, 102, 111, 115, 118, 5770, 5776, 5781, 5785, 5798, 5878, 5883, 5889, 5895, 97, 115, 104, 59, 32768, 8875, 97, 114, 59, 32768, 10987, 121, 59, 32768, 1042, 97, 115, 104, 512, 59, 108, 5793, 5795, 32768, 8873, 59, 32768, 10982, 512, 101, 114, 5803, 5806, 59, 32768, 8897, 768, 98, 116, 121, 5813, 5818, 5866, 97, 114, 59, 32768, 8214, 512, 59, 105, 5823, 5825, 32768, 8214, 99, 97, 108, 1024, 66, 76, 83, 84, 5837, 5842, 5848, 5859, 97, 114, 59, 32768, 8739, 105, 110, 101, 59, 32768, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 32768, 10072, 105, 108, 100, 101, 59, 32768, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 32768, 8202, 114, 59, 32896, 55349, 56601, 112, 102, 59, 32896, 55349, 56653, 99, 114, 59, 32896, 55349, 56497, 100, 97, 115, 104, 59, 32768, 8874, 1280, 99, 101, 102, 111, 115, 5913, 5919, 5925, 5930, 5936, 105, 114, 99, 59, 32768, 372, 100, 103, 101, 59, 32768, 8896, 114, 59, 32896, 55349, 56602, 112, 102, 59, 32896, 55349, 56654, 99, 114, 59, 32896, 55349, 56498, 1024, 102, 105, 111, 115, 5951, 5956, 5959, 5965, 114, 59, 32896, 55349, 56603, 59, 32768, 926, 112, 102, 59, 32896, 55349, 56655, 99, 114, 59, 32896, 55349, 56499, 2304, 65, 73, 85, 97, 99, 102, 111, 115, 117, 5990, 5995, 6000, 6005, 6014, 6027, 6032, 6038, 6044, 99, 121, 59, 32768, 1071, 99, 121, 59, 32768, 1031, 99, 121, 59, 32768, 1070, 99, 117, 116, 101, 33024, 221, 59, 32768, 221, 512, 105, 121, 6019, 6024, 114, 99, 59, 32768, 374, 59, 32768, 1067, 114, 59, 32896, 55349, 56604, 112, 102, 59, 32896, 55349, 56656, 99, 114, 59, 32896, 55349, 56500, 109, 108, 59, 32768, 376, 2048, 72, 97, 99, 100, 101, 102, 111, 115, 6066, 6071, 6078, 6092, 6097, 6119, 6123, 6128, 99, 121, 59, 32768, 1046, 99, 117, 116, 101, 59, 32768, 377, 512, 97, 121, 6083, 6089, 114, 111, 110, 59, 32768, 381, 59, 32768, 1047, 111, 116, 59, 32768, 379, 835, 6102, 0, 6116, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 32768, 8203, 97, 59, 32768, 918, 114, 59, 32768, 8488, 112, 102, 59, 32768, 8484, 99, 114, 59, 32896, 55349, 56501, 5938, 6159, 6168, 6175, 0, 6214, 6222, 6233, 0, 0, 0, 0, 6242, 6267, 6290, 6429, 6444, 0, 6495, 6503, 6531, 6540, 0, 6547, 99, 117, 116, 101, 33024, 225, 59, 32768, 225, 114, 101, 118, 101, 59, 32768, 259, 1536, 59, 69, 100, 105, 117, 121, 6187, 6189, 6193, 6196, 6203, 6210, 32768, 8766, 59, 32896, 8766, 819, 59, 32768, 8767, 114, 99, 33024, 226, 59, 32768, 226, 116, 101, 33024, 180, 59, 32768, 180, 59, 32768, 1072, 108, 105, 103, 33024, 230, 59, 32768, 230, 512, 59, 114, 6226, 6228, 32768, 8289, 59, 32896, 55349, 56606, 114, 97, 118, 101, 33024, 224, 59, 32768, 224, 512, 101, 112, 6246, 6261, 512, 102, 112, 6251, 6257, 115, 121, 109, 59, 32768, 8501, 104, 59, 32768, 8501, 104, 97, 59, 32768, 945, 512, 97, 112, 6271, 6284, 512, 99, 108, 6276, 6280, 114, 59, 32768, 257, 103, 59, 32768, 10815, 33024, 38, 59, 32768, 38, 1077, 6295, 0, 0, 6326, 1280, 59, 97, 100, 115, 118, 6305, 6307, 6312, 6315, 6322, 32768, 8743, 110, 100, 59, 32768, 10837, 59, 32768, 10844, 108, 111, 112, 101, 59, 32768, 10840, 59, 32768, 10842, 1792, 59, 101, 108, 109, 114, 115, 122, 6340, 6342, 6345, 6349, 6391, 6410, 6422, 32768, 8736, 59, 32768, 10660, 101, 59, 32768, 8736, 115, 100, 512, 59, 97, 6356, 6358, 32768, 8737, 2098, 6368, 6371, 6374, 6377, 6380, 6383, 6386, 6389, 59, 32768, 10664, 59, 32768, 10665, 59, 32768, 10666, 59, 32768, 10667, 59, 32768, 10668, 59, 32768, 10669, 59, 32768, 10670, 59, 32768, 10671, 116, 512, 59, 118, 6397, 6399, 32768, 8735, 98, 512, 59, 100, 6405, 6407, 32768, 8894, 59, 32768, 10653, 512, 112, 116, 6415, 6419, 104, 59, 32768, 8738, 59, 32768, 197, 97, 114, 114, 59, 32768, 9084, 512, 103, 112, 6433, 6438, 111, 110, 59, 32768, 261, 102, 59, 32896, 55349, 56658, 1792, 59, 69, 97, 101, 105, 111, 112, 6458, 6460, 6463, 6469, 6472, 6476, 6480, 32768, 8776, 59, 32768, 10864, 99, 105, 114, 59, 32768, 10863, 59, 32768, 8778, 100, 59, 32768, 8779, 115, 59, 32768, 39, 114, 111, 120, 512, 59, 101, 6488, 6490, 32768, 8776, 113, 59, 32768, 8778, 105, 110, 103, 33024, 229, 59, 32768, 229, 768, 99, 116, 121, 6509, 6514, 6517, 114, 59, 32896, 55349, 56502, 59, 32768, 42, 109, 112, 512, 59, 101, 6524, 6526, 32768, 8776, 113, 59, 32768, 8781, 105, 108, 100, 101, 33024, 227, 59, 32768, 227, 109, 108, 33024, 228, 59, 32768, 228, 512, 99, 105, 6551, 6559, 111, 110, 105, 110, 116, 59, 32768, 8755, 110, 116, 59, 32768, 10769, 4096, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 6597, 6602, 6673, 6688, 6701, 6707, 6768, 6773, 6891, 6898, 6999, 7023, 7309, 7316, 7334, 7383, 111, 116, 59, 32768, 10989, 512, 99, 114, 6607, 6652, 107, 1024, 99, 101, 112, 115, 6617, 6623, 6632, 6639, 111, 110, 103, 59, 32768, 8780, 112, 115, 105, 108, 111, 110, 59, 32768, 1014, 114, 105, 109, 101, 59, 32768, 8245, 105, 109, 512, 59, 101, 6646, 6648, 32768, 8765, 113, 59, 32768, 8909, 583, 6656, 6661, 101, 101, 59, 32768, 8893, 101, 100, 512, 59, 103, 6667, 6669, 32768, 8965, 101, 59, 32768, 8965, 114, 107, 512, 59, 116, 6680, 6682, 32768, 9141, 98, 114, 107, 59, 32768, 9142, 512, 111, 121, 6693, 6698, 110, 103, 59, 32768, 8780, 59, 32768, 1073, 113, 117, 111, 59, 32768, 8222, 1280, 99, 109, 112, 114, 116, 6718, 6731, 6738, 6743, 6749, 97, 117, 115, 512, 59, 101, 6726, 6728, 32768, 8757, 59, 32768, 8757, 112, 116, 121, 118, 59, 32768, 10672, 115, 105, 59, 32768, 1014, 110, 111, 117, 59, 32768, 8492, 768, 97, 104, 119, 6756, 6759, 6762, 59, 32768, 946, 59, 32768, 8502, 101, 101, 110, 59, 32768, 8812, 114, 59, 32896, 55349, 56607, 103, 1792, 99, 111, 115, 116, 117, 118, 119, 6789, 6809, 6834, 6850, 6872, 6879, 6884, 768, 97, 105, 117, 6796, 6800, 6805, 112, 59, 32768, 8898, 114, 99, 59, 32768, 9711, 112, 59, 32768, 8899, 768, 100, 112, 116, 6816, 6821, 6827, 111, 116, 59, 32768, 10752, 108, 117, 115, 59, 32768, 10753, 105, 109, 101, 115, 59, 32768, 10754, 1090, 6840, 0, 0, 6846, 99, 117, 112, 59, 32768, 10758, 97, 114, 59, 32768, 9733, 114, 105, 97, 110, 103, 108, 101, 512, 100, 117, 6862, 6868, 111, 119, 110, 59, 32768, 9661, 112, 59, 32768, 9651, 112, 108, 117, 115, 59, 32768, 10756, 101, 101, 59, 32768, 8897, 101, 100, 103, 101, 59, 32768, 8896, 97, 114, 111, 119, 59, 32768, 10509, 768, 97, 107, 111, 6905, 6976, 6994, 512, 99, 110, 6910, 6972, 107, 768, 108, 115, 116, 6918, 6927, 6935, 111, 122, 101, 110, 103, 101, 59, 32768, 10731, 113, 117, 97, 114, 101, 59, 32768, 9642, 114, 105, 97, 110, 103, 108, 101, 1024, 59, 100, 108, 114, 6951, 6953, 6959, 6965, 32768, 9652, 111, 119, 110, 59, 32768, 9662, 101, 102, 116, 59, 32768, 9666, 105, 103, 104, 116, 59, 32768, 9656, 107, 59, 32768, 9251, 770, 6981, 0, 6991, 771, 6985, 0, 6988, 59, 32768, 9618, 59, 32768, 9617, 52, 59, 32768, 9619, 99, 107, 59, 32768, 9608, 512, 101, 111, 7004, 7019, 512, 59, 113, 7009, 7012, 32896, 61, 8421, 117, 105, 118, 59, 32896, 8801, 8421, 116, 59, 32768, 8976, 1024, 112, 116, 119, 120, 7032, 7037, 7049, 7055, 102, 59, 32896, 55349, 56659, 512, 59, 116, 7042, 7044, 32768, 8869, 111, 109, 59, 32768, 8869, 116, 105, 101, 59, 32768, 8904, 3072, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7080, 7101, 7126, 7147, 7182, 7187, 7208, 7233, 7240, 7246, 7253, 7274, 1024, 76, 82, 108, 114, 7089, 7092, 7095, 7098, 59, 32768, 9559, 59, 32768, 9556, 59, 32768, 9558, 59, 32768, 9555, 1280, 59, 68, 85, 100, 117, 7112, 7114, 7117, 7120, 7123, 32768, 9552, 59, 32768, 9574, 59, 32768, 9577, 59, 32768, 9572, 59, 32768, 9575, 1024, 76, 82, 108, 114, 7135, 7138, 7141, 7144, 59, 32768, 9565, 59, 32768, 9562, 59, 32768, 9564, 59, 32768, 9561, 1792, 59, 72, 76, 82, 104, 108, 114, 7162, 7164, 7167, 7170, 7173, 7176, 7179, 32768, 9553, 59, 32768, 9580, 59, 32768, 9571, 59, 32768, 9568, 59, 32768, 9579, 59, 32768, 9570, 59, 32768, 9567, 111, 120, 59, 32768, 10697, 1024, 76, 82, 108, 114, 7196, 7199, 7202, 7205, 59, 32768, 9557, 59, 32768, 9554, 59, 32768, 9488, 59, 32768, 9484, 1280, 59, 68, 85, 100, 117, 7219, 7221, 7224, 7227, 7230, 32768, 9472, 59, 32768, 9573, 59, 32768, 9576, 59, 32768, 9516, 59, 32768, 9524, 105, 110, 117, 115, 59, 32768, 8863, 108, 117, 115, 59, 32768, 8862, 105, 109, 101, 115, 59, 32768, 8864, 1024, 76, 82, 108, 114, 7262, 7265, 7268, 7271, 59, 32768, 9563, 59, 32768, 9560, 59, 32768, 9496, 59, 32768, 9492, 1792, 59, 72, 76, 82, 104, 108, 114, 7289, 7291, 7294, 7297, 7300, 7303, 7306, 32768, 9474, 59, 32768, 9578, 59, 32768, 9569, 59, 32768, 9566, 59, 32768, 9532, 59, 32768, 9508, 59, 32768, 9500, 114, 105, 109, 101, 59, 32768, 8245, 512, 101, 118, 7321, 7326, 118, 101, 59, 32768, 728, 98, 97, 114, 33024, 166, 59, 32768, 166, 1024, 99, 101, 105, 111, 7343, 7348, 7353, 7364, 114, 59, 32896, 55349, 56503, 109, 105, 59, 32768, 8271, 109, 512, 59, 101, 7359, 7361, 32768, 8765, 59, 32768, 8909, 108, 768, 59, 98, 104, 7372, 7374, 7377, 32768, 92, 59, 32768, 10693, 115, 117, 98, 59, 32768, 10184, 573, 7387, 7399, 108, 512, 59, 101, 7392, 7394, 32768, 8226, 116, 59, 32768, 8226, 112, 768, 59, 69, 101, 7406, 7408, 7411, 32768, 8782, 59, 32768, 10926, 512, 59, 113, 7416, 7418, 32768, 8783, 59, 32768, 8783, 6450, 7448, 0, 7523, 7571, 7576, 7613, 0, 7618, 7647, 0, 0, 7764, 0, 0, 7779, 0, 0, 7899, 7914, 7949, 7955, 0, 8158, 0, 8176, 768, 99, 112, 114, 7454, 7460, 7509, 117, 116, 101, 59, 32768, 263, 1536, 59, 97, 98, 99, 100, 115, 7473, 7475, 7480, 7487, 7500, 7505, 32768, 8745, 110, 100, 59, 32768, 10820, 114, 99, 117, 112, 59, 32768, 10825, 512, 97, 117, 7492, 7496, 112, 59, 32768, 10827, 112, 59, 32768, 10823, 111, 116, 59, 32768, 10816, 59, 32896, 8745, 65024, 512, 101, 111, 7514, 7518, 116, 59, 32768, 8257, 110, 59, 32768, 711, 1024, 97, 101, 105, 117, 7531, 7544, 7552, 7557, 833, 7536, 0, 7540, 115, 59, 32768, 10829, 111, 110, 59, 32768, 269, 100, 105, 108, 33024, 231, 59, 32768, 231, 114, 99, 59, 32768, 265, 112, 115, 512, 59, 115, 7564, 7566, 32768, 10828, 109, 59, 32768, 10832, 111, 116, 59, 32768, 267, 768, 100, 109, 110, 7582, 7589, 7596, 105, 108, 33024, 184, 59, 32768, 184, 112, 116, 121, 118, 59, 32768, 10674, 116, 33280, 162, 59, 101, 7603, 7605, 32768, 162, 114, 100, 111, 116, 59, 32768, 183, 114, 59, 32896, 55349, 56608, 768, 99, 101, 105, 7624, 7628, 7643, 121, 59, 32768, 1095, 99, 107, 512, 59, 109, 7635, 7637, 32768, 10003, 97, 114, 107, 59, 32768, 10003, 59, 32768, 967, 114, 1792, 59, 69, 99, 101, 102, 109, 115, 7662, 7664, 7667, 7742, 7745, 7752, 7757, 32768, 9675, 59, 32768, 10691, 768, 59, 101, 108, 7674, 7676, 7680, 32768, 710, 113, 59, 32768, 8791, 101, 1074, 7687, 0, 0, 7709, 114, 114, 111, 119, 512, 108, 114, 7695, 7701, 101, 102, 116, 59, 32768, 8634, 105, 103, 104, 116, 59, 32768, 8635, 1280, 82, 83, 97, 99, 100, 7719, 7722, 7725, 7730, 7736, 59, 32768, 174, 59, 32768, 9416, 115, 116, 59, 32768, 8859, 105, 114, 99, 59, 32768, 8858, 97, 115, 104, 59, 32768, 8861, 59, 32768, 8791, 110, 105, 110, 116, 59, 32768, 10768, 105, 100, 59, 32768, 10991, 99, 105, 114, 59, 32768, 10690, 117, 98, 115, 512, 59, 117, 7771, 7773, 32768, 9827, 105, 116, 59, 32768, 9827, 1341, 7785, 7804, 7850, 0, 7871, 111, 110, 512, 59, 101, 7791, 7793, 32768, 58, 512, 59, 113, 7798, 7800, 32768, 8788, 59, 32768, 8788, 1086, 7809, 0, 0, 7820, 97, 512, 59, 116, 7814, 7816, 32768, 44, 59, 32768, 64, 768, 59, 102, 108, 7826, 7828, 7832, 32768, 8705, 110, 59, 32768, 8728, 101, 512, 109, 120, 7838, 7844, 101, 110, 116, 59, 32768, 8705, 101, 115, 59, 32768, 8450, 824, 7854, 0, 7866, 512, 59, 100, 7858, 7860, 32768, 8773, 111, 116, 59, 32768, 10861, 110, 116, 59, 32768, 8750, 768, 102, 114, 121, 7877, 7881, 7886, 59, 32896, 55349, 56660, 111, 100, 59, 32768, 8720, 33280, 169, 59, 115, 7892, 7894, 32768, 169, 114, 59, 32768, 8471, 512, 97, 111, 7903, 7908, 114, 114, 59, 32768, 8629, 115, 115, 59, 32768, 10007, 512, 99, 117, 7918, 7923, 114, 59, 32896, 55349, 56504, 512, 98, 112, 7928, 7938, 512, 59, 101, 7933, 7935, 32768, 10959, 59, 32768, 10961, 512, 59, 101, 7943, 7945, 32768, 10960, 59, 32768, 10962, 100, 111, 116, 59, 32768, 8943, 1792, 100, 101, 108, 112, 114, 118, 119, 7969, 7983, 7996, 8009, 8057, 8147, 8152, 97, 114, 114, 512, 108, 114, 7977, 7980, 59, 32768, 10552, 59, 32768, 10549, 1089, 7989, 0, 0, 7993, 114, 59, 32768, 8926, 99, 59, 32768, 8927, 97, 114, 114, 512, 59, 112, 8004, 8006, 32768, 8630, 59, 32768, 10557, 1536, 59, 98, 99, 100, 111, 115, 8022, 8024, 8031, 8044, 8049, 8053, 32768, 8746, 114, 99, 97, 112, 59, 32768, 10824, 512, 97, 117, 8036, 8040, 112, 59, 32768, 10822, 112, 59, 32768, 10826, 111, 116, 59, 32768, 8845, 114, 59, 32768, 10821, 59, 32896, 8746, 65024, 1024, 97, 108, 114, 118, 8066, 8078, 8116, 8123, 114, 114, 512, 59, 109, 8073, 8075, 32768, 8631, 59, 32768, 10556, 121, 768, 101, 118, 119, 8086, 8104, 8109, 113, 1089, 8093, 0, 0, 8099, 114, 101, 99, 59, 32768, 8926, 117, 99, 99, 59, 32768, 8927, 101, 101, 59, 32768, 8910, 101, 100, 103, 101, 59, 32768, 8911, 101, 110, 33024, 164, 59, 32768, 164, 101, 97, 114, 114, 111, 119, 512, 108, 114, 8134, 8140, 101, 102, 116, 59, 32768, 8630, 105, 103, 104, 116, 59, 32768, 8631, 101, 101, 59, 32768, 8910, 101, 100, 59, 32768, 8911, 512, 99, 105, 8162, 8170, 111, 110, 105, 110, 116, 59, 32768, 8754, 110, 116, 59, 32768, 8753, 108, 99, 116, 121, 59, 32768, 9005, 4864, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8221, 8226, 8231, 8267, 8282, 8296, 8327, 8351, 8366, 8379, 8466, 8471, 8487, 8621, 8647, 8676, 8697, 8712, 8720, 114, 114, 59, 32768, 8659, 97, 114, 59, 32768, 10597, 1024, 103, 108, 114, 115, 8240, 8246, 8252, 8256, 103, 101, 114, 59, 32768, 8224, 101, 116, 104, 59, 32768, 8504, 114, 59, 32768, 8595, 104, 512, 59, 118, 8262, 8264, 32768, 8208, 59, 32768, 8867, 572, 8271, 8278, 97, 114, 111, 119, 59, 32768, 10511, 97, 99, 59, 32768, 733, 512, 97, 121, 8287, 8293, 114, 111, 110, 59, 32768, 271, 59, 32768, 1076, 768, 59, 97, 111, 8303, 8305, 8320, 32768, 8518, 512, 103, 114, 8310, 8316, 103, 101, 114, 59, 32768, 8225, 114, 59, 32768, 8650, 116, 115, 101, 113, 59, 32768, 10871, 768, 103, 108, 109, 8334, 8339, 8344, 33024, 176, 59, 32768, 176, 116, 97, 59, 32768, 948, 112, 116, 121, 118, 59, 32768, 10673, 512, 105, 114, 8356, 8362, 115, 104, 116, 59, 32768, 10623, 59, 32896, 55349, 56609, 97, 114, 512, 108, 114, 8373, 8376, 59, 32768, 8643, 59, 32768, 8642, 1280, 97, 101, 103, 115, 118, 8390, 8418, 8421, 8428, 8433, 109, 768, 59, 111, 115, 8398, 8400, 8415, 32768, 8900, 110, 100, 512, 59, 115, 8407, 8409, 32768, 8900, 117, 105, 116, 59, 32768, 9830, 59, 32768, 9830, 59, 32768, 168, 97, 109, 109, 97, 59, 32768, 989, 105, 110, 59, 32768, 8946, 768, 59, 105, 111, 8440, 8442, 8461, 32768, 247, 100, 101, 33280, 247, 59, 111, 8450, 8452, 32768, 247, 110, 116, 105, 109, 101, 115, 59, 32768, 8903, 110, 120, 59, 32768, 8903, 99, 121, 59, 32768, 1106, 99, 1088, 8478, 0, 0, 8483, 114, 110, 59, 32768, 8990, 111, 112, 59, 32768, 8973, 1280, 108, 112, 116, 117, 119, 8498, 8504, 8509, 8556, 8570, 108, 97, 114, 59, 32768, 36, 102, 59, 32896, 55349, 56661, 1280, 59, 101, 109, 112, 115, 8520, 8522, 8535, 8542, 8548, 32768, 729, 113, 512, 59, 100, 8528, 8530, 32768, 8784, 111, 116, 59, 32768, 8785, 105, 110, 117, 115, 59, 32768, 8760, 108, 117, 115, 59, 32768, 8724, 113, 117, 97, 114, 101, 59, 32768, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 32768, 8966, 110, 768, 97, 100, 104, 8578, 8585, 8597, 114, 114, 111, 119, 59, 32768, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 32768, 8650, 97, 114, 112, 111, 111, 110, 512, 108, 114, 8608, 8614, 101, 102, 116, 59, 32768, 8643, 105, 103, 104, 116, 59, 32768, 8642, 563, 8625, 8633, 107, 97, 114, 111, 119, 59, 32768, 10512, 1088, 8638, 0, 0, 8643, 114, 110, 59, 32768, 8991, 111, 112, 59, 32768, 8972, 768, 99, 111, 116, 8654, 8666, 8670, 512, 114, 121, 8659, 8663, 59, 32896, 55349, 56505, 59, 32768, 1109, 108, 59, 32768, 10742, 114, 111, 107, 59, 32768, 273, 512, 100, 114, 8681, 8686, 111, 116, 59, 32768, 8945, 105, 512, 59, 102, 8692, 8694, 32768, 9663, 59, 32768, 9662, 512, 97, 104, 8702, 8707, 114, 114, 59, 32768, 8693, 97, 114, 59, 32768, 10607, 97, 110, 103, 108, 101, 59, 32768, 10662, 512, 99, 105, 8725, 8729, 121, 59, 32768, 1119, 103, 114, 97, 114, 114, 59, 32768, 10239, 4608, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 8774, 8788, 8807, 8844, 8849, 8852, 8866, 8895, 8929, 8977, 8989, 9004, 9046, 9136, 9151, 9171, 9184, 9199, 512, 68, 111, 8779, 8784, 111, 116, 59, 32768, 10871, 116, 59, 32768, 8785, 512, 99, 115, 8793, 8801, 117, 116, 101, 33024, 233, 59, 32768, 233, 116, 101, 114, 59, 32768, 10862, 1024, 97, 105, 111, 121, 8816, 8822, 8835, 8841, 114, 111, 110, 59, 32768, 283, 114, 512, 59, 99, 8828, 8830, 32768, 8790, 33024, 234, 59, 32768, 234, 108, 111, 110, 59, 32768, 8789, 59, 32768, 1101, 111, 116, 59, 32768, 279, 59, 32768, 8519, 512, 68, 114, 8857, 8862, 111, 116, 59, 32768, 8786, 59, 32896, 55349, 56610, 768, 59, 114, 115, 8873, 8875, 8883, 32768, 10906, 97, 118, 101, 33024, 232, 59, 32768, 232, 512, 59, 100, 8888, 8890, 32768, 10902, 111, 116, 59, 32768, 10904, 1024, 59, 105, 108, 115, 8904, 8906, 8914, 8917, 32768, 10905, 110, 116, 101, 114, 115, 59, 32768, 9191, 59, 32768, 8467, 512, 59, 100, 8922, 8924, 32768, 10901, 111, 116, 59, 32768, 10903, 768, 97, 112, 115, 8936, 8941, 8960, 99, 114, 59, 32768, 275, 116, 121, 768, 59, 115, 118, 8950, 8952, 8957, 32768, 8709, 101, 116, 59, 32768, 8709, 59, 32768, 8709, 112, 512, 49, 59, 8966, 8975, 516, 8970, 8973, 59, 32768, 8196, 59, 32768, 8197, 32768, 8195, 512, 103, 115, 8982, 8985, 59, 32768, 331, 112, 59, 32768, 8194, 512, 103, 112, 8994, 8999, 111, 110, 59, 32768, 281, 102, 59, 32896, 55349, 56662, 768, 97, 108, 115, 9011, 9023, 9028, 114, 512, 59, 115, 9017, 9019, 32768, 8917, 108, 59, 32768, 10723, 117, 115, 59, 32768, 10865, 105, 768, 59, 108, 118, 9036, 9038, 9043, 32768, 949, 111, 110, 59, 32768, 949, 59, 32768, 1013, 1024, 99, 115, 117, 118, 9055, 9071, 9099, 9128, 512, 105, 111, 9060, 9065, 114, 99, 59, 32768, 8790, 108, 111, 110, 59, 32768, 8789, 1082, 9077, 0, 0, 9081, 109, 59, 32768, 8770, 97, 110, 116, 512, 103, 108, 9088, 9093, 116, 114, 59, 32768, 10902, 101, 115, 115, 59, 32768, 10901, 768, 97, 101, 105, 9106, 9111, 9116, 108, 115, 59, 32768, 61, 115, 116, 59, 32768, 8799, 118, 512, 59, 68, 9122, 9124, 32768, 8801, 68, 59, 32768, 10872, 112, 97, 114, 115, 108, 59, 32768, 10725, 512, 68, 97, 9141, 9146, 111, 116, 59, 32768, 8787, 114, 114, 59, 32768, 10609, 768, 99, 100, 105, 9158, 9162, 9167, 114, 59, 32768, 8495, 111, 116, 59, 32768, 8784, 109, 59, 32768, 8770, 512, 97, 104, 9176, 9179, 59, 32768, 951, 33024, 240, 59, 32768, 240, 512, 109, 114, 9189, 9195, 108, 33024, 235, 59, 32768, 235, 111, 59, 32768, 8364, 768, 99, 105, 112, 9206, 9210, 9215, 108, 59, 32768, 33, 115, 116, 59, 32768, 8707, 512, 101, 111, 9220, 9230, 99, 116, 97, 116, 105, 111, 110, 59, 32768, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 32768, 8519, 4914, 9262, 0, 9276, 0, 9280, 9287, 0, 0, 9318, 9324, 0, 9331, 0, 9352, 9357, 9386, 0, 9395, 9497, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 32768, 8786, 121, 59, 32768, 1092, 109, 97, 108, 101, 59, 32768, 9792, 768, 105, 108, 114, 9293, 9299, 9313, 108, 105, 103, 59, 32768, 64259, 1082, 9305, 0, 0, 9309, 103, 59, 32768, 64256, 105, 103, 59, 32768, 64260, 59, 32896, 55349, 56611, 108, 105, 103, 59, 32768, 64257, 108, 105, 103, 59, 32896, 102, 106, 768, 97, 108, 116, 9337, 9341, 9346, 116, 59, 32768, 9837, 105, 103, 59, 32768, 64258, 110, 115, 59, 32768, 9649, 111, 102, 59, 32768, 402, 833, 9361, 0, 9366, 102, 59, 32896, 55349, 56663, 512, 97, 107, 9370, 9375, 108, 108, 59, 32768, 8704, 512, 59, 118, 9380, 9382, 32768, 8916, 59, 32768, 10969, 97, 114, 116, 105, 110, 116, 59, 32768, 10765, 512, 97, 111, 9399, 9491, 512, 99, 115, 9404, 9487, 1794, 9413, 9443, 9453, 9470, 9474, 0, 9484, 1795, 9421, 9426, 9429, 9434, 9437, 0, 9440, 33024, 189, 59, 32768, 189, 59, 32768, 8531, 33024, 188, 59, 32768, 188, 59, 32768, 8533, 59, 32768, 8537, 59, 32768, 8539, 772, 9447, 0, 9450, 59, 32768, 8532, 59, 32768, 8534, 1285, 9459, 9464, 0, 0, 9467, 33024, 190, 59, 32768, 190, 59, 32768, 8535, 59, 32768, 8540, 53, 59, 32768, 8536, 775, 9478, 0, 9481, 59, 32768, 8538, 59, 32768, 8541, 56, 59, 32768, 8542, 108, 59, 32768, 8260, 119, 110, 59, 32768, 8994, 99, 114, 59, 32896, 55349, 56507, 4352, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 9537, 9547, 9575, 9582, 9595, 9600, 9679, 9684, 9694, 9700, 9705, 9725, 9773, 9779, 9785, 9810, 9917, 512, 59, 108, 9542, 9544, 32768, 8807, 59, 32768, 10892, 768, 99, 109, 112, 9554, 9560, 9572, 117, 116, 101, 59, 32768, 501, 109, 97, 512, 59, 100, 9567, 9569, 32768, 947, 59, 32768, 989, 59, 32768, 10886, 114, 101, 118, 101, 59, 32768, 287, 512, 105, 121, 9587, 9592, 114, 99, 59, 32768, 285, 59, 32768, 1075, 111, 116, 59, 32768, 289, 1024, 59, 108, 113, 115, 9609, 9611, 9614, 9633, 32768, 8805, 59, 32768, 8923, 768, 59, 113, 115, 9621, 9623, 9626, 32768, 8805, 59, 32768, 8807, 108, 97, 110, 116, 59, 32768, 10878, 1024, 59, 99, 100, 108, 9642, 9644, 9648, 9667, 32768, 10878, 99, 59, 32768, 10921, 111, 116, 512, 59, 111, 9655, 9657, 32768, 10880, 512, 59, 108, 9662, 9664, 32768, 10882, 59, 32768, 10884, 512, 59, 101, 9672, 9675, 32896, 8923, 65024, 115, 59, 32768, 10900, 114, 59, 32896, 55349, 56612, 512, 59, 103, 9689, 9691, 32768, 8811, 59, 32768, 8921, 109, 101, 108, 59, 32768, 8503, 99, 121, 59, 32768, 1107, 1024, 59, 69, 97, 106, 9714, 9716, 9719, 9722, 32768, 8823, 59, 32768, 10898, 59, 32768, 10917, 59, 32768, 10916, 1024, 69, 97, 101, 115, 9734, 9737, 9751, 9768, 59, 32768, 8809, 112, 512, 59, 112, 9743, 9745, 32768, 10890, 114, 111, 120, 59, 32768, 10890, 512, 59, 113, 9756, 9758, 32768, 10888, 512, 59, 113, 9763, 9765, 32768, 10888, 59, 32768, 8809, 105, 109, 59, 32768, 8935, 112, 102, 59, 32896, 55349, 56664, 97, 118, 101, 59, 32768, 96, 512, 99, 105, 9790, 9794, 114, 59, 32768, 8458, 109, 768, 59, 101, 108, 9802, 9804, 9807, 32768, 8819, 59, 32768, 10894, 59, 32768, 10896, 34304, 62, 59, 99, 100, 108, 113, 114, 9824, 9826, 9838, 9843, 9849, 9856, 32768, 62, 512, 99, 105, 9831, 9834, 59, 32768, 10919, 114, 59, 32768, 10874, 111, 116, 59, 32768, 8919, 80, 97, 114, 59, 32768, 10645, 117, 101, 115, 116, 59, 32768, 10876, 1280, 97, 100, 101, 108, 115, 9867, 9882, 9887, 9906, 9912, 833, 9872, 0, 9879, 112, 114, 111, 120, 59, 32768, 10886, 114, 59, 32768, 10616, 111, 116, 59, 32768, 8919, 113, 512, 108, 113, 9893, 9899, 101, 115, 115, 59, 32768, 8923, 108, 101, 115, 115, 59, 32768, 10892, 101, 115, 115, 59, 32768, 8823, 105, 109, 59, 32768, 8819, 512, 101, 110, 9922, 9932, 114, 116, 110, 101, 113, 113, 59, 32896, 8809, 65024, 69, 59, 32896, 8809, 65024, 2560, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 9958, 9963, 10015, 10020, 10026, 10060, 10065, 10085, 10147, 10171, 114, 114, 59, 32768, 8660, 1024, 105, 108, 109, 114, 9972, 9978, 9982, 9988, 114, 115, 112, 59, 32768, 8202, 102, 59, 32768, 189, 105, 108, 116, 59, 32768, 8459, 512, 100, 114, 9993, 9998, 99, 121, 59, 32768, 1098, 768, 59, 99, 119, 10005, 10007, 10012, 32768, 8596, 105, 114, 59, 32768, 10568, 59, 32768, 8621, 97, 114, 59, 32768, 8463, 105, 114, 99, 59, 32768, 293, 768, 97, 108, 114, 10033, 10048, 10054, 114, 116, 115, 512, 59, 117, 10041, 10043, 32768, 9829, 105, 116, 59, 32768, 9829, 108, 105, 112, 59, 32768, 8230, 99, 111, 110, 59, 32768, 8889, 114, 59, 32896, 55349, 56613, 115, 512, 101, 119, 10071, 10078, 97, 114, 111, 119, 59, 32768, 10533, 97, 114, 111, 119, 59, 32768, 10534, 1280, 97, 109, 111, 112, 114, 10096, 10101, 10107, 10136, 10141, 114, 114, 59, 32768, 8703, 116, 104, 116, 59, 32768, 8763, 107, 512, 108, 114, 10113, 10124, 101, 102, 116, 97, 114, 114, 111, 119, 59, 32768, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8618, 102, 59, 32896, 55349, 56665, 98, 97, 114, 59, 32768, 8213, 768, 99, 108, 116, 10154, 10159, 10165, 114, 59, 32896, 55349, 56509, 97, 115, 104, 59, 32768, 8463, 114, 111, 107, 59, 32768, 295, 512, 98, 112, 10176, 10182, 117, 108, 108, 59, 32768, 8259, 104, 101, 110, 59, 32768, 8208, 5426, 10211, 0, 10220, 0, 10239, 10255, 10267, 0, 10276, 10312, 0, 0, 10318, 10371, 10458, 10485, 10491, 0, 10500, 10545, 10558, 99, 117, 116, 101, 33024, 237, 59, 32768, 237, 768, 59, 105, 121, 10226, 10228, 10235, 32768, 8291, 114, 99, 33024, 238, 59, 32768, 238, 59, 32768, 1080, 512, 99, 120, 10243, 10247, 121, 59, 32768, 1077, 99, 108, 33024, 161, 59, 32768, 161, 512, 102, 114, 10259, 10262, 59, 32768, 8660, 59, 32896, 55349, 56614, 114, 97, 118, 101, 33024, 236, 59, 32768, 236, 1024, 59, 105, 110, 111, 10284, 10286, 10300, 10306, 32768, 8520, 512, 105, 110, 10291, 10296, 110, 116, 59, 32768, 10764, 116, 59, 32768, 8749, 102, 105, 110, 59, 32768, 10716, 116, 97, 59, 32768, 8489, 108, 105, 103, 59, 32768, 307, 768, 97, 111, 112, 10324, 10361, 10365, 768, 99, 103, 116, 10331, 10335, 10357, 114, 59, 32768, 299, 768, 101, 108, 112, 10342, 10345, 10351, 59, 32768, 8465, 105, 110, 101, 59, 32768, 8464, 97, 114, 116, 59, 32768, 8465, 104, 59, 32768, 305, 102, 59, 32768, 8887, 101, 100, 59, 32768, 437, 1280, 59, 99, 102, 111, 116, 10381, 10383, 10389, 10403, 10409, 32768, 8712, 97, 114, 101, 59, 32768, 8453, 105, 110, 512, 59, 116, 10396, 10398, 32768, 8734, 105, 101, 59, 32768, 10717, 100, 111, 116, 59, 32768, 305, 1280, 59, 99, 101, 108, 112, 10420, 10422, 10427, 10444, 10451, 32768, 8747, 97, 108, 59, 32768, 8890, 512, 103, 114, 10432, 10438, 101, 114, 115, 59, 32768, 8484, 99, 97, 108, 59, 32768, 8890, 97, 114, 104, 107, 59, 32768, 10775, 114, 111, 100, 59, 32768, 10812, 1024, 99, 103, 112, 116, 10466, 10470, 10475, 10480, 121, 59, 32768, 1105, 111, 110, 59, 32768, 303, 102, 59, 32896, 55349, 56666, 97, 59, 32768, 953, 114, 111, 100, 59, 32768, 10812, 117, 101, 115, 116, 33024, 191, 59, 32768, 191, 512, 99, 105, 10504, 10509, 114, 59, 32896, 55349, 56510, 110, 1280, 59, 69, 100, 115, 118, 10521, 10523, 10526, 10531, 10541, 32768, 8712, 59, 32768, 8953, 111, 116, 59, 32768, 8949, 512, 59, 118, 10536, 10538, 32768, 8948, 59, 32768, 8947, 59, 32768, 8712, 512, 59, 105, 10549, 10551, 32768, 8290, 108, 100, 101, 59, 32768, 297, 828, 10562, 0, 10567, 99, 121, 59, 32768, 1110, 108, 33024, 239, 59, 32768, 239, 1536, 99, 102, 109, 111, 115, 117, 10585, 10598, 10603, 10609, 10615, 10630, 512, 105, 121, 10590, 10595, 114, 99, 59, 32768, 309, 59, 32768, 1081, 114, 59, 32896, 55349, 56615, 97, 116, 104, 59, 32768, 567, 112, 102, 59, 32896, 55349, 56667, 820, 10620, 0, 10625, 114, 59, 32896, 55349, 56511, 114, 99, 121, 59, 32768, 1112, 107, 99, 121, 59, 32768, 1108, 2048, 97, 99, 102, 103, 104, 106, 111, 115, 10653, 10666, 10680, 10685, 10692, 10697, 10702, 10708, 112, 112, 97, 512, 59, 118, 10661, 10663, 32768, 954, 59, 32768, 1008, 512, 101, 121, 10671, 10677, 100, 105, 108, 59, 32768, 311, 59, 32768, 1082, 114, 59, 32896, 55349, 56616, 114, 101, 101, 110, 59, 32768, 312, 99, 121, 59, 32768, 1093, 99, 121, 59, 32768, 1116, 112, 102, 59, 32896, 55349, 56668, 99, 114, 59, 32896, 55349, 56512, 5888, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 10761, 10783, 10789, 10799, 10804, 10957, 11011, 11047, 11094, 11349, 11372, 11382, 11409, 11414, 11451, 11478, 11526, 11698, 11711, 11755, 11823, 11910, 11929, 768, 97, 114, 116, 10768, 10773, 10777, 114, 114, 59, 32768, 8666, 114, 59, 32768, 8656, 97, 105, 108, 59, 32768, 10523, 97, 114, 114, 59, 32768, 10510, 512, 59, 103, 10794, 10796, 32768, 8806, 59, 32768, 10891, 97, 114, 59, 32768, 10594, 4660, 10824, 0, 10830, 0, 10838, 0, 0, 0, 0, 0, 10844, 10850, 0, 10867, 10870, 10877, 0, 10933, 117, 116, 101, 59, 32768, 314, 109, 112, 116, 121, 118, 59, 32768, 10676, 114, 97, 110, 59, 32768, 8466, 98, 100, 97, 59, 32768, 955, 103, 768, 59, 100, 108, 10857, 10859, 10862, 32768, 10216, 59, 32768, 10641, 101, 59, 32768, 10216, 59, 32768, 10885, 117, 111, 33024, 171, 59, 32768, 171, 114, 2048, 59, 98, 102, 104, 108, 112, 115, 116, 10894, 10896, 10907, 10911, 10915, 10919, 10923, 10928, 32768, 8592, 512, 59, 102, 10901, 10903, 32768, 8676, 115, 59, 32768, 10527, 115, 59, 32768, 10525, 107, 59, 32768, 8617, 112, 59, 32768, 8619, 108, 59, 32768, 10553, 105, 109, 59, 32768, 10611, 108, 59, 32768, 8610, 768, 59, 97, 101, 10939, 10941, 10946, 32768, 10923, 105, 108, 59, 32768, 10521, 512, 59, 115, 10951, 10953, 32768, 10925, 59, 32896, 10925, 65024, 768, 97, 98, 114, 10964, 10969, 10974, 114, 114, 59, 32768, 10508, 114, 107, 59, 32768, 10098, 512, 97, 107, 10979, 10991, 99, 512, 101, 107, 10985, 10988, 59, 32768, 123, 59, 32768, 91, 512, 101, 115, 10996, 10999, 59, 32768, 10635, 108, 512, 100, 117, 11005, 11008, 59, 32768, 10639, 59, 32768, 10637, 1024, 97, 101, 117, 121, 11020, 11026, 11040, 11044, 114, 111, 110, 59, 32768, 318, 512, 100, 105, 11031, 11036, 105, 108, 59, 32768, 316, 108, 59, 32768, 8968, 98, 59, 32768, 123, 59, 32768, 1083, 1024, 99, 113, 114, 115, 11056, 11060, 11072, 11090, 97, 59, 32768, 10550, 117, 111, 512, 59, 114, 11067, 11069, 32768, 8220, 59, 32768, 8222, 512, 100, 117, 11077, 11083, 104, 97, 114, 59, 32768, 10599, 115, 104, 97, 114, 59, 32768, 10571, 104, 59, 32768, 8626, 1280, 59, 102, 103, 113, 115, 11105, 11107, 11228, 11231, 11250, 32768, 8804, 116, 1280, 97, 104, 108, 114, 116, 11119, 11136, 11157, 11169, 11216, 114, 114, 111, 119, 512, 59, 116, 11128, 11130, 32768, 8592, 97, 105, 108, 59, 32768, 8610, 97, 114, 112, 111, 111, 110, 512, 100, 117, 11147, 11153, 111, 119, 110, 59, 32768, 8637, 112, 59, 32768, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 32768, 8647, 105, 103, 104, 116, 768, 97, 104, 115, 11180, 11194, 11204, 114, 114, 111, 119, 512, 59, 115, 11189, 11191, 32768, 8596, 59, 32768, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 32768, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 32768, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 32768, 8907, 59, 32768, 8922, 768, 59, 113, 115, 11238, 11240, 11243, 32768, 8804, 59, 32768, 8806, 108, 97, 110, 116, 59, 32768, 10877, 1280, 59, 99, 100, 103, 115, 11261, 11263, 11267, 11286, 11298, 32768, 10877, 99, 59, 32768, 10920, 111, 116, 512, 59, 111, 11274, 11276, 32768, 10879, 512, 59, 114, 11281, 11283, 32768, 10881, 59, 32768, 10883, 512, 59, 101, 11291, 11294, 32896, 8922, 65024, 115, 59, 32768, 10899, 1280, 97, 100, 101, 103, 115, 11309, 11317, 11322, 11339, 11344, 112, 112, 114, 111, 120, 59, 32768, 10885, 111, 116, 59, 32768, 8918, 113, 512, 103, 113, 11328, 11333, 116, 114, 59, 32768, 8922, 103, 116, 114, 59, 32768, 10891, 116, 114, 59, 32768, 8822, 105, 109, 59, 32768, 8818, 768, 105, 108, 114, 11356, 11362, 11368, 115, 104, 116, 59, 32768, 10620, 111, 111, 114, 59, 32768, 8970, 59, 32896, 55349, 56617, 512, 59, 69, 11377, 11379, 32768, 8822, 59, 32768, 10897, 562, 11386, 11405, 114, 512, 100, 117, 11391, 11394, 59, 32768, 8637, 512, 59, 108, 11399, 11401, 32768, 8636, 59, 32768, 10602, 108, 107, 59, 32768, 9604, 99, 121, 59, 32768, 1113, 1280, 59, 97, 99, 104, 116, 11425, 11427, 11432, 11440, 11446, 32768, 8810, 114, 114, 59, 32768, 8647, 111, 114, 110, 101, 114, 59, 32768, 8990, 97, 114, 100, 59, 32768, 10603, 114, 105, 59, 32768, 9722, 512, 105, 111, 11456, 11462, 100, 111, 116, 59, 32768, 320, 117, 115, 116, 512, 59, 97, 11470, 11472, 32768, 9136, 99, 104, 101, 59, 32768, 9136, 1024, 69, 97, 101, 115, 11487, 11490, 11504, 11521, 59, 32768, 8808, 112, 512, 59, 112, 11496, 11498, 32768, 10889, 114, 111, 120, 59, 32768, 10889, 512, 59, 113, 11509, 11511, 32768, 10887, 512, 59, 113, 11516, 11518, 32768, 10887, 59, 32768, 8808, 105, 109, 59, 32768, 8934, 2048, 97, 98, 110, 111, 112, 116, 119, 122, 11543, 11556, 11561, 11616, 11640, 11660, 11667, 11680, 512, 110, 114, 11548, 11552, 103, 59, 32768, 10220, 114, 59, 32768, 8701, 114, 107, 59, 32768, 10214, 103, 768, 108, 109, 114, 11569, 11596, 11604, 101, 102, 116, 512, 97, 114, 11577, 11584, 114, 114, 111, 119, 59, 32768, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10231, 97, 112, 115, 116, 111, 59, 32768, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 10230, 112, 97, 114, 114, 111, 119, 512, 108, 114, 11627, 11633, 101, 102, 116, 59, 32768, 8619, 105, 103, 104, 116, 59, 32768, 8620, 768, 97, 102, 108, 11647, 11651, 11655, 114, 59, 32768, 10629, 59, 32896, 55349, 56669, 117, 115, 59, 32768, 10797, 105, 109, 101, 115, 59, 32768, 10804, 562, 11671, 11676, 115, 116, 59, 32768, 8727, 97, 114, 59, 32768, 95, 768, 59, 101, 102, 11687, 11689, 11695, 32768, 9674, 110, 103, 101, 59, 32768, 9674, 59, 32768, 10731, 97, 114, 512, 59, 108, 11705, 11707, 32768, 40, 116, 59, 32768, 10643, 1280, 97, 99, 104, 109, 116, 11722, 11727, 11735, 11747, 11750, 114, 114, 59, 32768, 8646, 111, 114, 110, 101, 114, 59, 32768, 8991, 97, 114, 512, 59, 100, 11742, 11744, 32768, 8651, 59, 32768, 10605, 59, 32768, 8206, 114, 105, 59, 32768, 8895, 1536, 97, 99, 104, 105, 113, 116, 11768, 11774, 11779, 11782, 11798, 11817, 113, 117, 111, 59, 32768, 8249, 114, 59, 32896, 55349, 56513, 59, 32768, 8624, 109, 768, 59, 101, 103, 11790, 11792, 11795, 32768, 8818, 59, 32768, 10893, 59, 32768, 10895, 512, 98, 117, 11803, 11806, 59, 32768, 91, 111, 512, 59, 114, 11812, 11814, 32768, 8216, 59, 32768, 8218, 114, 111, 107, 59, 32768, 322, 34816, 60, 59, 99, 100, 104, 105, 108, 113, 114, 11841, 11843, 11855, 11860, 11866, 11872, 11878, 11885, 32768, 60, 512, 99, 105, 11848, 11851, 59, 32768, 10918, 114, 59, 32768, 10873, 111, 116, 59, 32768, 8918, 114, 101, 101, 59, 32768, 8907, 109, 101, 115, 59, 32768, 8905, 97, 114, 114, 59, 32768, 10614, 117, 101, 115, 116, 59, 32768, 10875, 512, 80, 105, 11890, 11895, 97, 114, 59, 32768, 10646, 768, 59, 101, 102, 11902, 11904, 11907, 32768, 9667, 59, 32768, 8884, 59, 32768, 9666, 114, 512, 100, 117, 11916, 11923, 115, 104, 97, 114, 59, 32768, 10570, 104, 97, 114, 59, 32768, 10598, 512, 101, 110, 11934, 11944, 114, 116, 110, 101, 113, 113, 59, 32896, 8808, 65024, 69, 59, 32896, 8808, 65024, 3584, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 11978, 11984, 12061, 12075, 12081, 12095, 12100, 12104, 12170, 12181, 12188, 12204, 12207, 12223, 68, 111, 116, 59, 32768, 8762, 1024, 99, 108, 112, 114, 11993, 11999, 12019, 12055, 114, 33024, 175, 59, 32768, 175, 512, 101, 116, 12004, 12007, 59, 32768, 9794, 512, 59, 101, 12012, 12014, 32768, 10016, 115, 101, 59, 32768, 10016, 512, 59, 115, 12024, 12026, 32768, 8614, 116, 111, 1024, 59, 100, 108, 117, 12037, 12039, 12045, 12051, 32768, 8614, 111, 119, 110, 59, 32768, 8615, 101, 102, 116, 59, 32768, 8612, 112, 59, 32768, 8613, 107, 101, 114, 59, 32768, 9646, 512, 111, 121, 12066, 12072, 109, 109, 97, 59, 32768, 10793, 59, 32768, 1084, 97, 115, 104, 59, 32768, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 32768, 8737, 114, 59, 32896, 55349, 56618, 111, 59, 32768, 8487, 768, 99, 100, 110, 12111, 12118, 12146, 114, 111, 33024, 181, 59, 32768, 181, 1024, 59, 97, 99, 100, 12127, 12129, 12134, 12139, 32768, 8739, 115, 116, 59, 32768, 42, 105, 114, 59, 32768, 10992, 111, 116, 33024, 183, 59, 32768, 183, 117, 115, 768, 59, 98, 100, 12155, 12157, 12160, 32768, 8722, 59, 32768, 8863, 512, 59, 117, 12165, 12167, 32768, 8760, 59, 32768, 10794, 564, 12174, 12178, 112, 59, 32768, 10971, 114, 59, 32768, 8230, 112, 108, 117, 115, 59, 32768, 8723, 512, 100, 112, 12193, 12199, 101, 108, 115, 59, 32768, 8871, 102, 59, 32896, 55349, 56670, 59, 32768, 8723, 512, 99, 116, 12212, 12217, 114, 59, 32896, 55349, 56514, 112, 111, 115, 59, 32768, 8766, 768, 59, 108, 109, 12230, 12232, 12240, 32768, 956, 116, 105, 109, 97, 112, 59, 32768, 8888, 97, 112, 59, 32768, 8888, 6144, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 12294, 12315, 12364, 12376, 12393, 12472, 12496, 12547, 12553, 12636, 12641, 12703, 12725, 12747, 12752, 12876, 12881, 12957, 13033, 13089, 13294, 13359, 13384, 13499, 512, 103, 116, 12299, 12303, 59, 32896, 8921, 824, 512, 59, 118, 12308, 12311, 32896, 8811, 8402, 59, 32896, 8811, 824, 768, 101, 108, 116, 12322, 12348, 12352, 102, 116, 512, 97, 114, 12329, 12336, 114, 114, 111, 119, 59, 32768, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8654, 59, 32896, 8920, 824, 512, 59, 118, 12357, 12360, 32896, 8810, 8402, 59, 32896, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8655, 512, 68, 100, 12381, 12387, 97, 115, 104, 59, 32768, 8879, 97, 115, 104, 59, 32768, 8878, 1280, 98, 99, 110, 112, 116, 12404, 12409, 12415, 12420, 12452, 108, 97, 59, 32768, 8711, 117, 116, 101, 59, 32768, 324, 103, 59, 32896, 8736, 8402, 1280, 59, 69, 105, 111, 112, 12431, 12433, 12437, 12442, 12446, 32768, 8777, 59, 32896, 10864, 824, 100, 59, 32896, 8779, 824, 115, 59, 32768, 329, 114, 111, 120, 59, 32768, 8777, 117, 114, 512, 59, 97, 12459, 12461, 32768, 9838, 108, 512, 59, 115, 12467, 12469, 32768, 9838, 59, 32768, 8469, 836, 12477, 0, 12483, 112, 33024, 160, 59, 32768, 160, 109, 112, 512, 59, 101, 12489, 12492, 32896, 8782, 824, 59, 32896, 8783, 824, 1280, 97, 101, 111, 117, 121, 12507, 12519, 12525, 12540, 12544, 833, 12512, 0, 12515, 59, 32768, 10819, 111, 110, 59, 32768, 328, 100, 105, 108, 59, 32768, 326, 110, 103, 512, 59, 100, 12532, 12534, 32768, 8775, 111, 116, 59, 32896, 10861, 824, 112, 59, 32768, 10818, 59, 32768, 1085, 97, 115, 104, 59, 32768, 8211, 1792, 59, 65, 97, 100, 113, 115, 120, 12568, 12570, 12575, 12596, 12602, 12608, 12623, 32768, 8800, 114, 114, 59, 32768, 8663, 114, 512, 104, 114, 12581, 12585, 107, 59, 32768, 10532, 512, 59, 111, 12590, 12592, 32768, 8599, 119, 59, 32768, 8599, 111, 116, 59, 32896, 8784, 824, 117, 105, 118, 59, 32768, 8802, 512, 101, 105, 12613, 12618, 97, 114, 59, 32768, 10536, 109, 59, 32896, 8770, 824, 105, 115, 116, 512, 59, 115, 12631, 12633, 32768, 8708, 59, 32768, 8708, 114, 59, 32896, 55349, 56619, 1024, 69, 101, 115, 116, 12650, 12654, 12688, 12693, 59, 32896, 8807, 824, 768, 59, 113, 115, 12661, 12663, 12684, 32768, 8817, 768, 59, 113, 115, 12670, 12672, 12676, 32768, 8817, 59, 32896, 8807, 824, 108, 97, 110, 116, 59, 32896, 10878, 824, 59, 32896, 10878, 824, 105, 109, 59, 32768, 8821, 512, 59, 114, 12698, 12700, 32768, 8815, 59, 32768, 8815, 768, 65, 97, 112, 12710, 12715, 12720, 114, 114, 59, 32768, 8654, 114, 114, 59, 32768, 8622, 97, 114, 59, 32768, 10994, 768, 59, 115, 118, 12732, 12734, 12744, 32768, 8715, 512, 59, 100, 12739, 12741, 32768, 8956, 59, 32768, 8954, 59, 32768, 8715, 99, 121, 59, 32768, 1114, 1792, 65, 69, 97, 100, 101, 115, 116, 12767, 12772, 12776, 12781, 12785, 12853, 12858, 114, 114, 59, 32768, 8653, 59, 32896, 8806, 824, 114, 114, 59, 32768, 8602, 114, 59, 32768, 8229, 1024, 59, 102, 113, 115, 12794, 12796, 12821, 12842, 32768, 8816, 116, 512, 97, 114, 12802, 12809, 114, 114, 111, 119, 59, 32768, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8622, 768, 59, 113, 115, 12828, 12830, 12834, 32768, 8816, 59, 32896, 8806, 824, 108, 97, 110, 116, 59, 32896, 10877, 824, 512, 59, 115, 12847, 12850, 32896, 10877, 824, 59, 32768, 8814, 105, 109, 59, 32768, 8820, 512, 59, 114, 12863, 12865, 32768, 8814, 105, 512, 59, 101, 12871, 12873, 32768, 8938, 59, 32768, 8940, 105, 100, 59, 32768, 8740, 512, 112, 116, 12886, 12891, 102, 59, 32896, 55349, 56671, 33536, 172, 59, 105, 110, 12899, 12901, 12936, 32768, 172, 110, 1024, 59, 69, 100, 118, 12911, 12913, 12917, 12923, 32768, 8713, 59, 32896, 8953, 824, 111, 116, 59, 32896, 8949, 824, 818, 12928, 12931, 12934, 59, 32768, 8713, 59, 32768, 8951, 59, 32768, 8950, 105, 512, 59, 118, 12942, 12944, 32768, 8716, 818, 12949, 12952, 12955, 59, 32768, 8716, 59, 32768, 8958, 59, 32768, 8957, 768, 97, 111, 114, 12964, 12992, 12999, 114, 1024, 59, 97, 115, 116, 12974, 12976, 12983, 12988, 32768, 8742, 108, 108, 101, 108, 59, 32768, 8742, 108, 59, 32896, 11005, 8421, 59, 32896, 8706, 824, 108, 105, 110, 116, 59, 32768, 10772, 768, 59, 99, 101, 13006, 13008, 13013, 32768, 8832, 117, 101, 59, 32768, 8928, 512, 59, 99, 13018, 13021, 32896, 10927, 824, 512, 59, 101, 13026, 13028, 32768, 8832, 113, 59, 32896, 10927, 824, 1024, 65, 97, 105, 116, 13042, 13047, 13066, 13077, 114, 114, 59, 32768, 8655, 114, 114, 768, 59, 99, 119, 13056, 13058, 13062, 32768, 8603, 59, 32896, 10547, 824, 59, 32896, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8603, 114, 105, 512, 59, 101, 13084, 13086, 32768, 8939, 59, 32768, 8941, 1792, 99, 104, 105, 109, 112, 113, 117, 13104, 13128, 13151, 13169, 13174, 13179, 13194, 1024, 59, 99, 101, 114, 13113, 13115, 13120, 13124, 32768, 8833, 117, 101, 59, 32768, 8929, 59, 32896, 10928, 824, 59, 32896, 55349, 56515, 111, 114, 116, 1086, 13137, 0, 0, 13142, 105, 100, 59, 32768, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 32768, 8742, 109, 512, 59, 101, 13157, 13159, 32768, 8769, 512, 59, 113, 13164, 13166, 32768, 8772, 59, 32768, 8772, 105, 100, 59, 32768, 8740, 97, 114, 59, 32768, 8742, 115, 117, 512, 98, 112, 13186, 13190, 101, 59, 32768, 8930, 101, 59, 32768, 8931, 768, 98, 99, 112, 13201, 13241, 13254, 1024, 59, 69, 101, 115, 13210, 13212, 13216, 13219, 32768, 8836, 59, 32896, 10949, 824, 59, 32768, 8840, 101, 116, 512, 59, 101, 13226, 13229, 32896, 8834, 8402, 113, 512, 59, 113, 13235, 13237, 32768, 8840, 59, 32896, 10949, 824, 99, 512, 59, 101, 13247, 13249, 32768, 8833, 113, 59, 32896, 10928, 824, 1024, 59, 69, 101, 115, 13263, 13265, 13269, 13272, 32768, 8837, 59, 32896, 10950, 824, 59, 32768, 8841, 101, 116, 512, 59, 101, 13279, 13282, 32896, 8835, 8402, 113, 512, 59, 113, 13288, 13290, 32768, 8841, 59, 32896, 10950, 824, 1024, 103, 105, 108, 114, 13303, 13307, 13315, 13319, 108, 59, 32768, 8825, 108, 100, 101, 33024, 241, 59, 32768, 241, 103, 59, 32768, 8824, 105, 97, 110, 103, 108, 101, 512, 108, 114, 13330, 13344, 101, 102, 116, 512, 59, 101, 13338, 13340, 32768, 8938, 113, 59, 32768, 8940, 105, 103, 104, 116, 512, 59, 101, 13353, 13355, 32768, 8939, 113, 59, 32768, 8941, 512, 59, 109, 13364, 13366, 32768, 957, 768, 59, 101, 115, 13373, 13375, 13380, 32768, 35, 114, 111, 59, 32768, 8470, 112, 59, 32768, 8199, 2304, 68, 72, 97, 100, 103, 105, 108, 114, 115, 13403, 13409, 13415, 13420, 13426, 13439, 13446, 13476, 13493, 97, 115, 104, 59, 32768, 8877, 97, 114, 114, 59, 32768, 10500, 112, 59, 32896, 8781, 8402, 97, 115, 104, 59, 32768, 8876, 512, 101, 116, 13431, 13435, 59, 32896, 8805, 8402, 59, 32896, 62, 8402, 110, 102, 105, 110, 59, 32768, 10718, 768, 65, 101, 116, 13453, 13458, 13462, 114, 114, 59, 32768, 10498, 59, 32896, 8804, 8402, 512, 59, 114, 13467, 13470, 32896, 60, 8402, 105, 101, 59, 32896, 8884, 8402, 512, 65, 116, 13481, 13486, 114, 114, 59, 32768, 10499, 114, 105, 101, 59, 32896, 8885, 8402, 105, 109, 59, 32896, 8764, 8402, 768, 65, 97, 110, 13506, 13511, 13532, 114, 114, 59, 32768, 8662, 114, 512, 104, 114, 13517, 13521, 107, 59, 32768, 10531, 512, 59, 111, 13526, 13528, 32768, 8598, 119, 59, 32768, 8598, 101, 97, 114, 59, 32768, 10535, 9252, 13576, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13579, 0, 13596, 13617, 13653, 13659, 13673, 13695, 13708, 0, 0, 13713, 13750, 0, 13788, 13794, 0, 13815, 13890, 13913, 13937, 13944, 59, 32768, 9416, 512, 99, 115, 13583, 13591, 117, 116, 101, 33024, 243, 59, 32768, 243, 116, 59, 32768, 8859, 512, 105, 121, 13600, 13613, 114, 512, 59, 99, 13606, 13608, 32768, 8858, 33024, 244, 59, 32768, 244, 59, 32768, 1086, 1280, 97, 98, 105, 111, 115, 13627, 13632, 13638, 13642, 13646, 115, 104, 59, 32768, 8861, 108, 97, 99, 59, 32768, 337, 118, 59, 32768, 10808, 116, 59, 32768, 8857, 111, 108, 100, 59, 32768, 10684, 108, 105, 103, 59, 32768, 339, 512, 99, 114, 13663, 13668, 105, 114, 59, 32768, 10687, 59, 32896, 55349, 56620, 1600, 13680, 0, 0, 13684, 0, 13692, 110, 59, 32768, 731, 97, 118, 101, 33024, 242, 59, 32768, 242, 59, 32768, 10689, 512, 98, 109, 13699, 13704, 97, 114, 59, 32768, 10677, 59, 32768, 937, 110, 116, 59, 32768, 8750, 1024, 97, 99, 105, 116, 13721, 13726, 13741, 13746, 114, 114, 59, 32768, 8634, 512, 105, 114, 13731, 13735, 114, 59, 32768, 10686, 111, 115, 115, 59, 32768, 10683, 110, 101, 59, 32768, 8254, 59, 32768, 10688, 768, 97, 101, 105, 13756, 13761, 13766, 99, 114, 59, 32768, 333, 103, 97, 59, 32768, 969, 768, 99, 100, 110, 13773, 13779, 13782, 114, 111, 110, 59, 32768, 959, 59, 32768, 10678, 117, 115, 59, 32768, 8854, 112, 102, 59, 32896, 55349, 56672, 768, 97, 101, 108, 13800, 13804, 13809, 114, 59, 32768, 10679, 114, 112, 59, 32768, 10681, 117, 115, 59, 32768, 8853, 1792, 59, 97, 100, 105, 111, 115, 118, 13829, 13831, 13836, 13869, 13875, 13879, 13886, 32768, 8744, 114, 114, 59, 32768, 8635, 1024, 59, 101, 102, 109, 13845, 13847, 13859, 13864, 32768, 10845, 114, 512, 59, 111, 13853, 13855, 32768, 8500, 102, 59, 32768, 8500, 33024, 170, 59, 32768, 170, 33024, 186, 59, 32768, 186, 103, 111, 102, 59, 32768, 8886, 114, 59, 32768, 10838, 108, 111, 112, 101, 59, 32768, 10839, 59, 32768, 10843, 768, 99, 108, 111, 13896, 13900, 13908, 114, 59, 32768, 8500, 97, 115, 104, 33024, 248, 59, 32768, 248, 108, 59, 32768, 8856, 105, 573, 13917, 13924, 100, 101, 33024, 245, 59, 32768, 245, 101, 115, 512, 59, 97, 13930, 13932, 32768, 8855, 115, 59, 32768, 10806, 109, 108, 33024, 246, 59, 32768, 246, 98, 97, 114, 59, 32768, 9021, 5426, 13972, 0, 14013, 0, 14017, 14053, 0, 14058, 14086, 0, 0, 14107, 14199, 0, 14202, 0, 0, 14229, 14425, 0, 14438, 114, 1024, 59, 97, 115, 116, 13981, 13983, 13997, 14009, 32768, 8741, 33280, 182, 59, 108, 13989, 13991, 32768, 182, 108, 101, 108, 59, 32768, 8741, 1082, 14003, 0, 0, 14007, 109, 59, 32768, 10995, 59, 32768, 11005, 59, 32768, 8706, 121, 59, 32768, 1087, 114, 1280, 99, 105, 109, 112, 116, 14028, 14033, 14038, 14043, 14046, 110, 116, 59, 32768, 37, 111, 100, 59, 32768, 46, 105, 108, 59, 32768, 8240, 59, 32768, 8869, 101, 110, 107, 59, 32768, 8241, 114, 59, 32896, 55349, 56621, 768, 105, 109, 111, 14064, 14074, 14080, 512, 59, 118, 14069, 14071, 32768, 966, 59, 32768, 981, 109, 97, 116, 59, 32768, 8499, 110, 101, 59, 32768, 9742, 768, 59, 116, 118, 14092, 14094, 14103, 32768, 960, 99, 104, 102, 111, 114, 107, 59, 32768, 8916, 59, 32768, 982, 512, 97, 117, 14111, 14132, 110, 512, 99, 107, 14117, 14128, 107, 512, 59, 104, 14123, 14125, 32768, 8463, 59, 32768, 8462, 118, 59, 32768, 8463, 115, 2304, 59, 97, 98, 99, 100, 101, 109, 115, 116, 14152, 14154, 14160, 14163, 14168, 14179, 14182, 14188, 14193, 32768, 43, 99, 105, 114, 59, 32768, 10787, 59, 32768, 8862, 105, 114, 59, 32768, 10786, 512, 111, 117, 14173, 14176, 59, 32768, 8724, 59, 32768, 10789, 59, 32768, 10866, 110, 33024, 177, 59, 32768, 177, 105, 109, 59, 32768, 10790, 119, 111, 59, 32768, 10791, 59, 32768, 177, 768, 105, 112, 117, 14208, 14216, 14221, 110, 116, 105, 110, 116, 59, 32768, 10773, 102, 59, 32896, 55349, 56673, 110, 100, 33024, 163, 59, 32768, 163, 2560, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 14249, 14251, 14254, 14258, 14263, 14336, 14348, 14367, 14413, 14418, 32768, 8826, 59, 32768, 10931, 112, 59, 32768, 10935, 117, 101, 59, 32768, 8828, 512, 59, 99, 14268, 14270, 32768, 10927, 1536, 59, 97, 99, 101, 110, 115, 14283, 14285, 14293, 14302, 14306, 14331, 32768, 8826, 112, 112, 114, 111, 120, 59, 32768, 10935, 117, 114, 108, 121, 101, 113, 59, 32768, 8828, 113, 59, 32768, 10927, 768, 97, 101, 115, 14313, 14321, 14326, 112, 112, 114, 111, 120, 59, 32768, 10937, 113, 113, 59, 32768, 10933, 105, 109, 59, 32768, 8936, 105, 109, 59, 32768, 8830, 109, 101, 512, 59, 115, 14343, 14345, 32768, 8242, 59, 32768, 8473, 768, 69, 97, 115, 14355, 14358, 14362, 59, 32768, 10933, 112, 59, 32768, 10937, 105, 109, 59, 32768, 8936, 768, 100, 102, 112, 14374, 14377, 14402, 59, 32768, 8719, 768, 97, 108, 115, 14384, 14390, 14396, 108, 97, 114, 59, 32768, 9006, 105, 110, 101, 59, 32768, 8978, 117, 114, 102, 59, 32768, 8979, 512, 59, 116, 14407, 14409, 32768, 8733, 111, 59, 32768, 8733, 105, 109, 59, 32768, 8830, 114, 101, 108, 59, 32768, 8880, 512, 99, 105, 14429, 14434, 114, 59, 32896, 55349, 56517, 59, 32768, 968, 110, 99, 115, 112, 59, 32768, 8200, 1536, 102, 105, 111, 112, 115, 117, 14457, 14462, 14467, 14473, 14480, 14486, 114, 59, 32896, 55349, 56622, 110, 116, 59, 32768, 10764, 112, 102, 59, 32896, 55349, 56674, 114, 105, 109, 101, 59, 32768, 8279, 99, 114, 59, 32896, 55349, 56518, 768, 97, 101, 111, 14493, 14513, 14526, 116, 512, 101, 105, 14499, 14508, 114, 110, 105, 111, 110, 115, 59, 32768, 8461, 110, 116, 59, 32768, 10774, 115, 116, 512, 59, 101, 14520, 14522, 32768, 63, 113, 59, 32768, 8799, 116, 33024, 34, 59, 32768, 34, 5376, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 14575, 14597, 14603, 14608, 14775, 14829, 14865, 14901, 14943, 14966, 15000, 15139, 15159, 15176, 15182, 15236, 15261, 15267, 15309, 15352, 15360, 768, 97, 114, 116, 14582, 14587, 14591, 114, 114, 59, 32768, 8667, 114, 59, 32768, 8658, 97, 105, 108, 59, 32768, 10524, 97, 114, 114, 59, 32768, 10511, 97, 114, 59, 32768, 10596, 1792, 99, 100, 101, 110, 113, 114, 116, 14623, 14637, 14642, 14650, 14672, 14679, 14751, 512, 101, 117, 14628, 14632, 59, 32896, 8765, 817, 116, 101, 59, 32768, 341, 105, 99, 59, 32768, 8730, 109, 112, 116, 121, 118, 59, 32768, 10675, 103, 1024, 59, 100, 101, 108, 14660, 14662, 14665, 14668, 32768, 10217, 59, 32768, 10642, 59, 32768, 10661, 101, 59, 32768, 10217, 117, 111, 33024, 187, 59, 32768, 187, 114, 2816, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 14703, 14705, 14709, 14720, 14723, 14727, 14731, 14735, 14739, 14744, 14748, 32768, 8594, 112, 59, 32768, 10613, 512, 59, 102, 14714, 14716, 32768, 8677, 115, 59, 32768, 10528, 59, 32768, 10547, 115, 59, 32768, 10526, 107, 59, 32768, 8618, 112, 59, 32768, 8620, 108, 59, 32768, 10565, 105, 109, 59, 32768, 10612, 108, 59, 32768, 8611, 59, 32768, 8605, 512, 97, 105, 14756, 14761, 105, 108, 59, 32768, 10522, 111, 512, 59, 110, 14767, 14769, 32768, 8758, 97, 108, 115, 59, 32768, 8474, 768, 97, 98, 114, 14782, 14787, 14792, 114, 114, 59, 32768, 10509, 114, 107, 59, 32768, 10099, 512, 97, 107, 14797, 14809, 99, 512, 101, 107, 14803, 14806, 59, 32768, 125, 59, 32768, 93, 512, 101, 115, 14814, 14817, 59, 32768, 10636, 108, 512, 100, 117, 14823, 14826, 59, 32768, 10638, 59, 32768, 10640, 1024, 97, 101, 117, 121, 14838, 14844, 14858, 14862, 114, 111, 110, 59, 32768, 345, 512, 100, 105, 14849, 14854, 105, 108, 59, 32768, 343, 108, 59, 32768, 8969, 98, 59, 32768, 125, 59, 32768, 1088, 1024, 99, 108, 113, 115, 14874, 14878, 14885, 14897, 97, 59, 32768, 10551, 100, 104, 97, 114, 59, 32768, 10601, 117, 111, 512, 59, 114, 14892, 14894, 32768, 8221, 59, 32768, 8221, 104, 59, 32768, 8627, 768, 97, 99, 103, 14908, 14934, 14938, 108, 1024, 59, 105, 112, 115, 14918, 14920, 14925, 14931, 32768, 8476, 110, 101, 59, 32768, 8475, 97, 114, 116, 59, 32768, 8476, 59, 32768, 8477, 116, 59, 32768, 9645, 33024, 174, 59, 32768, 174, 768, 105, 108, 114, 14950, 14956, 14962, 115, 104, 116, 59, 32768, 10621, 111, 111, 114, 59, 32768, 8971, 59, 32896, 55349, 56623, 512, 97, 111, 14971, 14990, 114, 512, 100, 117, 14977, 14980, 59, 32768, 8641, 512, 59, 108, 14985, 14987, 32768, 8640, 59, 32768, 10604, 512, 59, 118, 14995, 14997, 32768, 961, 59, 32768, 1009, 768, 103, 110, 115, 15007, 15123, 15127, 104, 116, 1536, 97, 104, 108, 114, 115, 116, 15022, 15039, 15060, 15086, 15099, 15111, 114, 114, 111, 119, 512, 59, 116, 15031, 15033, 32768, 8594, 97, 105, 108, 59, 32768, 8611, 97, 114, 112, 111, 111, 110, 512, 100, 117, 15050, 15056, 111, 119, 110, 59, 32768, 8641, 112, 59, 32768, 8640, 101, 102, 116, 512, 97, 104, 15068, 15076, 114, 114, 111, 119, 115, 59, 32768, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 32768, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 32768, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 32768, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 32768, 8908, 103, 59, 32768, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 32768, 8787, 768, 97, 104, 109, 15146, 15151, 15156, 114, 114, 59, 32768, 8644, 97, 114, 59, 32768, 8652, 59, 32768, 8207, 111, 117, 115, 116, 512, 59, 97, 15168, 15170, 32768, 9137, 99, 104, 101, 59, 32768, 9137, 109, 105, 100, 59, 32768, 10990, 1024, 97, 98, 112, 116, 15191, 15204, 15209, 15229, 512, 110, 114, 15196, 15200, 103, 59, 32768, 10221, 114, 59, 32768, 8702, 114, 107, 59, 32768, 10215, 768, 97, 102, 108, 15216, 15220, 15224, 114, 59, 32768, 10630, 59, 32896, 55349, 56675, 117, 115, 59, 32768, 10798, 105, 109, 101, 115, 59, 32768, 10805, 512, 97, 112, 15241, 15253, 114, 512, 59, 103, 15247, 15249, 32768, 41, 116, 59, 32768, 10644, 111, 108, 105, 110, 116, 59, 32768, 10770, 97, 114, 114, 59, 32768, 8649, 1024, 97, 99, 104, 113, 15276, 15282, 15287, 15290, 113, 117, 111, 59, 32768, 8250, 114, 59, 32896, 55349, 56519, 59, 32768, 8625, 512, 98, 117, 15295, 15298, 59, 32768, 93, 111, 512, 59, 114, 15304, 15306, 32768, 8217, 59, 32768, 8217, 768, 104, 105, 114, 15316, 15322, 15328, 114, 101, 101, 59, 32768, 8908, 109, 101, 115, 59, 32768, 8906, 105, 1024, 59, 101, 102, 108, 15338, 15340, 15343, 15346, 32768, 9657, 59, 32768, 8885, 59, 32768, 9656, 116, 114, 105, 59, 32768, 10702, 108, 117, 104, 97, 114, 59, 32768, 10600, 59, 32768, 8478, 6706, 15391, 15398, 15404, 15499, 15516, 15592, 0, 15606, 15660, 0, 0, 15752, 15758, 0, 15827, 15863, 15886, 16000, 16006, 16038, 16086, 0, 16467, 0, 0, 16506, 99, 117, 116, 101, 59, 32768, 347, 113, 117, 111, 59, 32768, 8218, 2560, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 15424, 15426, 15429, 15441, 15446, 15458, 15463, 15482, 15490, 15495, 32768, 8827, 59, 32768, 10932, 833, 15434, 0, 15437, 59, 32768, 10936, 111, 110, 59, 32768, 353, 117, 101, 59, 32768, 8829, 512, 59, 100, 15451, 15453, 32768, 10928, 105, 108, 59, 32768, 351, 114, 99, 59, 32768, 349, 768, 69, 97, 115, 15470, 15473, 15477, 59, 32768, 10934, 112, 59, 32768, 10938, 105, 109, 59, 32768, 8937, 111, 108, 105, 110, 116, 59, 32768, 10771, 105, 109, 59, 32768, 8831, 59, 32768, 1089, 111, 116, 768, 59, 98, 101, 15507, 15509, 15512, 32768, 8901, 59, 32768, 8865, 59, 32768, 10854, 1792, 65, 97, 99, 109, 115, 116, 120, 15530, 15535, 15556, 15562, 15566, 15572, 15587, 114, 114, 59, 32768, 8664, 114, 512, 104, 114, 15541, 15545, 107, 59, 32768, 10533, 512, 59, 111, 15550, 15552, 32768, 8600, 119, 59, 32768, 8600, 116, 33024, 167, 59, 32768, 167, 105, 59, 32768, 59, 119, 97, 114, 59, 32768, 10537, 109, 512, 105, 110, 15578, 15584, 110, 117, 115, 59, 32768, 8726, 59, 32768, 8726, 116, 59, 32768, 10038, 114, 512, 59, 111, 15597, 15600, 32896, 55349, 56624, 119, 110, 59, 32768, 8994, 1024, 97, 99, 111, 121, 15614, 15619, 15632, 15654, 114, 112, 59, 32768, 9839, 512, 104, 121, 15624, 15629, 99, 121, 59, 32768, 1097, 59, 32768, 1096, 114, 116, 1086, 15640, 0, 0, 15645, 105, 100, 59, 32768, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 32768, 8741, 33024, 173, 59, 32768, 173, 512, 103, 109, 15664, 15681, 109, 97, 768, 59, 102, 118, 15673, 15675, 15678, 32768, 963, 59, 32768, 962, 59, 32768, 962, 2048, 59, 100, 101, 103, 108, 110, 112, 114, 15698, 15700, 15705, 15715, 15725, 15735, 15739, 15745, 32768, 8764, 111, 116, 59, 32768, 10858, 512, 59, 113, 15710, 15712, 32768, 8771, 59, 32768, 8771, 512, 59, 69, 15720, 15722, 32768, 10910, 59, 32768, 10912, 512, 59, 69, 15730, 15732, 32768, 10909, 59, 32768, 10911, 101, 59, 32768, 8774, 108, 117, 115, 59, 32768, 10788, 97, 114, 114, 59, 32768, 10610, 97, 114, 114, 59, 32768, 8592, 1024, 97, 101, 105, 116, 15766, 15788, 15796, 15808, 512, 108, 115, 15771, 15783, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 32768, 8726, 104, 112, 59, 32768, 10803, 112, 97, 114, 115, 108, 59, 32768, 10724, 512, 100, 108, 15801, 15804, 59, 32768, 8739, 101, 59, 32768, 8995, 512, 59, 101, 15813, 15815, 32768, 10922, 512, 59, 115, 15820, 15822, 32768, 10924, 59, 32896, 10924, 65024, 768, 102, 108, 112, 15833, 15839, 15857, 116, 99, 121, 59, 32768, 1100, 512, 59, 98, 15844, 15846, 32768, 47, 512, 59, 97, 15851, 15853, 32768, 10692, 114, 59, 32768, 9023, 102, 59, 32896, 55349, 56676, 97, 512, 100, 114, 15868, 15882, 101, 115, 512, 59, 117, 15875, 15877, 32768, 9824, 105, 116, 59, 32768, 9824, 59, 32768, 8741, 768, 99, 115, 117, 15892, 15921, 15977, 512, 97, 117, 15897, 15909, 112, 512, 59, 115, 15903, 15905, 32768, 8851, 59, 32896, 8851, 65024, 112, 512, 59, 115, 15915, 15917, 32768, 8852, 59, 32896, 8852, 65024, 117, 512, 98, 112, 15927, 15952, 768, 59, 101, 115, 15934, 15936, 15939, 32768, 8847, 59, 32768, 8849, 101, 116, 512, 59, 101, 15946, 15948, 32768, 8847, 113, 59, 32768, 8849, 768, 59, 101, 115, 15959, 15961, 15964, 32768, 8848, 59, 32768, 8850, 101, 116, 512, 59, 101, 15971, 15973, 32768, 8848, 113, 59, 32768, 8850, 768, 59, 97, 102, 15984, 15986, 15996, 32768, 9633, 114, 566, 15991, 15994, 59, 32768, 9633, 59, 32768, 9642, 59, 32768, 9642, 97, 114, 114, 59, 32768, 8594, 1024, 99, 101, 109, 116, 16014, 16019, 16025, 16031, 114, 59, 32896, 55349, 56520, 116, 109, 110, 59, 32768, 8726, 105, 108, 101, 59, 32768, 8995, 97, 114, 102, 59, 32768, 8902, 512, 97, 114, 16042, 16053, 114, 512, 59, 102, 16048, 16050, 32768, 9734, 59, 32768, 9733, 512, 97, 110, 16058, 16081, 105, 103, 104, 116, 512, 101, 112, 16067, 16076, 112, 115, 105, 108, 111, 110, 59, 32768, 1013, 104, 105, 59, 32768, 981, 115, 59, 32768, 175, 1280, 98, 99, 109, 110, 112, 16096, 16221, 16288, 16291, 16295, 2304, 59, 69, 100, 101, 109, 110, 112, 114, 115, 16115, 16117, 16120, 16125, 16137, 16143, 16154, 16160, 16166, 32768, 8834, 59, 32768, 10949, 111, 116, 59, 32768, 10941, 512, 59, 100, 16130, 16132, 32768, 8838, 111, 116, 59, 32768, 10947, 117, 108, 116, 59, 32768, 10945, 512, 69, 101, 16148, 16151, 59, 32768, 10955, 59, 32768, 8842, 108, 117, 115, 59, 32768, 10943, 97, 114, 114, 59, 32768, 10617, 768, 101, 105, 117, 16173, 16206, 16210, 116, 768, 59, 101, 110, 16181, 16183, 16194, 32768, 8834, 113, 512, 59, 113, 16189, 16191, 32768, 8838, 59, 32768, 10949, 101, 113, 512, 59, 113, 16201, 16203, 32768, 8842, 59, 32768, 10955, 109, 59, 32768, 10951, 512, 98, 112, 16215, 16218, 59, 32768, 10965, 59, 32768, 10963, 99, 1536, 59, 97, 99, 101, 110, 115, 16235, 16237, 16245, 16254, 16258, 16283, 32768, 8827, 112, 112, 114, 111, 120, 59, 32768, 10936, 117, 114, 108, 121, 101, 113, 59, 32768, 8829, 113, 59, 32768, 10928, 768, 97, 101, 115, 16265, 16273, 16278, 112, 112, 114, 111, 120, 59, 32768, 10938, 113, 113, 59, 32768, 10934, 105, 109, 59, 32768, 8937, 105, 109, 59, 32768, 8831, 59, 32768, 8721, 103, 59, 32768, 9834, 3328, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 16322, 16327, 16332, 16337, 16339, 16342, 16356, 16368, 16382, 16388, 16394, 16405, 16411, 33024, 185, 59, 32768, 185, 33024, 178, 59, 32768, 178, 33024, 179, 59, 32768, 179, 32768, 8835, 59, 32768, 10950, 512, 111, 115, 16347, 16351, 116, 59, 32768, 10942, 117, 98, 59, 32768, 10968, 512, 59, 100, 16361, 16363, 32768, 8839, 111, 116, 59, 32768, 10948, 115, 512, 111, 117, 16374, 16378, 108, 59, 32768, 10185, 98, 59, 32768, 10967, 97, 114, 114, 59, 32768, 10619, 117, 108, 116, 59, 32768, 10946, 512, 69, 101, 16399, 16402, 59, 32768, 10956, 59, 32768, 8843, 108, 117, 115, 59, 32768, 10944, 768, 101, 105, 117, 16418, 16451, 16455, 116, 768, 59, 101, 110, 16426, 16428, 16439, 32768, 8835, 113, 512, 59, 113, 16434, 16436, 32768, 8839, 59, 32768, 10950, 101, 113, 512, 59, 113, 16446, 16448, 32768, 8843, 59, 32768, 10956, 109, 59, 32768, 10952, 512, 98, 112, 16460, 16463, 59, 32768, 10964, 59, 32768, 10966, 768, 65, 97, 110, 16473, 16478, 16499, 114, 114, 59, 32768, 8665, 114, 512, 104, 114, 16484, 16488, 107, 59, 32768, 10534, 512, 59, 111, 16493, 16495, 32768, 8601, 119, 59, 32768, 8601, 119, 97, 114, 59, 32768, 10538, 108, 105, 103, 33024, 223, 59, 32768, 223, 5938, 16538, 16552, 16557, 16579, 16584, 16591, 0, 16596, 16692, 0, 0, 0, 0, 0, 16731, 16780, 0, 16787, 16908, 0, 0, 0, 16938, 1091, 16543, 0, 0, 16549, 103, 101, 116, 59, 32768, 8982, 59, 32768, 964, 114, 107, 59, 32768, 9140, 768, 97, 101, 121, 16563, 16569, 16575, 114, 111, 110, 59, 32768, 357, 100, 105, 108, 59, 32768, 355, 59, 32768, 1090, 111, 116, 59, 32768, 8411, 108, 114, 101, 99, 59, 32768, 8981, 114, 59, 32896, 55349, 56625, 1024, 101, 105, 107, 111, 16604, 16641, 16670, 16684, 835, 16609, 0, 16624, 101, 512, 52, 102, 16614, 16617, 59, 32768, 8756, 111, 114, 101, 59, 32768, 8756, 97, 768, 59, 115, 118, 16631, 16633, 16638, 32768, 952, 121, 109, 59, 32768, 977, 59, 32768, 977, 512, 99, 110, 16646, 16665, 107, 512, 97, 115, 16652, 16660, 112, 112, 114, 111, 120, 59, 32768, 8776, 105, 109, 59, 32768, 8764, 115, 112, 59, 32768, 8201, 512, 97, 115, 16675, 16679, 112, 59, 32768, 8776, 105, 109, 59, 32768, 8764, 114, 110, 33024, 254, 59, 32768, 254, 829, 16696, 16701, 16727, 100, 101, 59, 32768, 732, 101, 115, 33536, 215, 59, 98, 100, 16710, 16712, 16723, 32768, 215, 512, 59, 97, 16717, 16719, 32768, 8864, 114, 59, 32768, 10801, 59, 32768, 10800, 116, 59, 32768, 8749, 768, 101, 112, 115, 16737, 16741, 16775, 97, 59, 32768, 10536, 1024, 59, 98, 99, 102, 16750, 16752, 16757, 16762, 32768, 8868, 111, 116, 59, 32768, 9014, 105, 114, 59, 32768, 10993, 512, 59, 111, 16767, 16770, 32896, 55349, 56677, 114, 107, 59, 32768, 10970, 97, 59, 32768, 10537, 114, 105, 109, 101, 59, 32768, 8244, 768, 97, 105, 112, 16793, 16798, 16899, 100, 101, 59, 32768, 8482, 1792, 97, 100, 101, 109, 112, 115, 116, 16813, 16868, 16873, 16876, 16883, 16889, 16893, 110, 103, 108, 101, 1280, 59, 100, 108, 113, 114, 16828, 16830, 16836, 16850, 16853, 32768, 9653, 111, 119, 110, 59, 32768, 9663, 101, 102, 116, 512, 59, 101, 16844, 16846, 32768, 9667, 113, 59, 32768, 8884, 59, 32768, 8796, 105, 103, 104, 116, 512, 59, 101, 16862, 16864, 32768, 9657, 113, 59, 32768, 8885, 111, 116, 59, 32768, 9708, 59, 32768, 8796, 105, 110, 117, 115, 59, 32768, 10810, 108, 117, 115, 59, 32768, 10809, 98, 59, 32768, 10701, 105, 109, 101, 59, 32768, 10811, 101, 122, 105, 117, 109, 59, 32768, 9186, 768, 99, 104, 116, 16914, 16926, 16931, 512, 114, 121, 16919, 16923, 59, 32896, 55349, 56521, 59, 32768, 1094, 99, 121, 59, 32768, 1115, 114, 111, 107, 59, 32768, 359, 512, 105, 111, 16942, 16947, 120, 116, 59, 32768, 8812, 104, 101, 97, 100, 512, 108, 114, 16956, 16967, 101, 102, 116, 97, 114, 114, 111, 119, 59, 32768, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 32768, 8608, 4608, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 17016, 17021, 17026, 17043, 17057, 17072, 17095, 17110, 17119, 17139, 17172, 17187, 17202, 17290, 17330, 17336, 17365, 17381, 114, 114, 59, 32768, 8657, 97, 114, 59, 32768, 10595, 512, 99, 114, 17031, 17039, 117, 116, 101, 33024, 250, 59, 32768, 250, 114, 59, 32768, 8593, 114, 820, 17049, 0, 17053, 121, 59, 32768, 1118, 118, 101, 59, 32768, 365, 512, 105, 121, 17062, 17069, 114, 99, 33024, 251, 59, 32768, 251, 59, 32768, 1091, 768, 97, 98, 104, 17079, 17084, 17090, 114, 114, 59, 32768, 8645, 108, 97, 99, 59, 32768, 369, 97, 114, 59, 32768, 10606, 512, 105, 114, 17100, 17106, 115, 104, 116, 59, 32768, 10622, 59, 32896, 55349, 56626, 114, 97, 118, 101, 33024, 249, 59, 32768, 249, 562, 17123, 17135, 114, 512, 108, 114, 17128, 17131, 59, 32768, 8639, 59, 32768, 8638, 108, 107, 59, 32768, 9600, 512, 99, 116, 17144, 17167, 1088, 17150, 0, 0, 17163, 114, 110, 512, 59, 101, 17156, 17158, 32768, 8988, 114, 59, 32768, 8988, 111, 112, 59, 32768, 8975, 114, 105, 59, 32768, 9720, 512, 97, 108, 17177, 17182, 99, 114, 59, 32768, 363, 33024, 168, 59, 32768, 168, 512, 103, 112, 17192, 17197, 111, 110, 59, 32768, 371, 102, 59, 32896, 55349, 56678, 1536, 97, 100, 104, 108, 115, 117, 17215, 17222, 17233, 17257, 17262, 17280, 114, 114, 111, 119, 59, 32768, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 32768, 8597, 97, 114, 112, 111, 111, 110, 512, 108, 114, 17244, 17250, 101, 102, 116, 59, 32768, 8639, 105, 103, 104, 116, 59, 32768, 8638, 117, 115, 59, 32768, 8846, 105, 768, 59, 104, 108, 17270, 17272, 17275, 32768, 965, 59, 32768, 978, 111, 110, 59, 32768, 965, 112, 97, 114, 114, 111, 119, 115, 59, 32768, 8648, 768, 99, 105, 116, 17297, 17320, 17325, 1088, 17303, 0, 0, 17316, 114, 110, 512, 59, 101, 17309, 17311, 32768, 8989, 114, 59, 32768, 8989, 111, 112, 59, 32768, 8974, 110, 103, 59, 32768, 367, 114, 105, 59, 32768, 9721, 99, 114, 59, 32896, 55349, 56522, 768, 100, 105, 114, 17343, 17348, 17354, 111, 116, 59, 32768, 8944, 108, 100, 101, 59, 32768, 361, 105, 512, 59, 102, 17360, 17362, 32768, 9653, 59, 32768, 9652, 512, 97, 109, 17370, 17375, 114, 114, 59, 32768, 8648, 108, 33024, 252, 59, 32768, 252, 97, 110, 103, 108, 101, 59, 32768, 10663, 3840, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 17420, 17425, 17437, 17443, 17613, 17617, 17623, 17667, 17672, 17678, 17693, 17699, 17705, 17711, 17754, 114, 114, 59, 32768, 8661, 97, 114, 512, 59, 118, 17432, 17434, 32768, 10984, 59, 32768, 10985, 97, 115, 104, 59, 32768, 8872, 512, 110, 114, 17448, 17454, 103, 114, 116, 59, 32768, 10652, 1792, 101, 107, 110, 112, 114, 115, 116, 17469, 17478, 17485, 17494, 17515, 17526, 17578, 112, 115, 105, 108, 111, 110, 59, 32768, 1013, 97, 112, 112, 97, 59, 32768, 1008, 111, 116, 104, 105, 110, 103, 59, 32768, 8709, 768, 104, 105, 114, 17501, 17505, 17508, 105, 59, 32768, 981, 59, 32768, 982, 111, 112, 116, 111, 59, 32768, 8733, 512, 59, 104, 17520, 17522, 32768, 8597, 111, 59, 32768, 1009, 512, 105, 117, 17531, 17537, 103, 109, 97, 59, 32768, 962, 512, 98, 112, 17542, 17560, 115, 101, 116, 110, 101, 113, 512, 59, 113, 17553, 17556, 32896, 8842, 65024, 59, 32896, 10955, 65024, 115, 101, 116, 110, 101, 113, 512, 59, 113, 17571, 17574, 32896, 8843, 65024, 59, 32896, 10956, 65024, 512, 104, 114, 17583, 17589, 101, 116, 97, 59, 32768, 977, 105, 97, 110, 103, 108, 101, 512, 108, 114, 17600, 17606, 101, 102, 116, 59, 32768, 8882, 105, 103, 104, 116, 59, 32768, 8883, 121, 59, 32768, 1074, 97, 115, 104, 59, 32768, 8866, 768, 101, 108, 114, 17630, 17648, 17654, 768, 59, 98, 101, 17637, 17639, 17644, 32768, 8744, 97, 114, 59, 32768, 8891, 113, 59, 32768, 8794, 108, 105, 112, 59, 32768, 8942, 512, 98, 116, 17659, 17664, 97, 114, 59, 32768, 124, 59, 32768, 124, 114, 59, 32896, 55349, 56627, 116, 114, 105, 59, 32768, 8882, 115, 117, 512, 98, 112, 17685, 17689, 59, 32896, 8834, 8402, 59, 32896, 8835, 8402, 112, 102, 59, 32896, 55349, 56679, 114, 111, 112, 59, 32768, 8733, 116, 114, 105, 59, 32768, 8883, 512, 99, 117, 17716, 17721, 114, 59, 32896, 55349, 56523, 512, 98, 112, 17726, 17740, 110, 512, 69, 101, 17732, 17736, 59, 32896, 10955, 65024, 59, 32896, 8842, 65024, 110, 512, 69, 101, 17746, 17750, 59, 32896, 10956, 65024, 59, 32896, 8843, 65024, 105, 103, 122, 97, 103, 59, 32768, 10650, 1792, 99, 101, 102, 111, 112, 114, 115, 17777, 17783, 17815, 17820, 17826, 17829, 17842, 105, 114, 99, 59, 32768, 373, 512, 100, 105, 17788, 17809, 512, 98, 103, 17793, 17798, 97, 114, 59, 32768, 10847, 101, 512, 59, 113, 17804, 17806, 32768, 8743, 59, 32768, 8793, 101, 114, 112, 59, 32768, 8472, 114, 59, 32896, 55349, 56628, 112, 102, 59, 32896, 55349, 56680, 59, 32768, 8472, 512, 59, 101, 17834, 17836, 32768, 8768, 97, 116, 104, 59, 32768, 8768, 99, 114, 59, 32896, 55349, 56524, 5428, 17871, 17891, 0, 17897, 0, 17902, 17917, 0, 0, 17920, 17935, 17940, 17945, 0, 0, 17977, 17992, 0, 18008, 18024, 18029, 768, 97, 105, 117, 17877, 17881, 17886, 112, 59, 32768, 8898, 114, 99, 59, 32768, 9711, 112, 59, 32768, 8899, 116, 114, 105, 59, 32768, 9661, 114, 59, 32896, 55349, 56629, 512, 65, 97, 17906, 17911, 114, 114, 59, 32768, 10234, 114, 114, 59, 32768, 10231, 59, 32768, 958, 512, 65, 97, 17924, 17929, 114, 114, 59, 32768, 10232, 114, 114, 59, 32768, 10229, 97, 112, 59, 32768, 10236, 105, 115, 59, 32768, 8955, 768, 100, 112, 116, 17951, 17956, 17970, 111, 116, 59, 32768, 10752, 512, 102, 108, 17961, 17965, 59, 32896, 55349, 56681, 117, 115, 59, 32768, 10753, 105, 109, 101, 59, 32768, 10754, 512, 65, 97, 17981, 17986, 114, 114, 59, 32768, 10233, 114, 114, 59, 32768, 10230, 512, 99, 113, 17996, 18001, 114, 59, 32896, 55349, 56525, 99, 117, 112, 59, 32768, 10758, 512, 112, 116, 18012, 18018, 108, 117, 115, 59, 32768, 10756, 114, 105, 59, 32768, 9651, 101, 101, 59, 32768, 8897, 101, 100, 103, 101, 59, 32768, 8896, 2048, 97, 99, 101, 102, 105, 111, 115, 117, 18052, 18068, 18081, 18087, 18092, 18097, 18103, 18109, 99, 512, 117, 121, 18058, 18065, 116, 101, 33024, 253, 59, 32768, 253, 59, 32768, 1103, 512, 105, 121, 18073, 18078, 114, 99, 59, 32768, 375, 59, 32768, 1099, 110, 33024, 165, 59, 32768, 165, 114, 59, 32896, 55349, 56630, 99, 121, 59, 32768, 1111, 112, 102, 59, 32896, 55349, 56682, 99, 114, 59, 32896, 55349, 56526, 512, 99, 109, 18114, 18118, 121, 59, 32768, 1102, 108, 33024, 255, 59, 32768, 255, 2560, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 18145, 18152, 18166, 18171, 18186, 18191, 18196, 18204, 18210, 18216, 99, 117, 116, 101, 59, 32768, 378, 512, 97, 121, 18157, 18163, 114, 111, 110, 59, 32768, 382, 59, 32768, 1079, 111, 116, 59, 32768, 380, 512, 101, 116, 18176, 18182, 116, 114, 102, 59, 32768, 8488, 97, 59, 32768, 950, 114, 59, 32896, 55349, 56631, 99, 121, 59, 32768, 1078, 103, 114, 97, 114, 114, 59, 32768, 8669, 112, 102, 59, 32896, 55349, 56683, 99, 114, 59, 32896, 55349, 56527, 512, 106, 110, 18221, 18224, 59, 32768, 8205, 106, 59, 32768, 8204]);

var decodeDataXml = {};

Object.defineProperty(decodeDataXml, "__esModule", {
  value: true
}); // Generated using scripts/write-decode-map.ts
// prettier-ignore

decodeDataXml.default = new Uint16Array([1024, 97, 103, 108, 113, 9, 23, 27, 31, 1086, 15, 0, 0, 19, 112, 59, 32768, 38, 111, 115, 59, 32768, 39, 116, 59, 32768, 62, 116, 59, 32768, 60, 117, 111, 116, 59, 32768, 34]);

(function (exports) {

	var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
	  return mod && mod.__esModule ? mod : {
	    "default": mod
	  };
	};

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTML = exports.determineBranch = exports.JUMP_OFFSET_BASE = exports.BinTrieFlags = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;

	var decode_data_html_1 = __importDefault(decodeDataHtml);

	exports.htmlDecodeTree = decode_data_html_1.default;

	var decode_data_xml_1 = __importDefault(decodeDataXml);

	exports.xmlDecodeTree = decode_data_xml_1.default;

	var decode_codepoint_1 = __importDefault(decode_codepoint);

	var BinTrieFlags;

	(function (BinTrieFlags) {
	  BinTrieFlags[BinTrieFlags["HAS_VALUE"] = 32768] = "HAS_VALUE";
	  BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 32512] = "BRANCH_LENGTH";
	  BinTrieFlags[BinTrieFlags["MULTI_BYTE"] = 128] = "MULTI_BYTE";
	  BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
	})(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));

	exports.JUMP_OFFSET_BASE = 48
	/* ZERO */
	- 1;

	function getDecoder(decodeTree) {
	  return function decodeHTMLBinary(str, strict) {
	    var ret = "";
	    var lastIdx = 0;
	    var strIdx = 0;

	    while ((strIdx = str.indexOf("&", strIdx)) >= 0) {
	      ret += str.slice(lastIdx, strIdx);
	      lastIdx = strIdx; // Skip the "&"

	      strIdx += 1; // If we have a numeric entity, handle this separately.

	      if (str.charCodeAt(strIdx) === 35
	      /* NUM */
	      ) {
	        // Skip the leading "&#". For hex entities, also skip the leading "x".
	        var start = strIdx + 1;
	        var base = 10;
	        var cp = str.charCodeAt(start);

	        if ((cp | 32
	        /* To_LOWER_BIT */
	        ) === 120
	        /* LOWER_X */
	        ) {
	          base = 16;
	          strIdx += 1;
	          start += 1;
	        }

	        while ((cp = str.charCodeAt(++strIdx)) >= 48
	        /* ZERO */
	        && cp <= 57
	        /* NINE */
	        || base === 16 && (cp | 32
	        /* To_LOWER_BIT */
	        ) >= 97
	        /* LOWER_A */
	        && (cp | 32
	        /* To_LOWER_BIT */
	        ) <= 102
	        /* LOWER_F */
	        );

	        if (start !== strIdx) {
	          var entity = str.substring(start, strIdx);
	          var parsed = parseInt(entity, base);

	          if (str.charCodeAt(strIdx) === 59
	          /* SEMI */
	          ) {
	            strIdx += 1;
	          } else if (strict) {
	            continue;
	          }

	          ret += decode_codepoint_1.default(parsed);
	          lastIdx = strIdx;
	        }

	        continue;
	      }

	      var result = null;
	      var excess = 1;
	      var treeIdx = 0;
	      var current = decodeTree[treeIdx];

	      for (; strIdx < str.length; strIdx++, excess++) {
	        treeIdx = determineBranch(decodeTree, current, treeIdx + 1, str.charCodeAt(strIdx));
	        if (treeIdx < 0) break;
	        current = decodeTree[treeIdx]; // If the branch is a value, store it and continue

	        if (current & BinTrieFlags.HAS_VALUE) {
	          // If we have a legacy entity while parsing strictly, just skip the number of bytes
	          if (strict && str.charCodeAt(strIdx) !== 59
	          /* SEMI */
	          ) {
	            // No need to consider multi-byte values, as the legacy entity is always a single byte
	            treeIdx += 1;
	          } else {
	            // If this is a surrogate pair, combine the higher bits from the node with the next byte
	            result = current & BinTrieFlags.MULTI_BYTE ? String.fromCharCode(decodeTree[++treeIdx], decodeTree[++treeIdx]) : String.fromCharCode(decodeTree[++treeIdx]);
	            excess = 0;
	          }
	        }
	      }

	      if (result != null) {
	        ret += result;
	        lastIdx = strIdx - excess + 1;
	      }
	    }

	    return ret + str.slice(lastIdx);
	  };
	}

	function determineBranch(decodeTree, current, nodeIdx, char) {
	  if (current <= 128) {
	    return char === current ? nodeIdx : -1;
	  }

	  var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 8;

	  if (branchCount === 0) {
	    return -1;
	  }

	  if (branchCount === 1) {
	    return char === decodeTree[nodeIdx] ? nodeIdx + 1 : -1;
	  }

	  var jumpOffset = current & BinTrieFlags.JUMP_TABLE;

	  if (jumpOffset) {
	    var value = char - exports.JUMP_OFFSET_BASE - jumpOffset;
	    return value < 0 || value > branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
	  } // Binary search for the character.


	  var lo = nodeIdx;
	  var hi = lo + branchCount - 1;

	  while (lo <= hi) {
	    var mid = lo + hi >>> 1;
	    var midVal = decodeTree[mid];

	    if (midVal < char) {
	      lo = mid + 1;
	    } else if (midVal > char) {
	      hi = mid - 1;
	    } else {
	      return decodeTree[mid + branchCount];
	    }
	  }

	  return -1;
	}

	exports.determineBranch = determineBranch;
	var htmlDecoder = getDecoder(decode_data_html_1.default);
	var xmlDecoder = getDecoder(decode_data_xml_1.default);

	function decodeHTML(str) {
	  return htmlDecoder(str, false);
	}

	exports.decodeHTML = decodeHTML;

	function decodeHTMLStrict(str) {
	  return htmlDecoder(str, true);
	}

	exports.decodeHTMLStrict = decodeHTMLStrict;

	function decodeXML(str) {
	  return xmlDecoder(str, true);
	}

	exports.decodeXML = decodeXML;
} (decode));

var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(Tokenizer$1, "__esModule", {
  value: true
});

var decode_codepoint_1 = __importDefault$1(decode_codepoint);

var decode_1 = decode;

function isWhitespace(c) {
  return c === 32
  /* Space */
  || c === 10
  /* NewLine */
  || c === 9
  /* Tab */
  || c === 12
  /* FormFeed */
  || c === 13
  /* CarriageReturn */
  ;
}

function isEndOfTagSection(c) {
  return c === 47
  /* Slash */
  || c === 62
  /* Gt */
  || isWhitespace(c);
}

function isNumber(c) {
  return c >= 48
  /* Zero */
  && c <= 57
  /* Nine */
  ;
}

function isASCIIAlpha(c) {
  return c >= 97
  /* LowerA */
  && c <= 122
  /* LowerZ */
  || c >= 65
  /* UpperA */
  && c <= 90
  /* UpperZ */
  ;
}
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */


var Sequences = {
  Cdata: new Uint16Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]),
  CdataEnd: new Uint16Array([0x5d, 0x5d, 0x3e]),
  CommentEnd: new Uint16Array([0x2d, 0x2d, 0x3e]),
  ScriptEnd: new Uint16Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]),
  StyleEnd: new Uint16Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]),
  TitleEnd: new Uint16Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]) // `</title`

};

var Tokenizer =
/** @class */
function () {
  function Tokenizer(_a, cbs) {
    var _b = _a.xmlMode,
        xmlMode = _b === void 0 ? false : _b,
        _c = _a.decodeEntities,
        decodeEntities = _c === void 0 ? true : _c;
    this.cbs = cbs;
    /** The current state the tokenizer is in. */

    this._state = 1
    /* Text */
    ;
    /** The read buffer. */

    this.buffer = "";
    /** The beginning of the section that is currently being read. */

    this.sectionStart = 0;
    /** The index within the buffer that we are currently looking at. */

    this._index = 0;
    /**
     * Data that has already been processed will be removed from the buffer occasionally.
     * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
     */

    this.bufferOffset = 0;
    /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */

    this.baseState = 1
    /* Text */
    ;
    /** For special parsing behavior inside of script and style tags. */

    this.isSpecial = false;
    /** Indicates whether the tokenizer has been paused. */

    this.running = true;
    /** Indicates whether the tokenizer has finished running / `.end` has been called. */

    this.ended = false;
    this.sequenceIndex = 0;
    this.trieIndex = 0;
    this.trieCurrent = 0;
    this.trieResult = null;
    this.entityExcess = 0;
    this.xmlMode = xmlMode;
    this.decodeEntities = decodeEntities;
    this.entityTrie = xmlMode ? decode_1.xmlDecodeTree : decode_1.htmlDecodeTree;
  }

  Tokenizer.prototype.reset = function () {
    this._state = 1
    /* Text */
    ;
    this.buffer = "";
    this.sectionStart = 0;
    this._index = 0;
    this.bufferOffset = 0;
    this.baseState = 1
    /* Text */
    ;
    this.currentSequence = undefined;
    this.running = true;
    this.ended = false;
  };

  Tokenizer.prototype.write = function (chunk) {
    if (this.ended) return this.cbs.onerror(Error(".write() after done!"));
    this.buffer += chunk;
    this.parse();
  };

  Tokenizer.prototype.end = function (chunk) {
    if (this.ended) return this.cbs.onerror(Error(".end() after done!"));
    if (chunk) this.write(chunk);
    this.ended = true;
    if (this.running) this.finish();
  };

  Tokenizer.prototype.pause = function () {
    this.running = false;
  };

  Tokenizer.prototype.resume = function () {
    this.running = true;

    if (this._index < this.buffer.length) {
      this.parse();
    }

    if (this.ended) {
      this.finish();
    }
  };
  /**
   * The start of the current section.
   */


  Tokenizer.prototype.getAbsoluteSectionStart = function () {
    return this.sectionStart + this.bufferOffset;
  };
  /**
   * The current index within all of the written data.
   */


  Tokenizer.prototype.getAbsoluteIndex = function () {
    return this.bufferOffset + this._index;
  };

  Tokenizer.prototype.stateText = function (c) {
    if (c === 60
    /* Lt */
    || !this.decodeEntities && this.fastForwardTo(60
    /* Lt */
    )) {
      if (this._index > this.sectionStart) {
        this.cbs.ontext(this.getSection());
      }

      this._state = 2
      /* BeforeTagName */
      ;
      this.sectionStart = this._index;
    } else if (this.decodeEntities && c === 38
    /* Amp */
    ) {
      this._state = 25
      /* BeforeEntity */
      ;
    }
  };

  Tokenizer.prototype.stateSpecialStartSequence = function (c) {
    var isEnd = this.sequenceIndex === this.currentSequence.length;
    var isMatch = isEnd ? // If we are at the end of the sequence, make sure the tag name has ended
    isEndOfTagSection(c) : // Otherwise, do a case-insensitive comparison
    (c | 0x20) === this.currentSequence[this.sequenceIndex];

    if (!isMatch) {
      this.isSpecial = false;
    } else if (!isEnd) {
      this.sequenceIndex++;
      return;
    }

    this.sequenceIndex = 0;
    this._state = 3
    /* InTagName */
    ;
    this.stateInTagName(c);
  };
  /** Look for an end tag. For <title> tags, also decode entities. */


  Tokenizer.prototype.stateInSpecialTag = function (c) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (c === 62
      /* Gt */
      || isWhitespace(c)) {
        var endOfText = this._index - this.currentSequence.length;

        if (this.sectionStart < endOfText) {
          // Spoof the index so that reported locations match up.
          var actualIndex = this._index;
          this._index = endOfText;
          this.cbs.ontext(this.getSection());
          this._index = actualIndex;
        }

        this.isSpecial = false;
        this.sectionStart = endOfText + 2; // Skip over the `</`

        this.stateInClosingTagName(c);
        return; // We are done; skip the rest of the function.
      }

      this.sequenceIndex = 0;
    }

    if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd) {
        // We have to parse entities in <title> tags.
        if (this.decodeEntities && c === 38
        /* Amp */
        ) {
          this._state = 25
          /* BeforeEntity */
          ;
        }
      } else if (this.fastForwardTo(60
      /* Lt */
      )) {
        // Outside of <title> tags, we can fast-forward.
        this.sequenceIndex = 1;
      }
    } else {
      // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
      this.sequenceIndex = Number(c === 60
      /* Lt */
      );
    }
  };

  Tokenizer.prototype.stateCDATASequence = function (c) {
    if (c === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this._state = 21
        /* InCommentLike */
        ;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this._index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this._state = 16
      /* InDeclaration */
      ;
      this.stateInDeclaration(c); // Reconsume the character
    }
  };
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */


  Tokenizer.prototype.fastForwardTo = function (c) {
    while (++this._index < this.buffer.length) {
      if (this.buffer.charCodeAt(this._index) === c) {
        return true;
      }
    }
    /*
     * We increment the index at the end of the `parse` loop,
     * so set it to `buffer.length - 1` here.
     *
     * TODO: Refactor `parse` to increment index before calling states.
     */


    this._index = this.buffer.length - 1;
    return false;
  };
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */


  Tokenizer.prototype.stateInCommentLike = function (c) {
    if (c === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        // Remove 2 trailing chars
        var section = this.buffer.slice(this.sectionStart, this._index - 2);

        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(section);
        } else {
          this.cbs.oncomment(section);
        }

        this.sequenceIndex = 0;
        this.sectionStart = this._index + 1;
        this._state = 1
        /* Text */
        ;
      }
    } else if (this.sequenceIndex === 0) {
      // Fast-forward to the first character of the sequence
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
      // Allow long sequences, eg. --->, ]]]>
      this.sequenceIndex = 0;
    }
  };
  /**
   * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
   *
   * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
   * We allow anything that wouldn't end the tag.
   */


  Tokenizer.prototype.isTagStartChar = function (c) {
    return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
  };

  Tokenizer.prototype.startSpecial = function (sequence, offset) {
    this.isSpecial = true;
    this.currentSequence = sequence;
    this.sequenceIndex = offset;
    this._state = 23
    /* SpecialStartSequence */
    ;
  };

  Tokenizer.prototype.stateBeforeTagName = function (c) {
    if (c === 33
    /* ExclamationMark */
    ) {
      this._state = 15
      /* BeforeDeclaration */
      ;
      this.sectionStart = this._index + 1;
    } else if (c === 63
    /* Questionmark */
    ) {
      this._state = 17
      /* InProcessingInstruction */
      ;
      this.sectionStart = this._index + 1;
    } else if (this.isTagStartChar(c)) {
      var lower = c | 0x20;
      this.sectionStart = this._index;

      if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
        this.startSpecial(Sequences.TitleEnd, 3);
      } else {
        this._state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? 22
        /* BeforeSpecialS */
        : 3
        /* InTagName */
        ;
      }
    } else if (c === 47
    /* Slash */
    ) {
      this._state = 5
      /* BeforeClosingTagName */
      ;
    } else {
      this._state = 1
      /* Text */
      ;
      this.stateText(c);
    }
  };

  Tokenizer.prototype.stateInTagName = function (c) {
    if (isEndOfTagSection(c)) {
      this.cbs.onopentagname(this.getSection());
      this.sectionStart = -1;
      this._state = 8
      /* BeforeAttributeName */
      ;
      this.stateBeforeAttributeName(c);
    }
  };

  Tokenizer.prototype.stateBeforeClosingTagName = function (c) {
    if (isWhitespace(c)) ; else if (c === 62
    /* Gt */
    ) {
      this._state = 1
      /* Text */
      ;
    } else {
      this._state = this.isTagStartChar(c) ? 6
      /* InClosingTagName */
      : 20
      /* InSpecialComment */
      ;
      this.sectionStart = this._index;
    }
  };

  Tokenizer.prototype.stateInClosingTagName = function (c) {
    if (c === 62
    /* Gt */
    || isWhitespace(c)) {
      this.cbs.onclosetag(this.getSection());
      this.sectionStart = -1;
      this._state = 7
      /* AfterClosingTagName */
      ;
      this.stateAfterClosingTagName(c);
    }
  };

  Tokenizer.prototype.stateAfterClosingTagName = function (c) {
    // Skip everything until ">"
    if (c === 62
    /* Gt */
    || this.fastForwardTo(62
    /* Gt */
    )) {
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype.stateBeforeAttributeName = function (c) {
    if (c === 62
    /* Gt */
    ) {
      this.cbs.onopentagend();

      if (this.isSpecial) {
        this._state = 24
        /* InSpecialTag */
        ;
        this.sequenceIndex = 0;
      } else {
        this._state = 1
        /* Text */
        ;
      }

      this.baseState = this._state;
      this.sectionStart = this._index + 1;
    } else if (c === 47
    /* Slash */
    ) {
      this._state = 4
      /* InSelfClosingTag */
      ;
    } else if (!isWhitespace(c)) {
      this._state = 9
      /* InAttributeName */
      ;
      this.sectionStart = this._index;
    }
  };

  Tokenizer.prototype.stateInSelfClosingTag = function (c) {
    if (c === 62
    /* Gt */
    ) {
      this.cbs.onselfclosingtag();
      this._state = 1
      /* Text */
      ;
      this.baseState = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
      this.isSpecial = false; // Reset special state, in case of self-closing special tags
    } else if (!isWhitespace(c)) {
      this._state = 8
      /* BeforeAttributeName */
      ;
      this.stateBeforeAttributeName(c);
    }
  };

  Tokenizer.prototype.stateInAttributeName = function (c) {
    if (c === 61
    /* Eq */
    || isEndOfTagSection(c)) {
      this.cbs.onattribname(this.getSection());
      this.sectionStart = -1;
      this._state = 10
      /* AfterAttributeName */
      ;
      this.stateAfterAttributeName(c);
    }
  };

  Tokenizer.prototype.stateAfterAttributeName = function (c) {
    if (c === 61
    /* Eq */
    ) {
      this._state = 11
      /* BeforeAttributeValue */
      ;
    } else if (c === 47
    /* Slash */
    || c === 62
    /* Gt */
    ) {
      this.cbs.onattribend(undefined);
      this._state = 8
      /* BeforeAttributeName */
      ;
      this.stateBeforeAttributeName(c);
    } else if (!isWhitespace(c)) {
      this.cbs.onattribend(undefined);
      this._state = 9
      /* InAttributeName */
      ;
      this.sectionStart = this._index;
    }
  };

  Tokenizer.prototype.stateBeforeAttributeValue = function (c) {
    if (c === 34
    /* DoubleQuote */
    ) {
      this._state = 12
      /* InAttributeValueDq */
      ;
      this.sectionStart = this._index + 1;
    } else if (c === 39
    /* SingleQuote */
    ) {
      this._state = 13
      /* InAttributeValueSq */
      ;
      this.sectionStart = this._index + 1;
    } else if (!isWhitespace(c)) {
      this.sectionStart = this._index;
      this._state = 14
      /* InAttributeValueNq */
      ;
      this.stateInAttributeValueNoQuotes(c); // Reconsume token
    }
  };

  Tokenizer.prototype.handleInAttributeValue = function (c, quote) {
    if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.getSection());
      this.sectionStart = -1;
      this.cbs.onattribend(String.fromCharCode(quote));
      this._state = 8
      /* BeforeAttributeName */
      ;
    } else if (this.decodeEntities && c === 38
    /* Amp */
    ) {
      this.baseState = this._state;
      this._state = 25
      /* BeforeEntity */
      ;
    }
  };

  Tokenizer.prototype.stateInAttributeValueDoubleQuotes = function (c) {
    this.handleInAttributeValue(c, 34
    /* DoubleQuote */
    );
  };

  Tokenizer.prototype.stateInAttributeValueSingleQuotes = function (c) {
    this.handleInAttributeValue(c, 39
    /* SingleQuote */
    );
  };

  Tokenizer.prototype.stateInAttributeValueNoQuotes = function (c) {
    if (isWhitespace(c) || c === 62
    /* Gt */
    ) {
      this.cbs.onattribdata(this.getSection());
      this.sectionStart = -1;
      this.cbs.onattribend(null);
      this._state = 8
      /* BeforeAttributeName */
      ;
      this.stateBeforeAttributeName(c);
    } else if (this.decodeEntities && c === 38
    /* Amp */
    ) {
      this.baseState = this._state;
      this._state = 25
      /* BeforeEntity */
      ;
    }
  };

  Tokenizer.prototype.stateBeforeDeclaration = function (c) {
    if (c === 91
    /* OpeningSquareBracket */
    ) {
      this._state = 19
      /* CDATASequence */
      ;
      this.sequenceIndex = 0;
    } else {
      this._state = c === 45
      /* Dash */
      ? 18
      /* BeforeComment */
      : 16
      /* InDeclaration */
      ;
    }
  };

  Tokenizer.prototype.stateInDeclaration = function (c) {
    if (c === 62
    /* Gt */
    || this.fastForwardTo(62
    /* Gt */
    )) {
      this.cbs.ondeclaration(this.getSection());
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype.stateInProcessingInstruction = function (c) {
    if (c === 62
    /* Gt */
    || this.fastForwardTo(62
    /* Gt */
    )) {
      this.cbs.onprocessinginstruction(this.getSection());
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype.stateBeforeComment = function (c) {
    if (c === 45
    /* Dash */
    ) {
      this._state = 21
      /* InCommentLike */
      ;
      this.currentSequence = Sequences.CommentEnd; // Allow short comments (eg. <!-->)

      this.sequenceIndex = 2;
      this.sectionStart = this._index + 1;
    } else {
      this._state = 16
      /* InDeclaration */
      ;
    }
  };

  Tokenizer.prototype.stateInSpecialComment = function (c) {
    if (c === 62
    /* Gt */
    || this.fastForwardTo(62
    /* Gt */
    )) {
      this.cbs.oncomment(this.getSection());
      this._state = 1
      /* Text */
      ;
      this.sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype.stateBeforeSpecialS = function (c) {
    var lower = c | 0x20;

    if (lower === Sequences.ScriptEnd[3]) {
      this.startSpecial(Sequences.ScriptEnd, 4);
    } else if (lower === Sequences.StyleEnd[3]) {
      this.startSpecial(Sequences.StyleEnd, 4);
    } else {
      this._state = 3
      /* InTagName */
      ;
      this.stateInTagName(c); // Consume the token again
    }
  };

  Tokenizer.prototype.stateBeforeEntity = function (c) {
    // Start excess with 1 to include the '&'
    this.entityExcess = 1;

    if (c === 35
    /* Num */
    ) {
      this._state = 26
      /* BeforeNumericEntity */
      ;
    } else if (c === 38
    /* Amp */
    ) ; else {
      this.trieIndex = 0;
      this.trieCurrent = this.entityTrie[0];
      this.trieResult = null;
      this._state = 27
      /* InNamedEntity */
      ;
      this.stateInNamedEntity(c);
    }
  };

  Tokenizer.prototype.stateInNamedEntity = function (c) {
    this.entityExcess += 1;
    this.trieIndex = (0, decode_1.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);

    if (this.trieIndex < 0) {
      this.emitNamedEntity();
      this._index--;
      return;
    }

    this.trieCurrent = this.entityTrie[this.trieIndex]; // If the branch is a value, store it and continue

    if (this.trieCurrent & decode_1.BinTrieFlags.HAS_VALUE) {
      // If we have a legacy entity while parsing strictly, just skip the number of bytes
      if (!this.allowLegacyEntity() && c !== 59
      /* Semi */
      ) {
        // No need to consider multi-byte values, as the legacy entity is always a single byte
        this.trieIndex += 1;
      } else {
        // Add 1 as we have already incremented the excess
        var entityStart = this._index - this.entityExcess + 1;

        if (entityStart > this.sectionStart) {
          this.emitPartial(this.buffer.substring(this.sectionStart, entityStart));
        } // If this is a surrogate pair, combine the higher bits from the node with the next byte


        this.trieResult = this.trieCurrent & decode_1.BinTrieFlags.MULTI_BYTE ? String.fromCharCode(this.entityTrie[++this.trieIndex], this.entityTrie[++this.trieIndex]) : String.fromCharCode(this.entityTrie[++this.trieIndex]);
        this.entityExcess = 0;
        this.sectionStart = this._index + 1;
      }
    }
  };

  Tokenizer.prototype.emitNamedEntity = function () {
    if (this.trieResult) {
      this.emitPartial(this.trieResult);
    }

    this._state = this.baseState;
  };

  Tokenizer.prototype.stateBeforeNumericEntity = function (c) {
    if ((c | 0x20) === 120
    /* LowerX */
    ) {
      this.entityExcess++;
      this._state = 29
      /* InHexEntity */
      ;
    } else {
      this._state = 28
      /* InNumericEntity */
      ;
      this.stateInNumericEntity(c);
    }
  };

  Tokenizer.prototype.decodeNumericEntity = function (base, strict) {
    var entityStart = this._index - this.entityExcess - 1;
    var numberStart = entityStart + 2 + (base >> 4);

    if (numberStart !== this._index) {
      // Emit leading data if any
      if (entityStart > this.sectionStart) {
        this.emitPartial(this.buffer.substring(this.sectionStart, entityStart));
      } // Parse entity


      var entity = this.buffer.substring(numberStart, this._index);
      var parsed = parseInt(entity, base);
      this.emitPartial((0, decode_codepoint_1.default)(parsed));
      this.sectionStart = this._index + Number(strict);
    }

    this._state = this.baseState;
  };

  Tokenizer.prototype.stateInNumericEntity = function (c) {
    if (c === 59
    /* Semi */
    ) {
      this.decodeNumericEntity(10, true);
    } else if (!isNumber(c)) {
      if (this.allowLegacyEntity()) {
        this.decodeNumericEntity(10, false);
      } else {
        this._state = this.baseState;
      }

      this._index--;
    } else {
      this.entityExcess++;
    }
  };

  Tokenizer.prototype.stateInHexEntity = function (c) {
    if (c === 59
    /* Semi */
    ) {
      this.decodeNumericEntity(16, true);
    } else if ((c < 97
    /* LowerA */
    || c > 102
    /* LowerF */
    ) && (c < 65
    /* UpperA */
    || c > 70
    /* UpperF */
    ) && !isNumber(c)) {
      if (this.allowLegacyEntity()) {
        this.decodeNumericEntity(16, false);
      } else {
        this._state = this.baseState;
      }

      this._index--;
    } else {
      this.entityExcess++;
    }
  };

  Tokenizer.prototype.allowLegacyEntity = function () {
    return !this.xmlMode && (this.baseState === 1
    /* Text */
    || this.baseState === 24
    /* InSpecialTag */
    );
  };
  /**
   * Remove data that has already been consumed from the buffer.
   */


  Tokenizer.prototype.cleanup = function () {
    // If we are inside of text, emit what we already have.
    if (this.running && this.sectionStart !== this._index && (this._state === 1
    /* Text */
    || this._state === 24
    /* InSpecialTag */
    && this.sequenceIndex === 0)) {
      // TODO: We could emit attribute data here as well.
      this.cbs.ontext(this.buffer.substr(this.sectionStart));
      this.sectionStart = this._index;
    }

    var start = this.sectionStart < 0 ? this._index : this.sectionStart;
    this.buffer = start === this.buffer.length ? "" : this.buffer.substr(start);
    this._index -= start;
    this.bufferOffset += start;

    if (this.sectionStart > 0) {
      this.sectionStart = 0;
    }
  };

  Tokenizer.prototype.shouldContinue = function () {
    return this._index < this.buffer.length && this.running;
  };
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */


  Tokenizer.prototype.parse = function () {
    while (this.shouldContinue()) {
      var c = this.buffer.charCodeAt(this._index);

      if (this._state === 1
      /* Text */
      ) {
        this.stateText(c);
      } else if (this._state === 23
      /* SpecialStartSequence */
      ) {
        this.stateSpecialStartSequence(c);
      } else if (this._state === 24
      /* InSpecialTag */
      ) {
        this.stateInSpecialTag(c);
      } else if (this._state === 19
      /* CDATASequence */
      ) {
        this.stateCDATASequence(c);
      } else if (this._state === 12
      /* InAttributeValueDq */
      ) {
        this.stateInAttributeValueDoubleQuotes(c);
      } else if (this._state === 9
      /* InAttributeName */
      ) {
        this.stateInAttributeName(c);
      } else if (this._state === 21
      /* InCommentLike */
      ) {
        this.stateInCommentLike(c);
      } else if (this._state === 20
      /* InSpecialComment */
      ) {
        this.stateInSpecialComment(c);
      } else if (this._state === 8
      /* BeforeAttributeName */
      ) {
        this.stateBeforeAttributeName(c);
      } else if (this._state === 3
      /* InTagName */
      ) {
        this.stateInTagName(c);
      } else if (this._state === 6
      /* InClosingTagName */
      ) {
        this.stateInClosingTagName(c);
      } else if (this._state === 2
      /* BeforeTagName */
      ) {
        this.stateBeforeTagName(c);
      } else if (this._state === 10
      /* AfterAttributeName */
      ) {
        this.stateAfterAttributeName(c);
      } else if (this._state === 13
      /* InAttributeValueSq */
      ) {
        this.stateInAttributeValueSingleQuotes(c);
      } else if (this._state === 11
      /* BeforeAttributeValue */
      ) {
        this.stateBeforeAttributeValue(c);
      } else if (this._state === 5
      /* BeforeClosingTagName */
      ) {
        this.stateBeforeClosingTagName(c);
      } else if (this._state === 7
      /* AfterClosingTagName */
      ) {
        this.stateAfterClosingTagName(c);
      } else if (this._state === 22
      /* BeforeSpecialS */
      ) {
        this.stateBeforeSpecialS(c);
      } else if (this._state === 14
      /* InAttributeValueNq */
      ) {
        this.stateInAttributeValueNoQuotes(c);
      } else if (this._state === 4
      /* InSelfClosingTag */
      ) {
        this.stateInSelfClosingTag(c);
      } else if (this._state === 16
      /* InDeclaration */
      ) {
        this.stateInDeclaration(c);
      } else if (this._state === 15
      /* BeforeDeclaration */
      ) {
        this.stateBeforeDeclaration(c);
      } else if (this._state === 18
      /* BeforeComment */
      ) {
        this.stateBeforeComment(c);
      } else if (this._state === 17
      /* InProcessingInstruction */
      ) {
        this.stateInProcessingInstruction(c);
      } else if (this._state === 27
      /* InNamedEntity */
      ) {
        this.stateInNamedEntity(c);
      } else if (this._state === 25
      /* BeforeEntity */
      ) {
        this.stateBeforeEntity(c);
      } else if (this._state === 29
      /* InHexEntity */
      ) {
        this.stateInHexEntity(c);
      } else if (this._state === 28
      /* InNumericEntity */
      ) {
        this.stateInNumericEntity(c);
      } else {
        // `this._state === State.BeforeNumericEntity`
        this.stateBeforeNumericEntity(c);
      }

      this._index++;
    }

    this.cleanup();
  };

  Tokenizer.prototype.finish = function () {
    if (this._state === 27
    /* InNamedEntity */
    ) {
      this.emitNamedEntity();
    } // If there is remaining data, emit it in a reasonable way


    if (this.sectionStart < this._index) {
      this.handleTrailingData();
    }

    this.cbs.onend();
  };
  /** Handle any trailing data. */


  Tokenizer.prototype.handleTrailingData = function () {
    var data = this.buffer.substr(this.sectionStart);

    if (this._state === 21
    /* InCommentLike */
    ) {
      if (this.currentSequence === Sequences.CdataEnd) {
        this.cbs.oncdata(data);
      } else {
        this.cbs.oncomment(data);
      }
    } else if (this._state === 28
    /* InNumericEntity */
    && this.allowLegacyEntity()) {
      this.decodeNumericEntity(10, false); // All trailing data will have been consumed
    } else if (this._state === 29
    /* InHexEntity */
    && this.allowLegacyEntity()) {
      this.decodeNumericEntity(16, false); // All trailing data will have been consumed
    } else if (this._state === 3
    /* InTagName */
    || this._state === 8
    /* BeforeAttributeName */
    || this._state === 11
    /* BeforeAttributeValue */
    || this._state === 10
    /* AfterAttributeName */
    || this._state === 9
    /* InAttributeName */
    || this._state === 13
    /* InAttributeValueSq */
    || this._state === 12
    /* InAttributeValueDq */
    || this._state === 14
    /* InAttributeValueNq */
    || this._state === 6
    /* InClosingTagName */
    ) ; else {
      this.cbs.ontext(data);
    }
  };

  Tokenizer.prototype.getSection = function () {
    return this.buffer.substring(this.sectionStart, this._index);
  };

  Tokenizer.prototype.emitPartial = function (value) {
    if (this.baseState !== 1
    /* Text */
    && this.baseState !== 24
    /* InSpecialTag */
    ) {
      this.cbs.onattribdata(value);
    } else {
      this.cbs.ontext(value);
    }
  };

  return Tokenizer;
}();

Tokenizer$1.default = Tokenizer;

var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(Parser$2, "__esModule", {
  value: true
});
Parser$2.Parser = void 0;

var Tokenizer_1 = __importDefault(Tokenizer$1);

var formTags = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]);
var pTag = new Set(["p"]);
var tableSectionTags = new Set(["thead", "tbody"]);
var ddtTags = new Set(["dd", "dt"]);
var rtpTags = new Set(["rt", "rp"]);
var openImpliesClose = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", pTag], ["h1", pTag], ["h2", pTag], ["h3", pTag], ["h4", pTag], ["h5", pTag], ["h6", pTag], ["select", formTags], ["input", formTags], ["output", formTags], ["button", formTags], ["datalist", formTags], ["textarea", formTags], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", ddtTags], ["dt", ddtTags], ["address", pTag], ["article", pTag], ["aside", pTag], ["blockquote", pTag], ["details", pTag], ["div", pTag], ["dl", pTag], ["fieldset", pTag], ["figcaption", pTag], ["figure", pTag], ["footer", pTag], ["form", pTag], ["header", pTag], ["hr", pTag], ["main", pTag], ["nav", pTag], ["ol", pTag], ["pre", pTag], ["section", pTag], ["table", pTag], ["ul", pTag], ["rt", rtpTags], ["rp", rtpTags], ["tbody", tableSectionTags], ["tfoot", tableSectionTags]]);
var voidElements = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]);
var reNameEnd = /\s|\//;

var Parser$1 =
/** @class */
function () {
  function Parser(cbs, options) {
    if (options === void 0) {
      options = {};
    }

    var _a, _b, _c, _d, _e;

    this.options = options;
    /** The start index of the last event. */

    this.startIndex = 0;
    /** The end index of the last event. */

    this.endIndex = 0;
    /**
     * Store the start index of the current open tag,
     * so we can update the start index for attributes.
     */

    this.openTagStart = 0;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.foreignContext = [];
    this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
    this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
    this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
    this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
    (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
  } // Tokenizer event handlers

  /** @internal */


  Parser.prototype.ontext = function (data) {
    var _a, _b;

    var idx = this.tokenizer.getAbsoluteIndex();
    this.endIndex = idx - 1;
    (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
    this.startIndex = idx;
  };

  Parser.prototype.isVoidElement = function (name) {
    return !this.options.xmlMode && voidElements.has(name);
  };
  /** @internal */


  Parser.prototype.onopentagname = function (name) {
    this.endIndex = this.tokenizer.getAbsoluteIndex();

    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }

    this.emitOpenTag(name);
  };

  Parser.prototype.emitOpenTag = function (name) {
    var _a, _b, _c, _d;

    this.openTagStart = this.startIndex;
    this.tagname = name;
    var impliesClose = !this.options.xmlMode && openImpliesClose.get(name);

    if (impliesClose) {
      while (this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])) {
        var el = this.stack.pop();
        (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, el, true);
      }
    }

    if (!this.isVoidElement(name)) {
      this.stack.push(name);

      if (foreignContextElements.has(name)) {
        this.foreignContext.push(true);
      } else if (htmlIntegrationElements.has(name)) {
        this.foreignContext.push(false);
      }
    }

    (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
    if (this.cbs.onopentag) this.attribs = {};
  };

  Parser.prototype.endOpenTag = function (isImplied) {
    var _a, _b;

    this.startIndex = this.openTagStart;
    this.endIndex = this.tokenizer.getAbsoluteIndex();

    if (this.attribs) {
      (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
      this.attribs = null;
    }

    if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
      this.cbs.onclosetag(this.tagname, true);
    }

    this.tagname = "";
  };
  /** @internal */


  Parser.prototype.onopentagend = function () {
    this.endOpenTag(false); // Set `startIndex` for next node

    this.startIndex = this.endIndex + 1;
  };
  /** @internal */


  Parser.prototype.onclosetag = function (name) {
    var _a, _b, _c, _d, _e, _f;

    this.endIndex = this.tokenizer.getAbsoluteIndex();

    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }

    if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
      this.foreignContext.pop();
    }

    if (!this.isVoidElement(name)) {
      var pos = this.stack.lastIndexOf(name);

      if (pos !== -1) {
        if (this.cbs.onclosetag) {
          var count = this.stack.length - pos;

          while (count--) {
            // We know the stack has sufficient elements.
            this.cbs.onclosetag(this.stack.pop(), count !== 0);
          }
        } else this.stack.length = pos;
      } else if (!this.options.xmlMode && name === "p") {
        this.emitOpenTag(name);
        this.closeCurrentTag(true);
      }
    } else if (!this.options.xmlMode && name === "br") {
      // We can't go through `emitOpenTag` here, as `br` would be implicitly closed.
      (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
      (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, name, {}, true);
      (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, name, false);
    } // Set `startIndex` for next node


    this.startIndex = this.endIndex + 1;
  };
  /** @internal */


  Parser.prototype.onselfclosingtag = function () {
    if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
      this.closeCurrentTag(false); // Set `startIndex` for next node

      this.startIndex = this.endIndex + 1;
    } else {
      // Ignore the fact that the tag is self-closing.
      this.onopentagend();
    }
  };

  Parser.prototype.closeCurrentTag = function (isOpenImplied) {
    var _a, _b;

    var name = this.tagname;
    this.endOpenTag(isOpenImplied); // Self-closing tags will be on the top of the stack

    if (this.stack[this.stack.length - 1] === name) {
      // If the opening tag isn't implied, the closing tag has to be implied.
      (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
      this.stack.pop();
    }
  };
  /** @internal */


  Parser.prototype.onattribname = function (name) {
    this.startIndex = this.tokenizer.getAbsoluteSectionStart();

    if (this.lowerCaseAttributeNames) {
      name = name.toLowerCase();
    }

    this.attribname = name;
  };
  /** @internal */


  Parser.prototype.onattribdata = function (value) {
    this.attribvalue += value;
  };
  /** @internal */


  Parser.prototype.onattribend = function (quote) {
    var _a, _b;

    this.endIndex = this.tokenizer.getAbsoluteIndex();
    (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);

    if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
      this.attribs[this.attribname] = this.attribvalue;
    }

    this.attribname = "";
    this.attribvalue = "";
  };

  Parser.prototype.getInstructionName = function (value) {
    var idx = value.search(reNameEnd);
    var name = idx < 0 ? value : value.substr(0, idx);

    if (this.lowerCaseTagNames) {
      name = name.toLowerCase();
    }

    return name;
  };
  /** @internal */


  Parser.prototype.ondeclaration = function (value) {
    this.endIndex = this.tokenizer.getAbsoluteIndex();

    if (this.cbs.onprocessinginstruction) {
      var name_1 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
    } // Set `startIndex` for next node


    this.startIndex = this.endIndex + 1;
  };
  /** @internal */


  Parser.prototype.onprocessinginstruction = function (value) {
    this.endIndex = this.tokenizer.getAbsoluteIndex();

    if (this.cbs.onprocessinginstruction) {
      var name_2 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
    } // Set `startIndex` for next node


    this.startIndex = this.endIndex + 1;
  };
  /** @internal */


  Parser.prototype.oncomment = function (value) {
    var _a, _b, _c, _d;

    this.endIndex = this.tokenizer.getAbsoluteIndex();
    (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c); // Set `startIndex` for next node

    this.startIndex = this.endIndex + 1;
  };
  /** @internal */


  Parser.prototype.oncdata = function (value) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

    this.endIndex = this.tokenizer.getAbsoluteIndex();

    if (this.options.xmlMode || this.options.recognizeCDATA) {
      (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
      (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
    } else {
      (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, "[CDATA[" + value + "]]");
      (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
    } // Set `startIndex` for next node


    this.startIndex = this.endIndex + 1;
  };
  /** @internal */


  Parser.prototype.onerror = function (err) {
    var _a, _b;

    (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };
  /** @internal */


  Parser.prototype.onend = function () {
    var _a, _b;

    if (this.cbs.onclosetag) {
      // Set the end index for all remaining tags
      this.endIndex = this.startIndex;

      for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i], true));
    }

    (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
  };
  /**
   * Resets the parser to a blank state, ready to parse a new HTML document
   */


  Parser.prototype.reset = function () {
    var _a, _b, _c, _d;

    (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribs = null;
    this.stack = [];
    this.startIndex = 0;
    this.endIndex = 0;
    (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
  };
  /**
   * Resets the parser, then parses a complete document and
   * pushes it to the handler.
   *
   * @param data Document to parse.
   */


  Parser.prototype.parseComplete = function (data) {
    this.reset();
    this.end(data);
  };
  /**
   * Parses a chunk of data and calls the corresponding callbacks.
   *
   * @param chunk Chunk to parse.
   */


  Parser.prototype.write = function (chunk) {
    this.tokenizer.write(chunk);
  };
  /**
   * Parses the end of the buffer and clears the stack, calls onend.
   *
   * @param chunk Optional final chunk to parse.
   */


  Parser.prototype.end = function (chunk) {
    this.tokenizer.end(chunk);
  };
  /**
   * Pauses parsing. The parser won't emit events until `resume` is called.
   */


  Parser.prototype.pause = function () {
    this.tokenizer.pause();
  };
  /**
   * Resumes parsing after `pause` was called.
   */


  Parser.prototype.resume = function () {
    this.tokenizer.resume();
  };
  /**
   * Alias of `write`, for backwards compatibility.
   *
   * @param chunk Chunk to parse.
   * @deprecated
   */


  Parser.prototype.parseChunk = function (chunk) {
    this.write(chunk);
  };
  /**
   * Alias of `end`, for backwards compatibility.
   *
   * @param chunk Optional final chunk to parse.
   * @deprecated
   */


  Parser.prototype.done = function (chunk) {
    this.end(chunk);
  };

  return Parser;
}();

Parser$2.Parser = Parser$1;

var lib$1 = {};

var lib = {};

var hasRequiredLib$1;

function requireLib$1 () {
	if (hasRequiredLib$1) return lib;
	hasRequiredLib$1 = 1;
	(function (exports) {

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
		/** Types of elements found in htmlparser2's DOM */

		var ElementType;

		(function (ElementType) {
		  /** Type for the root element of a document */
		  ElementType["Root"] = "root";
		  /** Type for Text */

		  ElementType["Text"] = "text";
		  /** Type for <? ... ?> */

		  ElementType["Directive"] = "directive";
		  /** Type for <!-- ... --> */

		  ElementType["Comment"] = "comment";
		  /** Type for <script> tags */

		  ElementType["Script"] = "script";
		  /** Type for <style> tags */

		  ElementType["Style"] = "style";
		  /** Type for Any tag */

		  ElementType["Tag"] = "tag";
		  /** Type for <![CDATA[ ... ]]> */

		  ElementType["CDATA"] = "cdata";
		  /** Type for <!doctype ...> */

		  ElementType["Doctype"] = "doctype";
		})(ElementType = exports.ElementType || (exports.ElementType = {}));
		/**
		 * Tests whether an element is a tag or not.
		 *
		 * @param elem Element to test
		 */


		function isTag(elem) {
		  return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
		}

		exports.isTag = isTag; // Exports for backwards compatibility

		/** Type for the root element of a document */

		exports.Root = ElementType.Root;
		/** Type for Text */

		exports.Text = ElementType.Text;
		/** Type for <? ... ?> */

		exports.Directive = ElementType.Directive;
		/** Type for <!-- ... --> */

		exports.Comment = ElementType.Comment;
		/** Type for <script> tags */

		exports.Script = ElementType.Script;
		/** Type for <style> tags */

		exports.Style = ElementType.Style;
		/** Type for Any tag */

		exports.Tag = ElementType.Tag;
		/** Type for <![CDATA[ ... ]]> */

		exports.CDATA = ElementType.CDATA;
		/** Type for <!doctype ...> */

		exports.Doctype = ElementType.Doctype;
} (lib));
	return lib;
}

var node = {};

var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node;
	hasRequiredNode = 1;

	var __extends = commonjsGlobal && commonjsGlobal.__extends || function () {
	  var extendStatics = function (d, b) {
	    extendStatics = Object.setPrototypeOf || {
	      __proto__: []
	    } instanceof Array && function (d, b) {
	      d.__proto__ = b;
	    } || function (d, b) {
	      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
	    };

	    return extendStatics(d, b);
	  };

	  return function (d, b) {
	    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);

	    function __() {
	      this.constructor = d;
	    }

	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	  };
	}();

	var __assign = commonjsGlobal && commonjsGlobal.__assign || function () {
	  __assign = Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];

	      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	    }

	    return t;
	  };

	  return __assign.apply(this, arguments);
	};

	Object.defineProperty(node, "__esModule", {
	  value: true
	});
	node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;

	var domelementtype_1 = requireLib$1();

	var nodeTypes = new Map([[domelementtype_1.ElementType.Tag, 1], [domelementtype_1.ElementType.Script, 1], [domelementtype_1.ElementType.Style, 1], [domelementtype_1.ElementType.Directive, 1], [domelementtype_1.ElementType.Text, 3], [domelementtype_1.ElementType.CDATA, 4], [domelementtype_1.ElementType.Comment, 8], [domelementtype_1.ElementType.Root, 9]]);
	/**
	 * This object will be used as the prototype for Nodes when creating a
	 * DOM-Level-1-compliant structure.
	 */

	var Node =
	/** @class */
	function () {
	  /**
	   *
	   * @param type The type of the node.
	   */
	  function Node(type) {
	    this.type = type;
	    /** Parent of the node */

	    this.parent = null;
	    /** Previous sibling */

	    this.prev = null;
	    /** Next sibling */

	    this.next = null;
	    /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */

	    this.startIndex = null;
	    /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */

	    this.endIndex = null;
	  }

	  Object.defineProperty(Node.prototype, "nodeType", {
	    // Read-only aliases

	    /**
	     * [DOM spec](https://dom.spec.whatwg.org/#dom-node-nodetype)-compatible
	     * node {@link type}.
	     */
	    get: function () {
	      var _a;

	      return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Node.prototype, "parentNode", {
	    // Read-write aliases for properties

	    /**
	     * Same as {@link parent}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get: function () {
	      return this.parent;
	    },
	    set: function (parent) {
	      this.parent = parent;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Node.prototype, "previousSibling", {
	    /**
	     * Same as {@link prev}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get: function () {
	      return this.prev;
	    },
	    set: function (prev) {
	      this.prev = prev;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Node.prototype, "nextSibling", {
	    /**
	     * Same as {@link next}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get: function () {
	      return this.next;
	    },
	    set: function (next) {
	      this.next = next;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  /**
	   * Clone this node, and optionally its children.
	   *
	   * @param recursive Clone child nodes as well.
	   * @returns A clone of the node.
	   */

	  Node.prototype.cloneNode = function (recursive) {
	    if (recursive === void 0) {
	      recursive = false;
	    }

	    return cloneNode(this, recursive);
	  };

	  return Node;
	}();

	node.Node = Node;
	/**
	 * A node that contains some data.
	 */

	var DataNode =
	/** @class */
	function (_super) {
	  __extends(DataNode, _super);
	  /**
	   * @param type The type of the node
	   * @param data The content of the data node
	   */


	  function DataNode(type, data) {
	    var _this = _super.call(this, type) || this;

	    _this.data = data;
	    return _this;
	  }

	  Object.defineProperty(DataNode.prototype, "nodeValue", {
	    /**
	     * Same as {@link data}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get: function () {
	      return this.data;
	    },
	    set: function (data) {
	      this.data = data;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  return DataNode;
	}(Node);

	node.DataNode = DataNode;
	/**
	 * Text within the document.
	 */

	var Text =
	/** @class */
	function (_super) {
	  __extends(Text, _super);

	  function Text(data) {
	    return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
	  }

	  return Text;
	}(DataNode);

	node.Text = Text;
	/**
	 * Comments within the document.
	 */

	var Comment =
	/** @class */
	function (_super) {
	  __extends(Comment, _super);

	  function Comment(data) {
	    return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
	  }

	  return Comment;
	}(DataNode);

	node.Comment = Comment;
	/**
	 * Processing instructions, including doc types.
	 */

	var ProcessingInstruction =
	/** @class */
	function (_super) {
	  __extends(ProcessingInstruction, _super);

	  function ProcessingInstruction(name, data) {
	    var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;

	    _this.name = name;
	    return _this;
	  }

	  return ProcessingInstruction;
	}(DataNode);

	node.ProcessingInstruction = ProcessingInstruction;
	/**
	 * A `Node` that can have children.
	 */

	var NodeWithChildren =
	/** @class */
	function (_super) {
	  __extends(NodeWithChildren, _super);
	  /**
	   * @param type Type of the node.
	   * @param children Children of the node. Only certain node types can have children.
	   */


	  function NodeWithChildren(type, children) {
	    var _this = _super.call(this, type) || this;

	    _this.children = children;
	    return _this;
	  }

	  Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
	    // Aliases

	    /** First child of the node. */
	    get: function () {
	      var _a;

	      return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
	    /** Last child of the node. */
	    get: function () {
	      return this.children.length > 0 ? this.children[this.children.length - 1] : null;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
	    /**
	     * Same as {@link children}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get: function () {
	      return this.children;
	    },
	    set: function (children) {
	      this.children = children;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  return NodeWithChildren;
	}(Node);

	node.NodeWithChildren = NodeWithChildren;
	/**
	 * The root node of the document.
	 */

	var Document =
	/** @class */
	function (_super) {
	  __extends(Document, _super);

	  function Document(children) {
	    return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
	  }

	  return Document;
	}(NodeWithChildren);

	node.Document = Document;
	/**
	 * An element within the DOM.
	 */

	var Element =
	/** @class */
	function (_super) {
	  __extends(Element, _super);
	  /**
	   * @param name Name of the tag, eg. `div`, `span`.
	   * @param attribs Object mapping attribute names to attribute values.
	   * @param children Children of the node.
	   */


	  function Element(name, attribs, children, type) {
	    if (children === void 0) {
	      children = [];
	    }

	    if (type === void 0) {
	      type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
	    }

	    var _this = _super.call(this, type, children) || this;

	    _this.name = name;
	    _this.attribs = attribs;
	    return _this;
	  }

	  Object.defineProperty(Element.prototype, "tagName", {
	    // DOM Level 1 aliases

	    /**
	     * Same as {@link name}.
	     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	     */
	    get: function () {
	      return this.name;
	    },
	    set: function (name) {
	      this.name = name;
	    },
	    enumerable: false,
	    configurable: true
	  });
	  Object.defineProperty(Element.prototype, "attributes", {
	    get: function () {
	      var _this = this;

	      return Object.keys(this.attribs).map(function (name) {
	        var _a, _b;

	        return {
	          name: name,
	          value: _this.attribs[name],
	          namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
	          prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
	        };
	      });
	    },
	    enumerable: false,
	    configurable: true
	  });
	  return Element;
	}(NodeWithChildren);

	node.Element = Element;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node is a `Element`, `false` otherwise.
	 */

	function isTag(node) {
	  return (0, domelementtype_1.isTag)(node);
	}

	node.isTag = isTag;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
	 */

	function isCDATA(node) {
	  return node.type === domelementtype_1.ElementType.CDATA;
	}

	node.isCDATA = isCDATA;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `Text`, `false` otherwise.
	 */

	function isText(node) {
	  return node.type === domelementtype_1.ElementType.Text;
	}

	node.isText = isText;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `Comment`, `false` otherwise.
	 */

	function isComment(node) {
	  return node.type === domelementtype_1.ElementType.Comment;
	}

	node.isComment = isComment;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
	 */

	function isDirective(node) {
	  return node.type === domelementtype_1.ElementType.Directive;
	}

	node.isDirective = isDirective;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
	 */

	function isDocument(node) {
	  return node.type === domelementtype_1.ElementType.Root;
	}

	node.isDocument = isDocument;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node is a `NodeWithChildren` (has children), `false` otherwise.
	 */

	function hasChildren(node) {
	  return Object.prototype.hasOwnProperty.call(node, "children");
	}

	node.hasChildren = hasChildren;
	/**
	 * Clone a node, and optionally its children.
	 *
	 * @param recursive Clone child nodes as well.
	 * @returns A clone of the node.
	 */

	function cloneNode(node, recursive) {
	  if (recursive === void 0) {
	    recursive = false;
	  }

	  var result;

	  if (isText(node)) {
	    result = new Text(node.data);
	  } else if (isComment(node)) {
	    result = new Comment(node.data);
	  } else if (isTag(node)) {
	    var children = recursive ? cloneChildren(node.children) : [];
	    var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
	    children.forEach(function (child) {
	      return child.parent = clone_1;
	    });

	    if (node.namespace != null) {
	      clone_1.namespace = node.namespace;
	    }

	    if (node["x-attribsNamespace"]) {
	      clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
	    }

	    if (node["x-attribsPrefix"]) {
	      clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
	    }

	    result = clone_1;
	  } else if (isCDATA(node)) {
	    var children = recursive ? cloneChildren(node.children) : [];
	    var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
	    children.forEach(function (child) {
	      return child.parent = clone_2;
	    });
	    result = clone_2;
	  } else if (isDocument(node)) {
	    var children = recursive ? cloneChildren(node.children) : [];
	    var clone_3 = new Document(children);
	    children.forEach(function (child) {
	      return child.parent = clone_3;
	    });

	    if (node["x-mode"]) {
	      clone_3["x-mode"] = node["x-mode"];
	    }

	    result = clone_3;
	  } else if (isDirective(node)) {
	    var instruction = new ProcessingInstruction(node.name, node.data);

	    if (node["x-name"] != null) {
	      instruction["x-name"] = node["x-name"];
	      instruction["x-publicId"] = node["x-publicId"];
	      instruction["x-systemId"] = node["x-systemId"];
	    }

	    result = instruction;
	  } else {
	    throw new Error("Not implemented yet: ".concat(node.type));
	  }

	  result.startIndex = node.startIndex;
	  result.endIndex = node.endIndex;

	  if (node.sourceCodeLocation != null) {
	    result.sourceCodeLocation = node.sourceCodeLocation;
	  }

	  return result;
	}

	node.cloneNode = cloneNode;

	function cloneChildren(childs) {
	  var children = childs.map(function (child) {
	    return cloneNode(child, true);
	  });

	  for (var i = 1; i < children.length; i++) {
	    children[i].prev = children[i - 1];
	    children[i - 1].next = children[i];
	  }

	  return children;
	}
	return node;
}

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib$1;
	hasRequiredLib = 1;
	(function (exports) {

		var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
		  if (k2 === undefined) k2 = k;
		  var desc = Object.getOwnPropertyDescriptor(m, k);

		  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		    desc = {
		      enumerable: true,
		      get: function () {
		        return m[k];
		      }
		    };
		  }

		  Object.defineProperty(o, k2, desc);
		} : function (o, m, k, k2) {
		  if (k2 === undefined) k2 = k;
		  o[k2] = m[k];
		});

		var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
		  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.DomHandler = void 0;

		var domelementtype_1 = requireLib$1();

		var node_1 = requireNode();

		__exportStar(requireNode(), exports);

		var reWhitespace = /\s+/g; // Default options

		var defaultOpts = {
		  normalizeWhitespace: false,
		  withStartIndices: false,
		  withEndIndices: false,
		  xmlMode: false
		};

		var DomHandler =
		/** @class */
		function () {
		  /**
		   * @param callback Called once parsing has completed.
		   * @param options Settings for the handler.
		   * @param elementCB Callback whenever a tag is closed.
		   */
		  function DomHandler(callback, options, elementCB) {
		    /** The elements of the DOM */
		    this.dom = [];
		    /** The root element for the DOM */

		    this.root = new node_1.Document(this.dom);
		    /** Indicated whether parsing has been completed. */

		    this.done = false;
		    /** Stack of open tags. */

		    this.tagStack = [this.root];
		    /** A data node that is still being written to. */

		    this.lastNode = null;
		    /** Reference to the parser instance. Used for location information. */

		    this.parser = null; // Make it possible to skip arguments, for backwards-compatibility

		    if (typeof options === "function") {
		      elementCB = options;
		      options = defaultOpts;
		    }

		    if (typeof callback === "object") {
		      options = callback;
		      callback = undefined;
		    }

		    this.callback = callback !== null && callback !== void 0 ? callback : null;
		    this.options = options !== null && options !== void 0 ? options : defaultOpts;
		    this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
		  }

		  DomHandler.prototype.onparserinit = function (parser) {
		    this.parser = parser;
		  }; // Resets the handler back to starting state


		  DomHandler.prototype.onreset = function () {
		    this.dom = [];
		    this.root = new node_1.Document(this.dom);
		    this.done = false;
		    this.tagStack = [this.root];
		    this.lastNode = null;
		    this.parser = null;
		  }; // Signals the handler that parsing is done


		  DomHandler.prototype.onend = function () {
		    if (this.done) return;
		    this.done = true;
		    this.parser = null;
		    this.handleCallback(null);
		  };

		  DomHandler.prototype.onerror = function (error) {
		    this.handleCallback(error);
		  };

		  DomHandler.prototype.onclosetag = function () {
		    this.lastNode = null;
		    var elem = this.tagStack.pop();

		    if (this.options.withEndIndices) {
		      elem.endIndex = this.parser.endIndex;
		    }

		    if (this.elementCB) this.elementCB(elem);
		  };

		  DomHandler.prototype.onopentag = function (name, attribs) {
		    var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
		    var element = new node_1.Element(name, attribs, undefined, type);
		    this.addNode(element);
		    this.tagStack.push(element);
		  };

		  DomHandler.prototype.ontext = function (data) {
		    var normalizeWhitespace = this.options.normalizeWhitespace;
		    var lastNode = this.lastNode;

		    if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
		      if (normalizeWhitespace) {
		        lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
		      } else {
		        lastNode.data += data;
		      }

		      if (this.options.withEndIndices) {
		        lastNode.endIndex = this.parser.endIndex;
		      }
		    } else {
		      if (normalizeWhitespace) {
		        data = data.replace(reWhitespace, " ");
		      }

		      var node = new node_1.Text(data);
		      this.addNode(node);
		      this.lastNode = node;
		    }
		  };

		  DomHandler.prototype.oncomment = function (data) {
		    if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
		      this.lastNode.data += data;
		      return;
		    }

		    var node = new node_1.Comment(data);
		    this.addNode(node);
		    this.lastNode = node;
		  };

		  DomHandler.prototype.oncommentend = function () {
		    this.lastNode = null;
		  };

		  DomHandler.prototype.oncdatastart = function () {
		    var text = new node_1.Text("");
		    var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
		    this.addNode(node);
		    text.parent = node;
		    this.lastNode = text;
		  };

		  DomHandler.prototype.oncdataend = function () {
		    this.lastNode = null;
		  };

		  DomHandler.prototype.onprocessinginstruction = function (name, data) {
		    var node = new node_1.ProcessingInstruction(name, data);
		    this.addNode(node);
		  };

		  DomHandler.prototype.handleCallback = function (error) {
		    if (typeof this.callback === "function") {
		      this.callback(error, this.dom);
		    } else if (error) {
		      throw error;
		    }
		  };

		  DomHandler.prototype.addNode = function (node) {
		    var parent = this.tagStack[this.tagStack.length - 1];
		    var previousSibling = parent.children[parent.children.length - 1];

		    if (this.options.withStartIndices) {
		      node.startIndex = this.parser.startIndex;
		    }

		    if (this.options.withEndIndices) {
		      node.endIndex = this.parser.endIndex;
		    }

		    parent.children.push(node);

		    if (previousSibling) {
		      node.prev = previousSibling;
		      previousSibling.next = node;
		    }

		    node.parent = parent;
		    this.lastNode = null;
		  };

		  return DomHandler;
		}();

		exports.DomHandler = DomHandler;
		exports.default = DomHandler;
} (lib$1));
	return lib$1;
}

/**
 * Sets root parent to null.
 *
 * @param  {Array<Comment|Element|ProcessingInstruction|Text>} nodes
 * @return {Array<Comment|Element|ProcessingInstruction|Text>}
 */

function unsetRootParent$1(nodes) {
  for (var index = 0, len = nodes.length; index < len; index++) {
    var node = nodes[index];
    node.parent = null;
  }

  return nodes;
}

var utilities = {
  unsetRootParent: unsetRootParent$1
};

var Parser = Parser$2.Parser;

var DomHandler = requireLib().DomHandler;

var unsetRootParent = utilities.unsetRootParent;
/**
 * Parses HTML string to DOM nodes in Node.js.
 *
 * This is the same method as `require('htmlparser2').parseDOM`
 * https://github.com/fb55/htmlparser2/blob/v6.0.0/src/index.ts#L29-L41
 *
 * @param  {string}            html      - HTML markup.
 * @param  {DomHandlerOptions} [options] - Parser options (https://github.com/fb55/domhandler/tree/v4.0.0#readme).
 * @return {Array<Comment|Element|ProcessingInstruction|Text>} - DOM nodes.
 */


function HTMLDOMParser(html, options) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string.');
  }

  if (html === '') {
    return [];
  }

  var handler = new DomHandler(undefined, options);
  new Parser(handler, options).end(html);
  return unsetRootParent(handler.dom);
}

var htmlToDom = HTMLDOMParser;

/**
 * When running on Node.js, use the server parser.
 * When bundling for the browser, use the client parser.
 *
 * @see {@link https://github.com/substack/node-browserify#browser-field}
 */

(function (module) {
	module.exports = htmlToDom;
} (htmlDomParser));

var domToReact = domToReact_1;

var attributesToProps = attributesToProps$2;

var htmlToDOM = htmlDomParser.exports; // support backwards compatibility for ES Module


htmlToDOM =
/* istanbul ignore next */
typeof htmlToDOM.default === 'function' ? htmlToDOM.default : htmlToDOM;
var domParserOptions = {
  lowerCaseAttributeNames: false
};
/**
 * Converts HTML string to React elements.
 *
 * @param {string} html - HTML string.
 * @param {object} [options] - Parser options.
 * @param {object} [options.htmlparser2] - htmlparser2 options.
 * @param {object} [options.library] - Library for React, Preact, etc.
 * @param {Function} [options.replace] - Replace method.
 * @returns {JSX.Element|JSX.Element[]|string} - React element(s), empty array, or string.
 */

function HTMLReactParser(html, options) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (html === '') {
    return [];
  }

  options = options || {};
  return domToReact(htmlToDOM(html, options.htmlparser2 || domParserOptions), options);
}

HTMLReactParser.domToReact = domToReact;
HTMLReactParser.htmlToDOM = htmlToDOM;
HTMLReactParser.attributesToProps = attributesToProps;
HTMLReactParser.Element = requireLib().Element; // support CommonJS and ES Modules

htmlReactParser.exports = HTMLReactParser;
htmlReactParser.exports.default = HTMLReactParser;

htmlReactParser.exports.domToReact;
htmlReactParser.exports.htmlToDOM;
htmlReactParser.exports.attributesToProps;
htmlReactParser.exports.Element;
var parse = htmlReactParser.exports;

(typeof global !== "undefined" ? global : window).Prism = prism;

require("prismjs/components/prism-hoon");

function Fence({
  children,
  language
}) {
  return /*#__PURE__*/React$2.createElement(Highlight, _extends$1({}, defaultProps, {
    key: language,
    language: language,
    code: children,
    theme: undefined
  }), ({
    className,
    style,
    tokens,
    getLineProps,
    getTokenProps
  }) => /*#__PURE__*/React$2.createElement("pre", {
    className: className,
    style: style
  }, tokens.slice(0, -1).map((line, i) => /*#__PURE__*/React$2.createElement("div", getLineProps({
    line,
    key: i
  }), line.map((token, key) => /*#__PURE__*/React$2.createElement("span", getTokenProps({
    token,
    key
  })))))));
}
const fence = {
  render: "Fence",
  attributes: {
    language: {
      type: String,
      description: "The programming language of the code block. Place it after the backticks."
    }
  }
};
const tab = {
  render: "Tab",
  attributes: {
    label: {
      type: String
    }
  }
};
const tabs = {
  render: "Tabs",
  attributes: {},

  transform(node, config) {
    const labels = node.transformChildren(config).filter(child => child && child.name === "Tab").map(tab => typeof tab === "object" ? tab.attributes.label : null);
    return new Tag(this.render, {
      labels
    }, node.transformChildren(config));
  }

};
const button = {
  render: "Button",
  attributes: {
    label: {
      type: String
    },
    link: {
      type: String
    },
    color: {
      type: String
    }
  }
};
const callout = {
  render: "Callout",
  attributes: {
    title: {
      type: String
    }
  }
};
const customFence = {
  render: "CustomFence",
  attributes: {}
};
const html = {
  render: "RenderHtml",
  attributes: {
    content: {
      type: String
    }
  },

  transform(node) {
    return node.attributes.content ? new Tag("RenderHtml", {
      content: node.attributes.content
    }, [node.inline]) : null;
  }

};

const RenderHtml = ({
  content
}) => {
  return parse(content);
};

const superscript = ({
  children
}) => /*#__PURE__*/React$2.createElement("sup", null, children);

const CustomFence = ({
  children
}) => /*#__PURE__*/React$2.createElement("pre", null, children);

const NextLink = ({
  href,
  target,
  children
}) => {
  return /*#__PURE__*/React$2.createElement(Link, {
    href: href,
    passHref: true
  }, /*#__PURE__*/React$2.createElement("a", {
    target: target
  }, children));
};

function MarkdownParse({
  post
}) {
  const tokeniser = new markdoc_default.Tokenizer({
    html: true,
    linkify: true
  });
  const tokens = tokeniser.tokenize(post.content);
  const ast = markdoc_default.parse(tokens);
  const finalAst = footnoteParse(ast);
  return markdoc_default.transform(finalAst, {
    nodes: {
      fence,
      heading,
      image,
      link,
      footnoteItem,
      footnoteRef,
      html,
      sup
    },
    tags: {
      tabs,
      tab,
      button,
      callout,
      customFence,
      RenderHtml,
      superscript,
      NextLink
    }
  });
}
function MarkdownRender({
  content
}) {
  return markdoc_default.renderers.react(content, React$2, {
    components: {
      Fence,
      Tabs,
      Tab,
      Button,
      Callout,
      CustomFence,
      RenderHtml,
      NextLink
    }
  });
}

const footnoteParse = partialAst => {
  const endNotePattern = /\[\^(\d+)\]:\s/m;
  const inlineFnPattern = /\[\^(\d+)\](?!:)/gm;

  function* getFootnoteItemNodes(nodes) {
    let results = [];
    let itemsProcessed = 0;

    for (const n of nodes) {
      itemsProcessed += 1;
      if (n.type !== "softbreak") results.push(n);

      if (n.type === "softbreak" || itemsProcessed === nodes.length) {
        yield results;
        results = [];
      }
    }
  }

  function findFootnoteContainerNode(ast) {
    const generator = ast.walk();
    let container;
    let match = false;

    for (const node of generator) {
      if (node.attributes.content && endNotePattern.test(node.attributes.content)) {
        match = true;
        generator.return();
      }

      if (node.type === "inline") container = node;
    }

    return match ? container : undefined;
  }

  function processFootnotes(ast) {
    // Get a refrence to the node containing endNotes; if not present, early return
    const fnContainerNode = findFootnoteContainerNode(ast);
    if (!fnContainerNode) return; // We have footnotes, so create a new list node which will contain the list of endNotes

    const fnList = new ast_default.Node("list", {
      ordered: true,
      class: "footnotes"
    }); // Get the children nodes for each footnote item

    const fnItems = getFootnoteItemNodes(fnContainerNode.children);

    for (const fn of fnItems) {
      const token = endNotePattern.exec(fn[0].attributes.content);

      if (token) {
        // Remove the markdown footnote syntax (e.g. [^1]) from the string
        fn[0].attributes.content = fn[0].attributes.content.replace(token[0], ""); // Create a new footnote item and append to the fnList

        const id = token[1];
        const fnItem = new ast_default.Node("footnoteItem", {
          id: `fn${id}`,
          href: `#fnref${id}`
        }, fn);
        fnList.push(fnItem);
      }
    }

    ast.children.pop(); // remove the last paragraph in the doc being replaced by the fnList

    ast.push(fnList);
  }

  function processFootnoteRefs(ast) {
    let parent = ast;

    for (const node of ast.walk()) {
      if (node.attributes.content) {
        // Check if there's a footnote ref token
        const token = inlineFnPattern.exec(node.attributes.content);

        if (token) {
          // Break the string where the foonote ref is, assign first part of string to the current node content
          const [prevText, nextText] = node.attributes.content.split(token[0]);
          node.attributes.content = prevText; // Create a footnote node and insert it in the tree

          const id = token[1];
          const fn = new ast_default.Node("footnoteRef", {
            id: `fnref${id}`,
            href: `#fn${id}`,
            label: `${id}`
          });
          parent.push(fn); // Create a text node for the text which follows after the footnote and insert it in the tree

          const next = new ast_default.Node("text", {
            content: nextText
          });
          parent.push(next);
        }
      } // If the node is of inline type, update parent


      if (node.type == "inline") parent = node;
    }
  }

  processFootnoteRefs(partialAst);
  processFootnotes(partialAst);
  return partialAst;
};

const Markdown = {
  parse: MarkdownParse,
  render: MarkdownRender
};

export { Container, Footer, Markdown, Section, SingleColumn };
//# sourceMappingURL=index.js.map
