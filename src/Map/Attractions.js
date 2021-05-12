import beaty from './beaty.png'
var attractionList = [
      {
        id: 0,
        title: "Beaty Diversity Museum",
        position: { lat: 49.26344301576946, lng: -123.25094624446055 },
      },
      {
        id: 1,
        title: "Museum of Anthropology",
        position: { lat: 49.26963449027677, lng: -123.25937652911632 },
      },
      {
        id: 2,
        title: "Wreck Beach",
        position: { lat: 49.26258670860121, lng: -123.26143250331376},
      },
      {
        id: 3,
        title: "Spanish Bank",
        position: { lat: 49.27642699572491, lng: -123.21379562013517},
      },
      {
        id: 4,
        title: "Pacific Spirit Park",
        position: { lat: 49.25419108288779, lng: -123.21543281574364},
      },
      {
        id: 5,
        title: "UBC Botanic Garden",
        position: { lat: 49.25393369611467, lng: -123.25105434446105},
      },
      {
        id: 6,
        title: "Nitobe Garden",
        position: { lat: 49.26633817726635, lng: -123.25964254446053},
      },
      {
        id: 7,
        title: "Thunderbird Stadium",
        position: { lat: 49.25462725248043, lng: -123.24551437329696},
      },
      {
        id: 8,
        title: "UBC Farm",
        position:{ lat: 49.250994053452075, lng: -123.23881390028102},
      },
      {
        id: 9,
        title: "Triumf",
        position:{ lat: 49.24792636346057, lng: -123.23083792911709},
      }
]

export function getAttractionList(){
    return attractionList;
}