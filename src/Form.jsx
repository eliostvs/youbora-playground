import React from "react"
import PropTypes from "prop-types"
import { FormProvider, useForm, useFormContext } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"

const sections = [
  {
    name: "Account",
    fields: [
      {
        name: "accountCode",
        label: "Code",
        required: true,
        type: "text",
        props: {
          placeholder: "NicePeopleAtWork customer account code",
        },
      },
      {
        name: "content-transactionCode",
        label: "Transaction",
        required: true,
        type: "component",
        component: TransactionCodeField,
      },
    ],
  },
  {
    name: "Plugin",
    fields: [
      {
        name: "enabled",
        label: "Enable",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: true,
        },
      },
      {
        name: "$pluginVersion",
        label: "Version",
        required: true,
        type: "text",
        props: {
          placeholder: "0.0.1",
          defaultValue: "0.0.1",
        },
      },
      {
        name: "$playerName",
        label: "Player Name",
        required: true,
        type: "text",
        props: {
          placeholder: "Name",
          defaultValue: "Playground",
        },
      },
      {
        name: "$playerVersion",
        label: "Player Version",
        required: true,
        type: "text",
        props: {
          placeholder: "0.0.1",
          defaultValue: "0.0.1",
        },
      },
    ],
  },
  {
    name: "Content",
    fields: [
      {
        name: "content-resource",
        label: "Resource",
        required: true,
        type: "text",
        props: {
          placeholder: "URL/path of the current media resource",
          defaultValue:
            "https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd",
        },
      },
      {
        name: "content-title",
        label: "Title",
        required: true,
        type: "text",
        props: {
          placeholder: "Title of the media",
          defaultValue: "Sintel",
        },
      },
      {
        name: "content-id",
        label: "ID",
        required: false,
        type: "text",
        props: {
          placeholder: "video-1234",
        },
      },
      {
        name: "content-program",
        label: "Program",
        required: false,
        type: "text",
        props: {
          placeholder: "Secondary title of the media",
        },
      },
      {
        name: "content-season",
        label: "Season",
        required: false,
        type: "text",
        props: {
          placeholder: "Season of the media",
        },
      },
      {
        name: "content-episodeTitle",
        label: "Episode",
        required: false,
        type: "text",
        props: {
          placeholder: "Episode title of the media",
        },
      },
      {
        name: "content-tvShow",
        label: "TV Show",
        required: false,
        type: "text",
        props: {
          placeholder: "TV Show of the media",
        },
      },
      {
        name: "content-channel",
        label: "Channel",
        required: false,
        type: "text",
        props: {
          placeholder: "channel name of the media",
        },
      },
      {
        name: "content-type",
        label: "Type",
        required: false,
        type: "text",
        props: {
          placeholder: "Type of the media",
        },
      },
      {
        name: "content-genre",
        label: "Genre",
        required: false,
        type: "text",
        props: {
          placeholder: "Genre of the media",
        },
      },
      {
        name: "content-language",
        label: "Language",
        required: false,
        type: "text",
        props: {
          placeholder: "Language of the media",
        },
      },
      {
        name: "content-drm",
        label: "DRM",
        required: false,
        type: "text",
        props: {
          placeholder: "DRM of the media",
        },
      },
      {
        name: "content-duration",
        label: "Duration in second",
        required: true,
        type: "number",
        props: {
          min: "30",
          max: "3599",
          defaultValue: "30",
          step: "30",
        },
      },
      {
        name: "content-isLive",
        label: "Is Live",
        required: false,
        type: "boolean",
        props: {
          placeholder: "True if the content is live false if VOD",
        },
      },
      {
        name: "content-saga",
        label: "Saga",
        required: false,
        type: "text",
        props: {
          placeholder: "Saga of the media",
        },
      },
      {
        name: "content-imdbId",
        label: "IMDB ID",
        required: false,
        type: "text",
        props: {
          placeholder: "IMDB id of the media",
        },
      },
      {
        name: "content-gracenoteId",
        label: "Gradenote ID",
        required: false,
        type: "text",
        props: {
          placeholder: "Gracenote id of the media",
        },
      },
      {
        name: "content-cdn",
        label: "CDN",
        required: false,
        type: "text",
        props: { placeholder: "Codename of the CDN" },
      },
      {
        name: "content-cdnNode",
        label: "CDN Node",
        required: false,
        type: "text",
        props: {
          placeholder: "CDN node",
        },
      },
      {
        name: "content-cdnType",
        label: "CDN Type",
        required: false,
        type: "text",
        props: {
          placeholder: "CDN type",
        },
      },
      {
        name: "content-bitrate",
        label: "Bitrate per second",
        type: "number",
        required: false,
        props: {
          min: "0",
          step: "4",
        },
      },
      {
        name: "content-fps",
        label: "Frames per second",
        required: false,
        type: "number",
        props: {
          min: "0",
        },
      },
      {
        name: "content-metadata",
        label: "Metadata",
        required: false,
        type: "text",
        props: {
          placeholder:
            "Item containing mixed extra information about the content",
        },
      },
      {
        name: "content-rendition",
        label: "Rendition",
        required: false,
        type: "text",
        props: {
          placeholder: "Name of the current rendition of the content",
        },
      },
      {
        name: "content-streamingProtocol",
        label: "Streaming Protocol",
        required: false,
        type: "select",
        options: [
          { name: "", code: "" },
          { name: "HDS", code: "HDS" },
          { name: "HLS", code: "HLS" },
          { name: "MSS", code: "MSS" },
          { name: "DASH", code: "DASH" },
          { name: "RTMP", code: "RTMP" },
          { name: "RTP", code: "RTP" },
          { name: "RTSP", code: "RTSP" },
        ],
        props: {
          placeholder: "Name of the streaming media protocol",
        },
      },
      {
        name: "content-throughput",
        label: "Throughput per second",
        required: false,
        type: "number",
      },
      {
        name: "content-transportFormat",
        label: "Transport Format",
        required: false,
        type: "select",
        options: [
          { name: "", code: "" },
          { name: "MPEG-2 TS", code: "TS" },
          { name: "Fragmented MP4", code: "MP$" },
        ],
      },
      {
        name: "content-package",
        label: "Package",
        required: false,
        type: "text",
        props: {
          placeholder: "Package of the media",
        },
      },
      {
        name: "content-cost",
        label: "Cost",
        required: false,
        type: "number",
        props: {
          min: 0,
          defaultValue: 0,
        },
      },
      {
        name: "content-price",
        label: "Price",
        required: false,
        type: "number",
        props: {
          min: 0,
          defaultValue: 0,
        },
      },
      {
        name: "content-playbackType",
        label: "Playback Type",
        required: false,
        type: "select",
        options: [
          { code: "", name: "" },
          { code: "Vod", name: "Vod" },
          { code: "Live", name: "Live" },
          { code: "catch-up", name: "Catch-up" },
          { code: "offline", name: "Offline" },
        ],
      },
    ],
  },

  {
    name: "Custom Dimensions",
    fields: [
      {
        name: "content-customDimension-1",
        label: "Extra 1",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-2",
        label: "Extra 2",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-3",
        label: "Extra 3",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-4",
        label: "Extra 4",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-5",
        label: "Extra 5",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-6",
        label: "Extra 6",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-7",
        label: "Extra 7",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-8",
        label: "Extra 8",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-9",
        label: "Extra 9",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-10",
        label: "Extra 10",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-11",
        label: "Extra 11",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-12",
        label: "Extra 12",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-13",
        label: "Extra 13",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-14",
        label: "Extra 14",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-15",
        label: "Extra 15",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-16",
        label: "Extra 16",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-17",
        label: "Extra 17",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-18",
        label: "Extra 18",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-19",
        label: "Extra 19",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "content-customDimension-20",
        label: "Extra 20",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
    ],
  },
  {
    name: "Ads",
    fields: [
      {
        name: "ad-resource",
        label: "Resource",
        required: false,
        type: "text",
        props: {
          placeholder: "Resource URL",
        },
      },
      {
        name: "ad-title",
        label: "Title",
        required: false,
        type: "text",
        props: {
          placeholder: "Resource Title",
        },
      },
      {
        name: "ad-campaign",
        label: "Campaign",
        required: false,
        type: "text",
        props: {
          placeholder: "Name of the campaign",
        },
      },
      {
        name: "$adsDuration",
        label: "Duration in second",
        required: false,
        type: "number",
        props: {
          min: 5,
          max: 120,
          defaultValue: 5,
        },
      },
      {
        name: "$adsVersion",
        label: "Version",
        required: false,
        type: "text",
        props: {
          placeholder: "Ads adapter version",
          defaultValue: "0.0.1",
        },
      },
      {
        name: "ad-ignore",
        label: "Ignore Join Time",
        required: false,
        type: "boolean",
        props: {
          defaultValue: false,
        },
      },
      {
        name: "$adsClickThroughURL",
        label: "Click-through URL",
        required: false,
        type: "text",
        props: {
          placeholder: "example.com",
        },
      },
      {
        name: "$adsIsVisible",
        label: "Visible",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: true,
        },
      },
      {
        name: "$adsIsSkippable",
        label: "Skippable",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: true,
        },
      },
      {
        name: "$adsIsFullScreen",
        label: "Fullscreen",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: false,
        },
      },
      {
        name: "$adsAudioEnabled",
        label: "Audio enabled",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: true,
        },
      },
      {
        name: "ad-metadata",
        label: "Metadata",
        required: false,
        type: "text",
        props: {
          placeholder: "Mixed extra information about ads like",
        },
      },
      {
        name: "ad-creativeId",
        label: "Creative",
        required: false,
        type: "text",
        props: {
          placeholder: "Creative code",
        },
      },
      {
        name: "ad-provider",
        label: "Provider",
        required: false,
        type: "text",
        props: {
          placeholder: "Provider code",
        },
      },

      {
        name: "ad-givenAds",
        label: "Given Ads",
        required: false,
        type: "number",
        props: {
          min: 0,
          defaultValue: 1,
          max: 3,
        },
      },
      {
        name: "ad-givenBreaks",
        label: "Given Breaks",
        required: false,
        type: "number",
        props: {
          min: 0,
          defaultValue: 1,
          max: 3,
        },
      },
      {
        name: "ad-blockDetection",
        label: "Ignore",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: false,
        },
      },
      {
        name: "ad-customDimension-1",
        label: "Extra 1",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "ad-customDimension-2",
        label: "Extra 2",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "ad-customDimension-3",
        label: "Extra 3",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "ad-customDimension-4",
        label: "Extra 4",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "ad-customDimension-5",
        label: "Extra 5",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "ad-customDimension-6",
        label: "Extra 6",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "ad-customDimension-7",
        label: "Extra 7",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "ad-customDimension-8",
        label: "Extra 8",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "ad-customDimension-9",
        label: "Extra 9",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
      {
        name: "ad-customDimension-10",
        label: "Extra 10",
        required: false,
        type: "text",
        props: {
          placeholder: "...",
        },
      },
    ],
  },
  {
    name: "User",
    fields: [
      {
        name: "user-name",
        label: "Name",
        required: false,
        type: "text",
        props: {
          placeholder: "User ID value inside your system",
        },
      },
      {
        name: "user-type",
        label: "Type",
        required: false,
        type: "text",
        props: {
          placeholder: "Registered",
        },
      },
      {
        name: "user-email",
        label: "Email",
        required: false,
        type: "text",
        props: {
          placeholder: "user@mail.com",
        },
      },
      {
        name: "user-anonymousId",
        label: "Anonymous ID",
        required: false,
        type: "text",
        props: {
          placeholder: "anonymous",
        },
      },
      {
        name: "user-obfuscateIp",
        label: "Obfuscated IP",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: false,
        },
      },
    ],
  },
  {
    name: "Device",
    fields: [
      {
        name: "device-code",
        label: "Code",
        required: false,
        type: "select",
        options: [
          { name: "", code: "" },
          { code: "PCLinux", name: "PC( Linux )" },
          { code: "PCWindows", name: "PC( Windows )" },
          { code: "PCMac", name: "PC( MAC )" },
          { code: "Panasonic", name: "Panasonic" },
          { code: "VodafoneSTB", name: "Vodafone STB" },
          { code: "Samsung", name: "Samsung" },
          { code: "Philips", name: "Philips" },
          { code: "LG", name: "LG" },
          { code: "iPad", name: "iPad" },
          { code: "iPhone", name: "iPhone" },
          { code: "Android", name: "Android" },
          { code: "Xbox360", name: "Xbox360" },
          { code: "Playstation", name: "Playstation" },
          { code: "Curl", name: "Curl" },
          { code: "Sony", name: "Sony" },
          { code: "WindowsPhone", name: "Windows Phone" },
          { code: "Unknown", name: "Unknown" },
          { code: "WuakiTv", name: "WuakiTv" },
          { code: "BlackBerry", name: "BlackBerry" },
          { code: "NintendoWiiU", name: "Nintendo Wii U" },
          { code: "PlaystationVita", name: "Playstation Vita" },
          { code: "BlackBerryPlayBook", name: "BlackBerry PlayBook" },
          { code: "Playstation3", name: "Playstation 3" },
          { code: "Playstation4", name: "Playstation 4" },
          { code: "XboxOne", name: "Xbox One" },
          { code: "Playstation2", name: "Playstation 2" },
          { code: "ChromeOS", name: "Chrome OS" },
          { code: "FreeBSD", name: "FreeBSD" },
          { code: "Netgem", name: "Netgem" },
          { code: "SonyBravia", name: "Sony Bravia" },
          { code: "SonyBluray", name: "Sony Bluray" },
          { code: "iPod", name: "iPod" },
          { code: "Chromecast", name: "Chromecast" },
          { code: "Roku", name: "Roku" },
          { code: "SunOS", name: "SunOS" },
          { code: "Nokia", name: "Nokia" },
          { code: "VF_STB", name: "VF_STB" },
          { code: "RokuHD", name: "Roku HD" },
          { code: "RokuLT", name: "Roku LT" },
          { code: "Roku3", name: "Roku 3" },
          { code: "RokuStick", name: "Roku Stick" },
          { code: "Hisense", name: "Hisense" },
          { code: "tvOS", name: "tvOS" },
          { code: "SamsungTizen", name: "Samsung - Tizen" },
          { code: "Roku4", name: "Roku 4" },
          { code: "AppleTV", name: "Apple TV" },
          { code: "ArrisSTB", name: "Arris STB" },
          { code: "iOS", name: "iOS" },
          { code: "AndroidTV", name: "Android TV" },
          { code: "FireTV", name: "FireTV" },
          { code: "FreeSat", name: "FreeSat" },
          { code: "LebaraSTB", name: "Lebara STB" },
          { code: "AndroidTablet", name: "Android tablet" },
          { code: "AndroidPhone", name: "Android phone" },
          { code: "STB", name: "STB" },
          { code: "STBIZZI_MEX", name: "STB IZZI / MEX" },
          { code: "STBTotalPlay_MEX", name: "STB TotalPlay / MEX" },
          { code: "STBTelecentro_ARG", name: "STB Telecentro / ARG" },
          { code: "STBNuevoSiglo_URU", name: "STB NuevoSiglo / URU" },
          { code: "STBTCC_URU", name: "STB TCC / URU" },
          { code: "STBMontecarlo_URU", name: "STB Montecable / URU" },
          { code: "STBSupercanal_ARG", name: "STB Supercanal / ARG" },
          { code: "STBTelefonica_PER", name: "STB Telefonica / PER" },
          { code: "PCWindowsUWP", name: "PC (Windows) UWP" },
          { code: "MobileUWP", name: "Mobile UWP" },
          { code: "XboxOneUWP", name: "XBOX ONE UWP" },
          { code: "OperaTV", name: "OperaTV" },
          { code: "2400SK", name: "2400SK" },
          { code: "4200SK", name: "4200SK" },
          { code: "4201SK", name: "4201SK" },
          { code: "4500SK", name: "4500SK" },
          { code: "RokuSD", name: "Roku SD" },
          { code: "RokuXD", name: "Roku XD" },
          { code: "Roku1", name: "Roku 1" },
          { code: "Roku2", name: "Roku 2" },
          { code: "RokuTV", name: "Roku TV" },
          { code: "RokuExpress", name: "Roku Express" },
          { code: "RokuPremiere", name: "Roku Premiere" },
          { code: "RokuUltra", name: "Roku Ultra" },
          { code: "TCL", name: "TCL" },
          { code: "TelecableSTB", name: "Telecable STB" },
          { code: "Tivo_STB", name: "Tivo STB" },
          { code: "Sagemcom", name: "Sagemcom" },
          { code: "Vestel", name: "Vestel" },
          { code: "Telecable STB Sagemcom", name: "Telecable STB Sagemcom" },
          { code: "LebaraPlayCoshipSTB", name: "Lebara Play Coship STB" },
          { code: "HorizonSTB", name: "Horizon STB" },
          { code: "CACTUS", name: "CACTUS" },
          { code: "HbbTV", name: "HbbTV" },
          { code: "Foxxum", name: "Foxxum" },
          { code: "Netrange", name: "Netrange" },
          { code: "LYF", name: "LYF" },
          { code: "AlhambraSTB", name: "Alhambra STB" },
          { code: "TOSHIBA Regza", name: "TOSHIBARegza" },
          { code: "Xiaomi", name: "Xiaomi" },
          { code: "ComcastXfinity", name: "Comcast Xfinity" },
          { code: "CoxContourTV", name: "Cox Contour TV" },
          { code: "NotInformed", name: "Not informed" },
          { code: "SURICATA", name: "SURICATA" },
          { code: "BytelRTI90", name: "Bouygues Legacy" },
          { code: "BytelRTI422", name: "Bouygues Sensation" },
          { code: "BytelOB1C", name: "Bouygues Sensation Cable" },
          { code: "BytelOB1F", name: "Bouygues Cable" },
          { code: "Peloton Tablet", name: "Peloton Tablet" },
          { code: "NGTV", name: "NGTV" },
          { code: "HDMI", name: "HDMI" },
        ],
      },
      {
        name: "device-model",
        label: "Model",
        required: false,
        type: "text",
        props: {
          placeholder: "Model name",
        },
      },
      {
        name: "device-brand",
        label: "Brand",
        required: false,
        type: "text",
        props: {
          placeholder: "Vendor name",
        },
      },
      {
        name: "device-type",
        label: "Type",
        required: false,
        type: "text",
        props: {
          placeholder: "pc, smartphone, stb, tv, etc",
        },
      },
      {
        name: "device-osName",
        label: "OS Name",
        required: false,
        type: "text",
        props: {
          placeholder: "Linux",
        },
      },
      {
        name: "device-isAnonymous",
        label: "Is Anonymous",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: false,
        },
      },
    ],
  },
  {
    name: "Browser",
    fields: [
      {
        name: "device-browserName",
        label: "Name",
        required: false,
        type: "text",
        props: {
          placeholder: "firefox",
        },
      },
      {
        name: "device-browserVersion",
        label: "Version",
        required: false,
        type: "text",
        props: {
          placeholder: "79",
        },
      },
      {
        name: "device-browserType",
        label: "Type",
        required: false,
        type: "text",
        props: {
          placeholder: "mobile",
        },
      },
      {
        name: "device-browserEngine",
        label: "Engine",
        required: false,
        type: "text",
        props: {
          placeholder: "SpiderMonkey",
        },
      },
    ],
  },
  {
    name: "Parse",
    fields: [
      {
        name: "parse-manifest",
        label: "Manifest",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: false,
        },
      },
      {
        name: "parse-cdnNode",
        label: "CDN Node",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: false,
        },
      },
      {
        name: "parse-cdnNameHeader",
        label: "CDN Name Header",
        required: false,
        type: "text",
        props: {
          placeholder: "x-cdn-forward",
        },
      },
    ],
  },
  {
    name: "Network",
    fields: [
      {
        name: "host",
        label: "Host",
        required: false,
        type: "text",
        props: {
          placeholder: "a-fds.youborafds01.com",
        },
      },
      {
        name: "app-https",
        label: "HTTPS",
        required: false,
        type: "boolean",
        props: {
          defaultChecked: false,
        },
      },
      {
        name: "network-connectionType",
        label: "Connection Type",
        required: false,
        type: "select",
        options: [
          { name: "", code: "" },
          { name: "Dialup", code: "dialup" },
          { name: "Cable/DSL", code: "cable/dsl" },
          { name: "Cellular", code: "celullar" },
          { name: "Corporate", code: "corporate" },
        ],
        props: {
          placeholder: "Connection type code",
        },
      },
      {
        name: "network-ip",
        label: "IP",
        required: false,
        type: "text",
        props: {
          placeholder: "1.1.1.1",
        },
      },
      {
        name: "network-isp",
        label: "ISP",
        required: false,
        type: "text",
        props: {
          placeholder: "Comcast",
        },
      },
    ],
  },
]

