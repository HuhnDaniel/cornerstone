'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Projects', [
            {
                name: 'Tampa Airport Main Terminal Curbside Expansion',
                location: 'Tampa, FL',
                client: 'Hillcrest County Aviation Authority',
                overview: 'This project is a compilation of several smaller projects, to be implemented over a multi-year timeframe. The centerpiece of the airport enhancements is the addition of 2 new curbside vertical circulation buildings (VCB’s) allowing more drop-off/pick-up lanes to reduce traffic congestion. Supporting these improvements are projects that also include: a new Central Utility Plan (CUP) and Electrical Services Building (ESB); a relocated Loading Dock; relocated Police and Maintenance offices; and a new shuttle train station that will serve a future new international arrivals terminal.',
                timeframe: 'CUP – June 2021; Blue VCB – Dec. 2021; Dock/Police & Maint. – TBD 2022; Red VCB - TBD 2023.',
                company: 'HNTB',
                // role: 'Design-Build Prime - Hensel Phelps',
                image: 'tampa-airport',
                PartnerId: 1,
                SubDisciplineId: 1
            },
            {
                name: 'Francis Allen Gymnastics Training Facility',
                location: 'Lincoln, NE',
                client: 'University of Nebraska',
                overview: 'The new Nebraska Gymnastics training facility is a 46,000 SF addition to the Devaney Sports Complex, and will house new spaces for both men’s and women’s gymnastics. Project components include a new public lobby connecting to the Devaney Center, as well as new coaches’ offices on an upper level. The main feature of the facility is new state-of-the-art training gyms for both men and women, as well as new locker and lounge spaces for each team. Design role through Design Development with CD reviews.',
                timeframe: 'March 2020.',
                company: 'HNTB',
                // role: 'Prime Arch. – The Clark Enersen Partners',
                image: 'nebraska-gym',
                PartnerId: 1,
                SubDisciplineId: 2
            },
            {
                name: 'Kinnick Stadium North Endzone',
                location: 'Iowa City, IA',
                client: 'University of Iowa',
                overview: 'The project includes a complete re-build of the north endzone stadium seating and the addition of premium Club spaces at an upper level. The project includes 2 concourse levels to accommodate approximately 10,000 patrons. Worked with local architect Nuemann Monson, accomplishing the design and documentation of the lower bowl, Club level, and upper outdoor seating bowls, along with the 2 public concourses.',
                timeframe: 'Phase 1 seating bowl completed in August 2018; Phase 2 Club space and Concourses completed in August 2019',
                company: 'HNTB',
                // role: 'Prime Arch. – Neumann Monson Architects',
                image: 'iowa-kinnick',
                PartnerId: 1,
                SubDisciplineId: 2
            },
            {
                name: 'Schembechler Hall Football Performance Center',
                location: 'Ann Arbor, MI',
                client: 'University of Michigan',
                overview: 'Worked with KPF as a sports consultant over two phases of renovations to the existing Schembechler Hall. Accomplished interior design and documentation of sports performance center renovations. Improvements include a new 30,000 SF weight room constructed inside the existing Oosterbaan field house. New and renovated spaces within existing Schembechler Hall include new hydrotherapy and cryotherapy pools, upgraded sports medicine space, and an expansion of the equipment storage areas. Also included are relocated coaches and staff lockers.',
                timeframe: 'Phase 1 weight room renovation completed in 2018; Phase 2 sports medicine and training renovations completed in 2019.',
                company: 'HNTB',
                // role: 'Prime Arch. – Kohn Pedersen Fox Associates',
                image: 'michigan-schembechler',
                PartnerId: 1,
                SubDisciplineId: 2
            },
            {
                name: 'VSU Multipurpose Center',
                location: 'Petersburg, VA',
                client: 'Virginia State University',
                overview: 'New multi-use event center, seating 5,100 for basketball and 6,500 for convocation. The facility includes the main arena, 2 practice courts, and locker/support areas. Seating includes suites, club seats, and bleacher seats. The facility also includes academic spaces.',
                timeframe: 'January 2016',
                company: 'AECOM',
                // role: 'Prime Arch. - Clark Nexsen',
                image: 'vsu',
                PartnerId: 1,
                SubDisciplineId: 2
            },
            {
                name: 'Centennial Stadium Expansion, Johnny Allison Pressbox Tower',
                location: 'Jonesboro, AR',
                client: 'Arkansas State University',
                overview: 'Expansion of Centennial Stadium facilities including new 38,000 SF press box tower and Concourse improvements. Press tower components included 20 suites, 300 indoor and outdoor club seats, 40 loge boxes, club lounge spaces, new press and broadcast facilities, coaches booths, and support spaces. Concourse improvements included 4,000 SF commissary/kitchen, ticketing, team store, new toilets, TV truck paddock, and new concourse entry experience.',
                timeframe: 'September 2015. Worked closely with the Construction Manager to complete construction in less than 11 months.',
                company: 'AECOM',
                // role: 'Associate Arch',
                image: 'centennial-aState',
                PartnerId: 1,
                SubDisciplineId: 2
            },
            {
                name: 'Hae Song Plaza Mixed-Use Development',
                location: 'Inch\'on, ROK',
                client: 'Hae Song Development',
                overview: 'Hae Song Plaza (Golden Harbor Plaza) is a planned 2.85 million SF mixed use complex located in a prominent site next to Inch’on Harbor and the new Inch’on International Airport. The complex includes a 40-story office building, a five-star 550-room hotel, a shopping center with a major department store anchor, and underground parking. Topping the office tower is a magnificent restaurant and lounge commanding breathtaking views to the city and harbor.',
                timeframe: 'Unbuilt. Design Development completed August 1997.',
                company: 'Ellerbe Becket',
                image: 'hae-song',
                PartnerId: 1,
                SubDisciplineId: 3
            },
            {
                name: 'Roanoke Downtown North Redevelopment Plan',
                location: 'Roanoke, VA',
                client: 'City of Roanoke',
                overview: 'This urban redevelopment plan focused on revitalization of the northeast sector of downtown Roanoke, VA. Primary elements of the plan were to connect the Market Center district to the historic Hotel Roanoke in a pedestrian-friendly manner across the Norfolk Southern rail lines, and to make way for new office and urban open space development by removal of an underused viaduct roadway.',
                timeframe: 'Urban design study 1988. Subsequent buildings by others.',
                company: 'RTKL Associates',
                image: 'roanoke',
                PartnerId: 1,
                SubDisciplineId: 3
            },
            {
                name: 'Federal Reserve Bank of Kansas City Office and Operations Center',
                location: 'Kansas City, MO',
                client: 'Federal Reserve Bank of Kansas City',
                overview: 'Worked with FRB starting with programming of the 620,000 SF facility, design team co-ordination, contract documents for all non-public spaces in the building, space planning and FF&E for all office floors. The project includes a 2-story operations base, a 14-story office tower, a 900-space parking garage, and a highly secure cash processing area. Site security is carefully integrated into the landscape architecture, and the building exterior is clad in native Kansas limestone.',
                timeframe: 'Spring 2008.',
                awards: 'Capstone Award, Kansas City Business Journal, 2009',
                company: 'Ellerbe Becket',
                // role: 'Associate Arch. - Pei Cobb Freed and Partners',
                image: 'frb',
                PartnerId: 1,
                SubDisciplineId: 4
            },
            {
                name: 'FBI Tucson Resident Office',
                location: 'Tucson, AZ',
                client: 'Quality Investment Properties',
                overview: 'New 96,000 SF FBI Resident Agency office building. The complex included office spaces, secure technology areas, automotive maintenance shops, and a 150-space parking structure. The site was designed with a secure perimeter, and the building structure was designed for blast and progressive collapse protection.',
                timeframe: 'March 2012.',
                awards: 'LEED Platinum certification',
                company: 'Ellerbe Becket',
                image: 'fbi-tuscon',
                PartnerId: 1,
                SubDisciplineId: 4
            },
            {
                name: 'Discovery Court, National Museum of Natural History',
                location: 'Washington, DC',
                client: 'Smithsonian Institution',
                overview: 'The design concept was to infill one of the two original open-air courtyards of the Smithsonian National Museum of Natural History with new visitor amenities. The project included basement storage space, a new food-court dining facility at the ground level, a hands-on children’s learning center, and a 450-seat IMAX theater at the top level. Attention had to be paid to use of materials and integration with the historic museum structure.',
                timeframe: 'Spring 1997.',
                company: 'Keys Condon Florance Architects',
                // role: 'Prime Arch. – Hammel Green and Abrahamson',
                image: 'discovery-court',
                PartnerId: 1,
                SubDisciplineId: 4
            },
            {
                name: 'Guangdong Olympic Stadium',
                location: 'Guangzhou, PRC',
                client: '2001 National Games Organizing Committee',
                overview: 'This new 80,000 seat stadium was designed to Olympic standards, and was host to the 2001 Chinese National Games. The project was a joint-venture between Ellerbe Becket as design architect, Nixon & Nixon as executive architect, and the South China Institute of Technology as Architect of Record. The complex includes facilities for soccer, international track and field, a 200-room hotel, retail and exhibition space, an athletic club, and VIP facilities. The design concept embodies a ribbon of metal as the roof structure, waving above a seating bowl that opens like the petals of a flower (Guangzhou means “southern flower”).',
                timeframe: 'November 2001. Design through construction completed in 32 months. Awards: People’s Republic of China, Excellent Design Award, 2001',
                company: 'Ellerbe Becket',
                // role: 'Prime Arch. – Nixon & Nixon',
                image: 'guangdong-stadium',
                PartnerId: 1,
                SubDisciplineId: 5
            },
            {
                name: 'Perth Convention + Exhibition Center Competition',
                location: 'Perth, AUS',
                client: 'Bovis LendLease',
                overview: 'BOOT proposal for Bovis Lend Lease/John Holland/Channel 7’s new Perth Convention and Exhibition Center in Australia. The project represents a major urban renewal master plan and is located on a 7-block area in downtown Perth. The project includes a 30,000-seat stadium, 400-room hotel, Studio City for the Channel 7 network, 25,000 square meters of convention and exhibition space, as well as banquet and associated conference facilities, a theater, retail and housing. In addition, the project will include a major urban plaza with ample public performance space and other mixed- use, urban entertainment and retail facilities.',
                timeframe: 'Unbuilt. Design complete 2000.',
                awards: 'KC AIA Special Commendation in Urban Design, 2001',
                company: 'Ellerbe Becket',
                // role: 'Associate Arch. – Crawford Architects',
                image: 'perth-convention',
                PartnerId: 1,
                SubDisciplineId: 5
            },
            {
                name: 'Camden Yards Sports Complex Urban Design and Master Plan',
                location: 'Baltimore, MD',
                client: 'Maryland Stadium Authority',
                overview: 'Working as part of the HOK Sport team, worked on urban design studies and the overall sports complex master plan, including future football stadium, parking, light rail, and other components. Responsible for helping integrate the new Orioles baseball stadium into the Baltimore urban fabric. Major contributions included the recommendations for the angular forms of the exterior of the stadium façade, retention of the entire warehouse building, retention of Eutaw Street as a pedestrian spine through the stadium, and maintenance of contextual “street edges” around the historic Camden Station building.',
                timeframe: 'Urban Design study – Draft Master Plan November 1989.',
                awards: 'National AIA Urban Design Honor Award; Baltimore AIA – Grand Design Award (for Urban Design Study); ASLA Urban Design Citation; ULI Public Award',
                company: 'RTKL Associates',
                // role: 'Prime Arch. – HOK Sport',
                image: 'camden-yards',
                PartnerId: 1,
                SubDisciplineId: 6
            },
            {
                name: 'Parkville Campus Master Plan Update 2013, Park University',
                location: 'Parkville, MO',
                client: 'Park University',
                overview: 'Led the process for an update to the previous 2006 Parkville Campus Master Plan. The process included re-evaluating or confirming previous master plan principles and strategies, and making strategic updates based on new administration priorities. After the completion of the Master Plan update, completed a building evaluation for upgrades to the Alumni Hall theater.',
                timeframe: 'Master Plan - October 2013. Alumni Hall Programming Assessment – Spring 2014.',
                company: 'AECOM',
                image: 'parkU-masterPlan',
                PartnerId: 1,
                SubDisciplineId: 6
            },
            {
                name: 'National Institutes of Health Master Plan',
                location: 'Bethesda, MD and Poolesville, MD',
                client: 'National Institutes of Health',
                overview: 'Developed a comprehensive master plan for the 320-acre NIH main campus in Bethesda. MD, as well as the smaller 95-acre research campus in nearby Poolesville, MD. The master plan included analysis of all existing NIH buildings and features, development of future growth programming scenarios, and proposed long-term development strategies. The master plan also included development guidelines such as building height restrictions, architectural materials, and landscape buffers.',
                timeframe: 'December 1995.',
                awards: 'APA – NCPC Chapter Outstanding Merit Award, 1996',
                company: 'Keys Condon Florance Architects',
                // role: 'Associate Cons. – Oudens + Knoop Architects.',
                image: 'nih',
                PartnerId: 1,
                SubDisciplineId: 6
            },
            {
                name: 'Lambeau Field Redevelopment (2003)',
                location: 'Green Bay, WI',
                client: 'Green Bay Packers',
                overview: '1.0 million SF renovation and addition to historic Lambeau Field. The historic field and lower stadium bowl were retained and kept operational through 2 seasons of construction, while the surrounding ring of existing suites were replaced and enlarged. Project components included 174 new/replacement suites, 3,000 new indoor club seats, 3,200 new outdoor club seats, resulting in an overall stadium seating increase of 11,000 seats to 71,500 seats. Architecturally, the project preserves the historic character of Lambeau Field, using brick and steel components to express the solid work ethic of Green Bay. The 5-level indoor Titletown atrium is accessible to all fans during games, and is the focus of a 360- day/year tourist attraction. The project also provided 200,000 SF of new team office spaces and new team facilities. Concourse spaces and concession/toilet facilities were also significantly upgraded as part of the renovation.',
                timeframe: 'Phase 1 – September 2002. Phase II – September 2003. Worked closely with Turner Construction to achieve project completion is 2 off-seasons.',
                awards: '2003 Project Leadership Award, Construction Owners Association of America',
                company: 'Ellerbe Becket',
                image: 'lambeau-field',
                PartnerId: 1,
                SubDisciplineId: 7
            },
            {
                name: 'The Alerus Center',
                location: 'Grand Forks, ND',
                client: 'City of Grand Forks and University of North Dakota',
                overview: 'The Alerus Center is a 447,000 SF multipurpose civic center for the city of Grand Forks, ND, and home of the University of North Dakota football team. The facility can be arranged to seat between 9,500 for basketball, 13,500 for football and 21,300 for an end stage concert configuration. The facility also contains a 25,000 SF ballroom and 12 breakout meeting rooms. The flat-floor area can also be configured to approximately 425 booths in a trade show set-up.',
                timeframe: 'February 2001.',
                company: 'Ellerbe Becket',
                // role: 'Prime Arch. – Schoen Associates, Johnson Laffen Architects',
                image: 'alerus-center',
                PartnerId: 1,
                SubDisciplineId: 7
            },
            {
                name: 'Providence Park (JELD-WEN Field), Portland Trailblazers MLS',
                location: 'Portland, OR',
                client: 'Peregrine Sports LLC',
                overview: 'This project involved a re-purposing of the minor-league PG&E Park to be the new home of the MLS Portland Timbers. The project was designed to integrate into the existing urban context of the Goose Hollow neighborhood. Along the east sideline is an addition of 3,600 seats to increase total seating to 20,000, including 1,400 club seats. Other new facilities include a team store, new club spaces, new concessions/toilets, and renovation of team locker areas.',
                timeframe: 'April 2011.',
                awards: 'AIA San Francisco Merit Award for Excellence in Architecture, 2012',
                company: 'AECOM',
                image: 'providence-park',
                PartnerId: 1,
                SubDisciplineId: 7
            },
            {
                name: 'Copley Quad Student Housing',
                location: 'Parkville, MO',
                client: 'Park University',
                overview: 'As the first project to be built from the 2006 campus master plan, the Copley Quad Student Housing project was a 250-bed new student residence, including lounge, laundry, and administrative office facilities. The design vocabulary relates to the adjacent original Copley Hall building.',
                timeframe: 'August 2008. Ellerbe Becket was the Design-Builder and completed design and construction in 16 months.',
                company: 'Ellerbe Becket',
                // role: 'Associate Arch. – Sinclair Hille Architects.',
                image: 'copley-quad',
                PartnerId: 1,
                SubDisciplineId: 8
            },
            {
                name: 'Cornerstone Art & Craft Collaborative',
                client: 'Cornerstone ACC LLC',
                overview: 'Cornerstone Art and Craft LLC is a company that strives to connect people who create with those who need things created.  Partners of the company have personal profiles to which their projects and disciplines can be added, and potential employers can search to find the perfect candidate for the project they need completed. ',
                timeframe: 'Start: November 2020. Launch: February 2021.',
                role: 'Full Stack Website Developer',
                image: 'cornerstone',
                PartnerId: 2,
                SubDisciplineId: 9
            },
            {
                name: 'InQuery',
                overview: 'This is an app built with React that allows users to create and share surveys. The survey results are displayed in charts for the user.',
                timeframe: 'Two week speed build, August 2020.',
                link: 'https://inquiresurveys.herokuapp.com/',
                role: 'Front end development, website design',
                image: 'inquery',
                PartnerId: 2,
                SubDisciplineId: 10
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Project', null, {});
    }
};