const recipes = [
  {
    _id: "1",
    info: {
      title: "recipe1",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://images.unsplash.com/photo-1439393161192-32360eb753f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "2",
    info: {
      title: "recipe2",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/170911164757-apple-pie-trail-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "3",
    info: {
      title: "recipe3",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/180212123837-peter-rabbit-movie-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "4",
    info: {
      title: "recipe4",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "5",
    info: {
      title: "recipe5",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/171204174129-pkg-avocado-health-benefits-food-as-fuel-00003102-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "6",
    info: {
      title: "recipe6",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/161223130951-faf-howard-food-as-fuel-after-workout-00002110-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "7",
    info: {
      title: "recipe7",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/170224161236-water-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "8",
    info: {
      title: "recipe8",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/170224160733-beer-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "9",
    info: {
      title: "recipe9",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://images.unsplash.com/photo-1439393161192-32360eb753f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "10",
    info: {
      title: "recipe10",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/170911164757-apple-pie-trail-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "11",
    info: {
      title: "recipe11",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/180212123837-peter-rabbit-movie-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "12",
    info: {
      title: "recipe12",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "13",
    info: {
      title: "recipe13",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/171204174129-pkg-avocado-health-benefits-food-as-fuel-00003102-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "14",
    info: {
      title: "recipe14",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/161223130951-faf-howard-food-as-fuel-after-workout-00002110-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "15",
    info: {
      title: "recipe15",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/170224161236-water-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  },
  {
    _id: "16",
    info: {
      title: "recipe16",
      description: "babababababa babababababa babababababa babababababa"
    },
    img: {
      url:
        "https://cdn.cnn.com/cnnnext/dam/assets/170224160733-beer-super-tease.jpg"
    },
    nutritionList: [
      ["Carbohydrate", 123.2, "g"],
      ["Fat", 322, "g"],
      ["Protein", 90, "g"],
      ["Energy", 3000, "cal"]
    ]
  }
];

export function getRecipes(start) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (start >= recipes.length) {
        resolve([]);
      }
      const end = Math.min(start + 10, recipes.length);
      resolve(recipes.slice(start, end));
    }, 4000);
  });
  return promise;
}