function Section(props) {
  return (
    <section className="flex flex-col col-span-1 shadow-md md:col-span-2 lg:col-span-1 md:row-span-2">
      <header className="shadow">
        <h1 className="p-4 text-lg font-semibold tracking-wide text-gray-900 sm:text-2xl">
          Plugin Options
        </h1>
      </header>

      <Form {...props} />
    </section>
  )
}

function Form({ onSubmit, onReset, disabled }) {
  const methods = useForm()

  function reset() {
    onReset(methods.reset)
  }

  return (
    <FormProvider {...methods} disabled={disabled}>
      <form
        id="optionsForm"
        className={`overflow-y-auto ${disabled && "opacity-50"}`}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="px-6 mb-4">{sections.map(FieldSection)}</div>
      </form>

      <footer className="flex justify-end gap-4 px-8 py-4 shadow">
        <ResetButton disabled={disabled} reset={reset} />
        <StartButton disabled={disabled} />
      </footer>
    </FormProvider>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

function ResetButton({ disabled, reset }) {
  const activeStyle = disabled
    ? "text-gray-500 cursor-not-allowed"
    : "text-gray-700"

  return (
    <button
      onClick={reset}
      className={`px-6 py-4 text-sm font-medium leading-5 tracking-wide uppercase transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 ${activeStyle}`}
    >
      reset
    </button>
  )
}

ResetButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
}

function StartButton({ disabled }) {
  const activeStyle = disabled
    ? "bg-indigo-500 cursor-not-allowed"
    : "bg-indigo-600 "

  return (
    <button
      type="submit"
      form="optionsForm"
      className={`px-6 py-4 text-sm font-medium leading-5 tracking-wide text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 ${activeStyle}`}
    >
      start
    </button>
  )
}

StartButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
}

const FieldPropTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  props: PropTypes.object,
}

function FieldSection({ name, fields }) {
  return (
    <div key={name} className="pt-8 mt-8 border-t border-gray-200 first:mt-0">
      <div>
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {name}
          </h3>
        </div>

        <div>{fields.map(Field)}</div>
      </div>
    </div>
  )
}

FieldSection.propTypes = {
  name: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.shape(FieldPropTypes)).isRequired,
}

function Field({ type, ...props }) {
  switch (type) {
    case "text": {
      return <TextField key={props.name} {...props} />
    }
    case "number": {
      return <NumberField key={props.name} {...props} />
    }
    case "boolean": {
      return <CheckboxField key={props.name} {...props} />
    }
    case "select": {
      return <SelectField key={props.name} {...props} />
    }
    case "component": {
      return <props.component key={props.name} />
    }
    default: {
      throw Error(`Field type ${type} not mapped!`)
    }
  }
}

function TextField({ name, label, required, props }) {
  const { register, errors, disabled } = useFormContext()

  return (
    <FieldContainer>
      <Label htmlFor={name}>
        {label}
        {required && " *"}
      </Label>
      <FieldSet disabled={disabled}>
        <input
          {...props}
          className="block w-full pr-10 text-sm leading-5 rounded shadow-sm form-input"
          id={name}
          name={name}
          ref={register({ required })}
        />
        <ErrorIcon name={name} errors={errors} />
      </FieldSet>
    </FieldContainer>
  )
}

