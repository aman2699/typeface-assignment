export const RHS_ACTIVE_TAB = {
  VISUALS: 0,
  ELEMENTS: 1,
  AUDIO: 2,
  TEXT: 3,
  BRANDING: 4,
};

export const ELEMENT_TAB = {
  EMOJI: 0,
  STICKER: 1,
  GIF: 2,
};

export const DASHBOARD_ACTIVE_MENU = {
  DASHBOARD: 0,
  UPLOADS: 1,
  MY_PROJECTS: 2,
  WHATS_NEW: 3,
  SETTING: 4,
  HELP: 5,
  LOGOUT: 6,
  TRENDING :7
};
export const VISUAL_TAB = {
  LIBRARY: 0,
  TEXTURES: 1,
  MY_UPLOAD: 2,
  DEMARK: 3,
};
export const AUDIO_TAB = {
  MUSIC: 0,
  VOICE_OVER: 1,
  MY_UPLOAD: 2,
};

export const INPUT_CATEGORY_ENUM = {
  Text: 0,
  Video: 1,
  Audio: 2,
  Article: 3,
  Title: 4,
};

export const INPUT_CATEGORY_STRING = {
  0: "Text",
  1: "Video",
  2: "Audio",
  3: "Article",
  4: "Title",
};

export const PROJECT_CATEGORY = {
  0: ["video", "short video", "audio","web story"],
  1: ["short video","web story"],
  2: ["video", "short video","web story"],
  3: ["video", "short video","web story","podcast"],
  4: ["video","web story"],
};

export const ASPECT_RATIO ={
  0 : "16:9",
  1: "9:16"
}

export const API_HOST = "https://172.29.25.91";

export const PER_PAGE_ARTICLE_SIZE = 20

export const TEXTURES = [
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-2431622-jpeg.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-2425918-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-2417558-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-2416803-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-2416803-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-2372532-jpeg.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-2372532-jpeg.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-2292416-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-597613-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-586442-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-579938-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-579938-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-530832-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-514191-original.png",
  "https://dhwyjedqg9b7u.cloudfront.net/textures/image-from-rawpixel-id-494501-original.png",
];

export const AVAILABLE_FONT_SIZE = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "24",
  "26",
  "28",
  "30",
];
export const AVAILABLE_FONT_STYLE = [
  "Roboto, sans-serif",
  " Arial",
  " Arial Narrow",
  " Times",
  " Times New Roman",
  " Helvetica",
  " Courier",
  " Courier New",
  " Verdana",
  " Candara",
  " Geneva",
  " Calibri",
  " Optima",
  " Cambria",
  " Garamond",
  " Perpetua",
  " Monaco",
  " Didot",
  " Brush Script",
  " Lucida Bright",
  " Copperplate",
];

export const DEFAULT_FONTS = {
  Size: AVAILABLE_FONT_SIZE[10],
  FontFamily: AVAILABLE_FONT_STYLE[0],
  TextColor: "white",
  BackGround: "#00000066",
  FontWeight : false
};

export const CANVAS_MODE = {
  LIVE: 0,
  PREVIEW: 1,
  RECORDING: 2,
};

export const DEFAULT_SCENE_DATA = {
  duration: 5,
  end: 0,
  id: 0,
  image: "https://static.sli.ke/dam/dev/asset/ia/kg/1siakg696o.png",
  keywords: [],
  start: 0,
  text: "Sample Text",
  type: 0,
  video: null,
  voice: "",
  meta: {
    textfont: {
      bg: DEFAULT_FONTS.BackGround,
      co: DEFAULT_FONTS.TextColor,
      ff: DEFAULT_FONTS.FontFamily,
      fs: DEFAULT_FONTS.Size,
    },
  },
};

export const PROJECT_STATUS = {
  PROJECT_DELETED: -1,
  PROJECT_CREATED: 0,
  PROJECT_PREPROCESSED: 1,
  PROJECT_DRAFT: 2,
  PROJECT_GENERATING: 3,
  PROJECT_GENERATED: 4,
  PROJECT_PUBLISHED:5,
};

export const GOOGLE_CLIENT_ID = "251182326945-upvcf35tbeq98h2hp0l31r8bfavphfhb.apps.googleusercontent.com"

export const CHANNEL_TYPE = {
  YOUTUBE: 'youtube',
  FACEBOOK: 'facebook',
};

export const VOICES = [
  {
    id: "coqui-tts:en_vctk#p225",
    name: "Male (USA)",
    url: "",
  },
  {
    id: "coqui-tts:en_vctk#p226",
    name: "Male (UK)",
    url: "",
  },
  {
    id: "coqui-tts:en_vctk#p226",
    name: "Male (Cananda)",
    url: "",
  },
  {
    id: "coqui-tts:en_vctk#p228",
    name: "Male (Aus)",
    url: "",
  },
  {
    id: "coqui-tts:en_vctk#p230",
    name: "Male (Ire)",
    url: "",
  },
  {
    id: "coqui-tts:en_vctk#p263",
    name: "Female (USA)",
    url: "",
  },
  {
    id: "coqui-tts:en_vctk#268",
    name: "Female (UK)",
    url: "",
  },
  {
    id: "coqui-tts:en_vctk#p271",
    name: "Female (CANADA)",
    url: "",
  },
  {
    id: "coqui-tts:en_vctk#p273",
    name: "Female (AUS)",
    url: "",
  },
  {
    id: "coqui-tts:en_vctk#p260",
    name: "Female (Ire)",
    url: "",
  },
];

export const SLIKE_URL ="https://tvid.in"


export const ARTICLE_ENUM = {
  TITLE: 1,
  HEADING: 2,
  DESCRIPTION: 0,
};


export const API_METHOD ={
  LIST_ARTICLE : "article.list",
  GET_ARTICLE : "article.get",
  OPEN_VIDEO :"open.video",
  DOWNLOAD_VIDEO:"open.download",
  PROJECT_LIST :"project.list",
  PROJECT_DELETE:"project.delete",
  PROJECT_GET :"project.get",
  ASSET_LIST :"asset.list",
  ASSET_DELETE :"asset.delete",
  CREATE_TEXT_PROJECT :"project.text",
  TEXT_TO_AUDIO:"open.textaudio",
  PROJECT_UPDATE :"project.update",
  LOGIN :"auth.login",
  PROJECT_GENERATE :"project.generate",
  PUBLISH_VIDEO:"project.publish",
  CREATE_CHANNEL :"channel.create",
  LIST_CHANNEL :"channel.list",
  DELETE_CHANNEL :"channel.delete",
  GET_ET_ARTICLES :"open.et"
}
export const LOAD_ALREADY=6

export const APP_EVENTS={
  PROJECT_CREATED : "PROJECT_CREATED"
}

export const PARENT_ACTION ={
  ARTICLE_TO_VIDEO :"ARTICLE_TO_VIDEO"
}