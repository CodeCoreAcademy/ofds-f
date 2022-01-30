const db = {
	"customers":[
		{
			"id":1,
			"name":"Karun",
			"email":"asdasdasd",
			"phone":"234345",
			"address":[
                {
                    "type":"home",
                    "house_no":1,
                    "street_name":"MG Road",
                    "city":"kolkata",
                    "pin":"700060",
                    "landmark":"montur pukur ",
                    "floor":4
                }
			],
			"avatar":"./asdsd/images/img.jpg",
			"password":"asasdadasd"
		},
		{
			"id":2,
			"name":"Tarun",
			"email":"asdasdasd",
			"phone":"23456345",
			"address":[
                {
                    "type":"home",
                    "house_no":3,
                    "street_name":"MRG Road",
                    "city":"kolkata",
                    "pin":"700604",
                    "landmark":"montur math ",
                    "floor":4
                }
			],
			"avatar":"./asdsd/images/img.jpg",
			"password":"asasdadasd"
		}

	],
	
	"cuisines":[
		{
			"id":1,
			"name":"Mexican",
			"pic":"/images/indian.jpg",
		},
		{
			"id":2,
			"name":"Chinese",
			"pic":"chhobi.jpg",
		},
		{
			"id":3,
			"name":"Mughlai",
			"pic":"/images/chhobi.jpg",
		},
		{
			"id":4,
			"name":"Indian",
			"pic":"/images/indian.jpg",
		},
		{
			"id":5,
			"name":"French",
			"pic":"chhobi.jpg",
		},
		{
			"id":6,
			"name":"Korean",
			"pic":"chhobi.jpg",
		},
		{
			"id":7,
			"name":"Thai",
			"pic":"chhobi.jpg",
		},
	],
	
	"foods":[
		{
			"id":1,
			"cuisine_id":1,
			"type":"breakfast",
			"price":230,
			"name":"Tacos",
			"pic":"/images/khabar.jpg",
			"desc":"Try our delicious Mexican Tacos at affordable prices",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":2,
			"cuisine_id":1,
			"type":"breakfast",
			"price":169,
			"name":"Tortilla",
			"pic":"/images/khabar.jpg",
			"desc":"Flavours of Mexico",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":3,
			"cuisine_id":1,
			"type":"Quesadilla",
			"price":123123,
			"name":"alu bhaja3",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":4,
			"cuisine_id":2,
			"type":"breakfast",
			"price":345,
			"name":"Dimsum",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":5,
			"cuisine_id":1,
			"type":"breakfast",
			"price":239,
			"name":"Burger(Veg/Nonveg)",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":6,
			"cuisine_id":3,
			"type":"breakfast",
			"price":239,
			"name":"Bacon and cheese",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":7,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"Kimchi",
			"pic":"/images/khabar.jpg",
			"desc":"Fermented vegetables",
			"likes":10,
			"comments":[
				{
					"cus_id":1,
					"text":"darun laglo, mon chhuye gelo"
				}
			],
			"share":10
		},
		{
			"id":8,
			"cuisine_id":4,
			"type":"breakfast",
			"price":123123,
			"name":"Puri Sabji",
			"pic":"/images/khabar.jpg",
			"desc":"Tender and fluffy puris served with a indian curry of choice",
		},
		{
			"id":9,
			"cuisine_id":2,
			"type":"Appetizer",
			"price":345,
			"name":"Crispy Chilli Baby Corn",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":10,
			"cuisine_id":2,
			"type":"Appetizer",
			"price":569,
			"name":"Chilli Fish",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":11,
			"cuisine_id":2,
			"type":"Appetizer",
			"price":319,
			"name":"Sweet and Sour Soup",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":12,
			"cuisine_id":2,
			"type":"Appetizer",
			"price":419,
			"name":"Crab Rangoons",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":13,
			"cuisine_id":2,
			"type":"Appetizer",
			"price":423,
			"name":"Wonton Soup",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":14,
			"cuisine_id":2,
			"type":"breakfast",
			"price":99,
			"name":"Spring Rolls",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":15,
			"cuisine_id":1,
			"type":"Appetizer",
			"price":299,
			"name":"Fish and Chips",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":16,
			"cuisine_id":1,
			"type":"Appetizer",
			"price":199,
			"name":"Prawn Chips and French Fries",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":17,
			"cuisine_id":3,
			"type":"Appetizer",
			"price":499,
			"name":"Hariyali Kebab",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":18,
			"cuisine_id":3,
			"type":"Appetizer",
			"price":249,
			"name":"Chicken Tandoori",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":19,
			"cuisine_id":1,
			"type":"Appetizer",
			"price":123123,
			"name":"alu bhaja5",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":20,
			"cuisine_id":1,
			"type":"Appetizer",
			"price":123123,
			"name":"alu bhaja6",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":21,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":22,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":23,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja1",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":24,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja3",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":25,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja4",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":26,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja5",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":27,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja6",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":28,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		},
		{
			"id":29,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":30,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":31,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":32,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":33,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":34,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":35,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}

		,
		{
			"id":36,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":37,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":38,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":39,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":40,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":41,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":42,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":43,
			"cuisine_id":1,
			"type":"breakfast",
			"price":123123,
			"name":"alu bhaja7",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":44,
			"cuisine_id":2,
			"type":"main course",
			"price":223,
			"name":"Shrimp Chomps with soup and rice",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":45,
			"cuisine_id":2,
			"type":"main course",
			"price":599,
			"name":"Shrimp/Beef Lo Mein",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":46,
			"cuisine_id":2,
			"type":"main course",
			"price":399,
			"name":"Chop Suey",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":47,
			"cuisine_id":2,
			"type":"main course",
			"price":199,
			"name":"Gravy Noodles(Veg/Nonveg)",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":48,
			"cuisine_id":2,
			"type":"main course",
			"price":399,
			"name":"Asian Rice Noodles(Veg/NonVeg)",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":49,
			"cuisine_id":2,
			"type":"main course",
			"price":299,
			"name":"Fried Rice(Veg/Egg/Mixed)",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
		,
		{
			"id":50,
			"cuisine_id":2,
			"type":"main course",
			"price":299,
			"name":"Hakka Noodles(Veg/Egg/Mixed)",
			"pic":"/images/khabar.jpg",
			"desc":"kjkjlfkjskdf",
		}
	],
	
	"orders":[
		{
			"id":1,
			"cart":[
				{
					"food_id":1,
					"quantity":2
				},
				{
					"food_id":2,
					"quantity":2
				},
				{
					"food_id":3,
					"quantity":1
				}
			],	
			"cus_id":1,
			"order_placed_date":"1/1/2001",
			"delivery_date":"date and time"
		}
	]
}

export default db;