TextField.propTypes = FieldPropTypes

function NumberField({ name, label, required, props }) {
  const { register, errors, disabled } = useFormContext()

  return (
    <FieldContainer>
      <Label htmlFor={name}>
        {label}
        {required && " *"}
      </Label>
      <FieldSet disabled={disabled}>
        <input
          {...props}
          className="block w-1/2 text-sm leading-5 rounded-md shadow-sm form-input"
          id={name}
          name={name}
          ref={register({ required })}
          type="number"
        />
        <ErrorIcon name={name} errors={errors} />
      </FieldSet>
    </FieldContainer>
  )
}

NumberField.propTypes = FieldPropTypes

function CheckboxField({ name, label, required, props }) {
  const { register, errors, disabled } = useFormContext()

  return (
    <FieldContainer>
      <Label htmlFor={name}>
        {label}
        {required && " *"}
      </Label>
      <FieldSet disabled={disabled}>
        <input
          {...props}
          className="block w-4 h-4 text-sm leading-5 shadow-sm form-checkbox"
          id={name}
          name={name}
          ref={register({ required })}
          type="checkbox"
        />
        <ErrorIcon name={name} errors={errors} />
      </FieldSet>
    </FieldContainer>
  )
}

CheckboxField.propTypes = FieldPropTypes

