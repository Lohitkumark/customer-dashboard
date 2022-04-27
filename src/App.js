import React,{useState} from "react";
import StatsContainer from "./statsContainer";
import CustomersContainer from "./customerContainer";
import OrderContainer from "./orderContainer";
import 'bootstrap/dist/css/bootstrap.min.css';



  const customerData = [
    {
        "Date": "2020-04-29",
        "Phone": 9455622241,
        "Name": "Shankara Narasimhan",
                    "Amount": 260
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9597628723,
                    "Name": "Sulya Gupta",
                    "Amount": 90
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9640338121,
                    "Name": "Brahma Swamy",
                    "Amount": 80
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9383568793,
                    "Name": "Vaibhav Mulye",
                    "Amount": 240
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9455622241,
                    "Name": "Shankara Narasimhan",
                    "Amount": 230
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9521737322,
                    "Name": "Riddhi Nair",
                    "Amount": 70
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 80
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9603660688,
                    "Name": "Dhenuka Dhawan",
                    "Amount": 250
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9451926724,
                    "Name": "Sahan Sibal",
                    "Amount": 260
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9699939066,
                    "Name": "Haripriya Nayak",
                    "Amount": 270
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9590146908,
                    "Name": "Sachi Loliyekar",
                    "Amount": 110
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 100
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9640338121,
                    "Name": "Brahma Swamy",
                    "Amount": 240
                },
                {
                    "Date": "2020-04-29",
                    "Phone": 9236367267,
                    "Name": "Takshaka Sandal",
                    "Amount": 70
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9969345730,
                    "Name": "Kavi Edwin",
                    "Amount": 210
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 280
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9971276037,
                    "Name": "Pramlocha Comar",
                    "Amount": 210
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9241664018,
                    "Name": "Utathya Ghate",
                    "Amount": 260
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9248936762,
                    "Name": "Arpana Raja",
                    "Amount": 260
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9640338121,
                    "Name": "Brahma Swamy",
                    "Amount": 200
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9895408016,
                    "Name": "Mukul Krishna",
                    "Amount": 180
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9241664018,
                    "Name": "Utathya Ghate",
                    "Amount": 260
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9920950009,
                    "Name": "Rohan Sarma",
                    "Amount": 110
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9820224845,
                    "Name": "Tanika Philip",
                    "Amount": 90
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9383568793,
                    "Name": "Vaibhav Mulye",
                    "Amount": 200
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9732082404,
                    "Name": "Kali Chaudry",
                    "Amount": 290
                },
                {
                    "Date": "2020-04-30",
                    "Phone": 9534474777,
                    "Name": "Daeva Tata",
                    "Amount": 70
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 160
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9572464275,
                    "Name": "Salmalin Mehta",
                    "Amount": 100
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9688156631,
                    "Name": "Sahan Oak",
                    "Amount": 200
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9236367267,
                    "Name": "Takshaka Sandal",
                    "Amount": 250
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9979209995,
                    "Name": "Atman Mathur",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9521737322,
                    "Name": "Riddhi Nair",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9265205814,
                    "Name": "Daeva Peri",
                    "Amount": 180
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9267357082,
                    "Name": "Muni Wasgare",
                    "Amount": 210
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9267357082,
                    "Name": "Muni Wasgare",
                    "Amount": 290
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9590146908,
                    "Name": "Sachi Loliyekar",
                    "Amount": 190
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 290
                },
                {
                    "Date": "2020-05-01",
                    "Phone": 9241664018,
                    "Name": "Utathya Ghate",
                    "Amount": 180
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9971276037,
                    "Name": "Pramlocha Comar",
                    "Amount": 80
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9920950009,
                    "Name": "Rohan Sarma",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9705384480,
                    "Name": "Latif Chia",
                    "Amount": 70
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9252350612,
                    "Name": "Anushka Mody",
                    "Amount": 150
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9688156631,
                    "Name": "Sahan Oak",
                    "Amount": 290
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9359394987,
                    "Name": "Tarun Mapkar",
                    "Amount": 260
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9747425720,
                    "Name": "Markandeya Barad",
                    "Amount": 100
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 180
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9699939066,
                    "Name": "Haripriya Nayak",
                    "Amount": 110
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9590146908,
                    "Name": "Sachi Loliyekar",
                    "Amount": 220
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9820224845,
                    "Name": "Tanika Philip",
                    "Amount": 220
                },
                {
                    "Date": "2020-05-02",
                    "Phone": 9747425720,
                    "Name": "Markandeya Barad",
                    "Amount": 90
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9910042819,
                    "Name": "Shanti Bajwa",
                    "Amount": 100
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9518195948,
                    "Name": "Indra Chaudry",
                    "Amount": 110
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 80
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9236367267,
                    "Name": "Takshaka Sandal",
                    "Amount": 100
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9640338121,
                    "Name": "Brahma Swamy",
                    "Amount": 100
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 120
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9453085874,
                    "Name": "Manu Oza",
                    "Amount": 120
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9976945538,
                    "Name": "Amitabha Kothari",
                    "Amount": 270
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9910042819,
                    "Name": "Shanti Bajwa",
                    "Amount": 280
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 200
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9405883814,
                    "Name": "Gauri Som",
                    "Amount": 220
                },
                {
                    "Date": "2020-05-03",
                    "Phone": 9252350612,
                    "Name": "Anushka Mody",
                    "Amount": 170
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9453085874,
                    "Name": "Manu Oza",
                    "Amount": 120
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9640338121,
                    "Name": "Brahma Swamy",
                    "Amount": 150
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9927277067,
                    "Name": "Ranjan Khare",
                    "Amount": 80
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9910042819,
                    "Name": "Shanti Bajwa",
                    "Amount": 250
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 200
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9293117791,
                    "Name": "Kumara Nayak",
                    "Amount": 250
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9976945538,
                    "Name": "Amitabha Kothari",
                    "Amount": 110
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9518195948,
                    "Name": "Indra Chaudry",
                    "Amount": 200
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9518195948,
                    "Name": "Indra Chaudry",
                    "Amount": 130
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9521737322,
                    "Name": "Riddhi Nair",
                    "Amount": 120
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9920950009,
                    "Name": "Rohan Sarma",
                    "Amount": 120
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9597628723,
                    "Name": "Sulya Gupta",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9534474777,
                    "Name": "Daeva Tata",
                    "Amount": 70
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9009381182,
                    "Name": "Mira Reddy",
                    "Amount": 240
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9009381182,
                    "Name": "Mira Reddy",
                    "Amount": 160
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9236367267,
                    "Name": "Takshaka Sandal",
                    "Amount": 150
                },
                {
                    "Date": "2020-05-04",
                    "Phone": 9265205814,
                    "Name": "Daeva Peri",
                    "Amount": 180
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9451926724,
                    "Name": "Sahan Sibal",
                    "Amount": 170
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9504662177,
                    "Name": "Tara Menon",
                    "Amount": 230
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9455622241,
                    "Name": "Shankara Narasimhan",
                    "Amount": 200
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9927277067,
                    "Name": "Ranjan Khare",
                    "Amount": 110
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9521737322,
                    "Name": "Riddhi Nair",
                    "Amount": 90
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9252350612,
                    "Name": "Anushka Mody",
                    "Amount": 120
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9699939066,
                    "Name": "Haripriya Nayak",
                    "Amount": 70
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9150159527,
                    "Name": "Leya Sankaran",
                    "Amount": 270
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 240
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9733555024,
                    "Name": "Nirav Khalsa",
                    "Amount": 110
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9236367267,
                    "Name": "Takshaka Sandal",
                    "Amount": 200
                },
                {
                    "Date": "2020-05-05",
                    "Phone": 9241664018,
                    "Name": "Utathya Ghate",
                    "Amount": 260
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9455622241,
                    "Name": "Shankara Narasimhan",
                    "Amount": 210
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 250
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9705384480,
                    "Name": "Latif Chia",
                    "Amount": 160
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9359394987,
                    "Name": "Tarun Mapkar",
                    "Amount": 100
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9688156631,
                    "Name": "Sahan Oak",
                    "Amount": 210
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9688156631,
                    "Name": "Sahan Oak",
                    "Amount": 280
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 110
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9699939066,
                    "Name": "Haripriya Nayak",
                    "Amount": 130
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 110
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 90
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9597628723,
                    "Name": "Sulya Gupta",
                    "Amount": 190
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9521737322,
                    "Name": "Riddhi Nair",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9451926724,
                    "Name": "Sahan Sibal",
                    "Amount": 230
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9403313898,
                    "Name": "Adri Dave",
                    "Amount": 210
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9895408016,
                    "Name": "Mukul Krishna",
                    "Amount": 240
                },
                {
                    "Date": "2020-05-06",
                    "Phone": 9504662177,
                    "Name": "Tara Menon",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9699939066,
                    "Name": "Haripriya Nayak",
                    "Amount": 280
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9732082404,
                    "Name": "Kali Chaudry",
                    "Amount": 130
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9150159527,
                    "Name": "Leya Sankaran",
                    "Amount": 250
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9820224845,
                    "Name": "Tanika Philip",
                    "Amount": 290
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9248936762,
                    "Name": "Arpana Raja",
                    "Amount": 260
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9293117791,
                    "Name": "Kumara Nayak",
                    "Amount": 200
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9640338121,
                    "Name": "Brahma Swamy",
                    "Amount": 200
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9732082404,
                    "Name": "Kali Chaudry",
                    "Amount": 280
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9265205814,
                    "Name": "Daeva Peri",
                    "Amount": 70
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9534474777,
                    "Name": "Daeva Tata",
                    "Amount": 160
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9252350612,
                    "Name": "Anushka Mody",
                    "Amount": 80
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 220
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9153022424,
                    "Name": "Hastin Mangal",
                    "Amount": 180
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9920950009,
                    "Name": "Rohan Sarma",
                    "Amount": 160
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9534474777,
                    "Name": "Daeva Tata",
                    "Amount": 230
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9359394987,
                    "Name": "Tarun Mapkar",
                    "Amount": 260
                },
                {
                    "Date": "2020-05-07",
                    "Phone": 9969345730,
                    "Name": "Kavi Edwin",
                    "Amount": 100
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 130
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 120
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9504662177,
                    "Name": "Tara Menon",
                    "Amount": 220
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9455622241,
                    "Name": "Shankara Narasimhan",
                    "Amount": 150
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 90
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9236367267,
                    "Name": "Takshaka Sandal",
                    "Amount": 110
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9330107696,
                    "Name": "Nipa Naidu",
                    "Amount": 70
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9927277067,
                    "Name": "Ranjan Khare",
                    "Amount": 180
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9140356318,
                    "Name": "Ballari Upadhyay",
                    "Amount": 270
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 70
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9518195948,
                    "Name": "Indra Chaudry",
                    "Amount": 180
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9976945538,
                    "Name": "Amitabha Kothari",
                    "Amount": 270
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9534474777,
                    "Name": "Daeva Tata",
                    "Amount": 210
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9504662177,
                    "Name": "Tara Menon",
                    "Amount": 210
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9293117791,
                    "Name": "Kumara Nayak",
                    "Amount": 200
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9293117791,
                    "Name": "Kumara Nayak",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9248936762,
                    "Name": "Arpana Raja",
                    "Amount": 110
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9960294002,
                    "Name": "Mitra Gounder",
                    "Amount": 240
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9150159527,
                    "Name": "Leya Sankaran",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-08",
                    "Phone": 9236367267,
                    "Name": "Takshaka Sandal",
                    "Amount": 250
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9732082404,
                    "Name": "Kali Chaudry",
                    "Amount": 100
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9521737322,
                    "Name": "Riddhi Nair",
                    "Amount": 140
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9293117791,
                    "Name": "Kumara Nayak",
                    "Amount": 190
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9590146908,
                    "Name": "Sachi Loliyekar",
                    "Amount": 150
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9688156631,
                    "Name": "Sahan Oak",
                    "Amount": 220
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9895408016,
                    "Name": "Mukul Krishna",
                    "Amount": 230
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9261697610,
                    "Name": "Niloufer Handa",
                    "Amount": 130
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9927277067,
                    "Name": "Ranjan Khare",
                    "Amount": 170
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9640338121,
                    "Name": "Brahma Swamy",
                    "Amount": 230
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9485132704,
                    "Name": "Sohalia Das",
                    "Amount": 250
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9330107696,
                    "Name": "Nipa Naidu",
                    "Amount": 240
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 180
                },
                {
                    "Date": "2020-05-09",
                    "Phone": 9389644210,
                    "Name": "Brahma Swamy",
                    "Amount": 210
                }
    ]

  function App() {
    const [customers, setCustomers] = useState(customerData)
    

    // console.log(customers);
      return (
        <div className="container mb-4">
          <h1 className="display-3"> Customers Dashboard </h1>
          <StatsContainer customers = {customers}/>
          <CustomersContainer customers = {customers}/>
          <OrderContainer customers = {customers}/>
        </div>
      )
}

export default App;
