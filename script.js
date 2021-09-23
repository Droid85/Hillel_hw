const users = [

    {
  
      firstName: 'Bob',

      lastName: 'Dealan',
  
      age: 27,
  
      address:{
  
          country:'USA',
  
          city:'LA'
  
      },
  
      marks:[2,3,5,4,2,3,1,5]
  
    },
  
    {
  
      firstName: 'July',

      lastName: 'Roberts',
  
      age: 21,
  
      address:{
  
          country:'Ukraine',
  
          city:'Kiev'
  
      },
  
      marks:[4,4,5,4,3,4,3,5]
  
    },
  
    {
  
      firstName: 'Monya',
  
      age: 15,
  
      address:{
  
          country:'Ukraine',
  
          city:'Odessa'
  
      },
  
      marks:[5,1,5,1,5,1,5,1]
  
    },
  
    {
  
      lastName: 'Gates',
  
      age: 19,
  
      address:{
  
          country:'Ukraine',
  
          city:'Lviv'
  
      },
  
      marks:[3,4,5,3,1,2,4,6]
  
    },

    {
  
      age: 31,
  
      address:{
  
          country:'England',
  
          city:'London'
  
      },
  
      marks:[5,3,5,3,1,2,5,7]
  
    },
  
  ];

let extendedArray = [];
let adresses;

let isNotAdult = users.filter(item => item.age < 18);

console.log(isNotAdult);

let foreignStudent = users.filter(item => item.address.country !== 'Ukraine');

console.log(foreignStudent);

function getNewArr(arr) {
  extendedArray = arr.slice();
  extendedArray.forEach(function (item) {
      item.isAdult = item.age > 18 ? true : false;
      item.averageMark = item.marks.reduce((sum, curent) => sum + curent, 0) / item.marks.length;
  });
  return extendedArray;
}

getNewArr(users);

console.log(extendedArray);

let averageMark = () => {
  let result = 0;
  for (let item of extendedArray) {
  result += item.averageMark;
}
  return result / extendedArray.length
}

console.log(averageMark());

function getAddress(arr) {
  return arr.reduce((place, {address}) => {
    place.countries.push(address.country);
    place.citys.push(address.city);
    return place;
  }, { countries: [], citys: [] }
  );
}

adresses = getAddress(users);

console.log(adresses);

function getNamesArray(arr) {
	return arr.reduce((total, curent) => {
		let {firstName = 'John', lastName = 'Doe'} = curent;
		total.firstNames.push(firstName);
    total.lastNames.push(lastName);
		return total;
	}, { firstNames: [], lastNames: [] });
};

let namesArray = getNamesArray(users);

console.log(namesArray);

function getBigArr(arr) {
	return arr.reduce((total, curent) => {
	  if (Object.keys(curent).length >= 3) {
		total.push(curent);
	  }
	  return total;
	}, []);
  }
  
  let bigArr = getBigArr(users);
  
  console.log(bigArr);

  function filterArray(arr) {
	return arr.filter(element => {
		let values = Object.values(element);
		return values.some((val) => typeof val === 'string' ) && values.some((val) => typeof val === 'number')
	});
}

let filteredArray = filterArray(users);

console.log(filteredArray);
