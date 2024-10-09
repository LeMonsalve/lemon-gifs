export type Gif = {
  id:     string;
  title:  string;
  url:    string;
}

export type GiphyResponse = {
  data:       GifResponse[];
}

export type GifResponse = {
  id:                         string;
  title:                      string;
  images:                     Images;
}

type Images = {
  downsized_medium:         The480_WStill;
}

type The480_WStill = {
  url:    string;
}