function SelectField({ name, label, required, options }) {
  const { register, errors, disabled } = useFormContext()

  return (
    <FieldContainer>
      <Label htmlFor={name}>
        {label}
        {required && " *"}
      </Label>
      <FieldSet disabled={disabled}>
        <select
          className="block w-full text-sm leading-5 rounded-md shadow-sm form-select"
          id={name}
          name={name}
          ref={register({ required })}
        >
          {options.map((option) => (
            <Option key={option.code} {...option} />
          ))}
        </select>
        <ErrorIcon name={name} errors={errors} />
      </FieldSet>
    </FieldContainer>
  )
}

const OptionPropTypes = {
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

SelectField.propTypes = {
  ...FieldPropTypes,
  options: PropTypes.arrayOf(PropTypes.shape(OptionPropTypes)).isRequired,
}

function Option({ code, name }) {
  return <option value={code}>{name}</option>
}

Option.propTypes = OptionPropTypes

function ErrorIcon({ name, errors }) {
  return (
    <>
      {errors[name] && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <SmallErrorIcon />
        </div>
      )}
    </>
  )
}

ErrorIcon.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
}

function SmallErrorIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function FieldContainer({ children }) {
  return (
    <div className="grid items-center mt-4 sm:grid-cols-3 sm:pt-5">
      {children}
    </div>
  )
}

FieldContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block grid-cols-1 text-sm font-medium leading-5 text-gray-700"
    >
      {children}
    </label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

function FieldSet({ children, disabled }) {
  return (
    <fieldset className="relative col-span-2 mt-1" disabled={disabled}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...child.props,
          className: `${child.props.className} ${
            disabled && "cursor-not-allowed"
          }`,
        })
      )}
    </fieldset>
  )
}

FieldSet.propTypes = {
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

function TransactionCodeField() {
  const [value, setValue] = React.useState(uuidv4())
  const { register, errors, disabled } = useFormContext()

  function reloadUUID() {
    setValue(uuidv4())
    delete errors["content-transactionCode"]
  }

  return (
    <FieldContainer style="sm:grid-cols-4">
      <Label htmlFor="content-transactionCode">Transaction *</Label>
      <FieldSet disabled={disabled}>
        <input
          className="block w-full pr-10 text-sm leading-5 rounded shadow-sm form-input"
          id="content-transactionCode"
          name="content-transactionCode"
          onChange={(event) => setValue(event.target.value)}
          placeholder="Custom unique code to identify the view"
          ref={register({ required: true })}
          value={value}
        />
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500"
          onClick={reloadUUID}
        >
          {errors["content-transactionCode"] ? (
            <SmallErrorIcon />
          ) : (
            <SmallReloadIcon />
          )}
        </div>
      </FieldSet>
    </FieldContainer>
  )
}

function SmallReloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="w-5 h-5"
      fill="currentColor"
    >
      <path d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z" />
    </svg>
  )
}

export { Section }
