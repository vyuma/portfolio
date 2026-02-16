export interface FoodPlace {
  name: string;
  category: string;
  comment: string;
  mapUrl: string;
  imageUrl?: string;
  rating?: number; // 1〜5
}

export const foods: FoodPlace[] = [
  {
    name:"うまいもんや五エ衛門",
    category:"お好み焼き",
    
    comment:"お好み焼きと焼きそばの広島風の焼きそばが食べられる店、ソースと麺の相性が抜群で広島焼きと焼きそばがパサパサで美味しい",
    mapUrl:"https://maps.app.goo.gl/MQ7VNiN59XFxgdjK8?g_st=ic",

    imageUrl:"/food/IMG_4504.jpg",
    rating: 4
  },
  {
    name:"ラーメン蘇我 西条店",
    category:"ラーメン",
    comment:"基本は豚骨屋ではあるがその中で期間限定メニューのホタテと昆布の出汁をとったラーメンがとても美味しい、出しとストレートの細麺の相性が抜群でさらにちゃんとホタテが一つ入っているのが嬉しい.",
    mapUrl:"https://maps.app.goo.gl/9Zt3n2sHj8h7mL1i6?g_st=ic",
    imageUrl:"/food/IMG_4527.jpg",
    rating: 5,
  },
  {
    name:"唐唐亭",

    category:"つけ麺",

    comment:"つけ麺が美味しいお店、麺は太麺でコシがあり、スープは基本的に薄いが辛さを自分好みに調整できる。スープは辛さがかなり調整できる, 隣で20辛くらいのを食べていた人がいた",
    mapUrl:"https://maps.app.goo.gl/6cPj3K6MsDjmK6SL6?g_st=ic",
    imageUrl:"/food/IMG_4510.jpg",
    rating:3
  },
  {
    name:"カツ庵",
    category:"とんかつ",
    comment:"朝からやっているとんかつの店、朝はカツをたった550円で食べられるコスパの良いお店、カツはロース・ヒレから選ぶことができる。さらにご飯を麦ご飯に変更できる。トンカツはとてもジューシーで揚げたてを食べられる。",
    mapUrl:"https://maps.app.goo.gl/QH1DSh4uWwDY4djC8?g_st=ic",
    imageUrl:"/food/IMG_4511.jpg",
    rating: 4
  },
  {
    name:"100hourカレー",
    category:"カレー",
    comment:"カレーでコクがあり甘いカレーとスパイスの効いたかなりとろみの少ないカレー。辛いのと甘いのが選べるが、辛いのは辛い",
    mapUrl:"https://maps.app.goo.gl/yR8SmnzTLDo63Q61A?g_st=ic",
    imageUrl:"/food/IMG_4524.jpg",
    rating: 3
  },
  {
    name:"シアトルコーヒー",
    category:"コーヒー",
    comment:"シアトル発のコーヒーチェーン店、コーヒーはもちろん美味しいが、フードメニューも充実している。いちごヨーグルトがうまい",
    mapUrl:"https://maps.app.goo.gl/siH4ty2LMZSWMZqX8?g_st=ic",
    imageUrl:"/food/IMG_4517.jpg",
    rating:2
  },
  {
    name:"カスうどん",
    category:"うどん",
    comment:"カスうどんが美味しいお店、カスうどんは牛の小腸を揚げたものが入っているうどんで、カスの旨みが出汁に溶け込んでいてとても美味しい。さらに麺もコシがあって美味しい。たくさん食べたい",
    mapUrl:"https://maps.app.goo.gl/6cPj3K6MsDjmK6SL6?g_st=ic",
    imageUrl:"/food/IMG_4560.jpg",
    rating:4.5
  }


];
