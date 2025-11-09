// Comprehensive list of Calgary communities for SEO optimization
// Organized by quadrant and major areas

export const calgaryCommunities = {
  northeast: [
    'Marlborough', 'Marlborough Park', 'Marlborough Village', 'Rundle', 'Rundle Heights',
    'Temple', 'Whitehorn', 'Falconridge', 'Castleridge', 'Coral Springs', 'Taradale',
    'Saddle Ridge', 'Martindale', 'Saddle Ridge', 'Coventry Hills', 'Huntington Hills',
    'Thorncliffe', 'Greenview', 'Beddington Heights', 'Sandstone', 'Country Hills',
    'Country Hills Village', 'Harvest Hills', 'Panorama Hills', 'Skyview Ranch',
    'Redstone', 'Cityscape', 'Saddle Ridge', 'Coventry Hills', 'Northeast Calgary'
  ],
  northwest: [
    'Bowness', 'Montgomery', 'Parkdale', 'Hillhurst', 'Sunnyside', 'Kensington',
    'West Hillhurst', 'Hounsfield Heights', 'Briar Hill', 'Capitol Hill', 'Mount Pleasant',
    'Rosedale', 'Tuxedo Park', 'Highland Park', 'Greenview', 'Bridgeland', 'Riverside',
    'Renfrew', 'Highwood', 'Roxboro', 'Elbow Park', 'Elboya', 'Rideau Park',
    'Britannia', 'Altadore', 'Marda Loop', 'South Calgary', 'Bankview', 'Sunalta',
    'Scarboro', 'Sunalta', 'Shaganappi', 'Westgate', 'Glendale', 'Glendale Meadows',
    'Signal Hill', 'Aspen Woods', 'Springbank Hill', 'Wentworth', 'Strathcona Park',
    'Christie Park', 'Coach Hill', 'Discovery Ridge', 'Cougar Ridge', 'Aspen Woods',
    'West Springs', 'Springbank Hill', 'Rocky Ridge', 'Royal Oak', 'Tuscany',
    'Scenic Acres', 'Arbour Lake', 'Citadel', 'Hawkwood', 'Sherwood', 'Kincora',
    'Sage Hill', 'Evanston', 'Sage Hill', 'Nolan Hill', 'Livingston', 'Carrington',
    'Sage Meadows', 'Kincora', 'Sherwood', 'Hamptons', 'Hamptons Village', 'Hidden Valley',
    'Country Hills', 'Panorama Hills', 'Evanston', 'Sage Hill', 'Nolan Hill'
  ],
  southeast: [
    'Inglewood', 'Ramsay', 'Beltline', 'Connaught', 'Victoria Park', 'East Village',
    'Chinatown', 'Eau Claire', 'Downtown', 'Downtown Commercial Core', 'Downtown East Village',
    'Downtown West End', 'Bridgeland', 'Riverside', 'Renfrew', 'Highland Park',
    'Roxboro', 'Elbow Park', 'Elboya', 'Rideau Park', 'Britannia', 'Altadore',
    'Marda Loop', 'South Calgary', 'Bankview', 'Sunalta', 'Scarboro', 'Sunalta',
    'Shaganappi', 'Westgate', 'Glendale', 'Glendale Meadows', 'Signal Hill',
    'Auburn Bay', 'Copperfield', 'New Brighton', 'Mahogany', 'McKenzie Towne',
    'McKenzie Lake', 'Douglasdale', 'Douglas Glen', 'Quarry Park', 'Seton',
    'Cranston', 'Riverbend', 'Ogden', 'Riverside', 'Forest Lawn', 'Forest Heights',
    'Erlton', 'Roxboro', 'Elbow Park', 'Elboya', 'Rideau Park', 'Britannia',
    'Altadore', 'Marda Loop', 'South Calgary', 'Bankview', 'Sunalta', 'Scarboro'
  ],
  southwest: [
    'Beltline', 'Connaught', 'Victoria Park', 'East Village', 'Chinatown', 'Eau Claire',
    'Downtown', 'Downtown Commercial Core', 'Downtown East Village', 'Downtown West End',
    'Bridgeland', 'Riverside', 'Renfrew', 'Highland Park', 'Roxboro', 'Elbow Park',
    'Elboya', 'Rideau Park', 'Britannia', 'Altadore', 'Marda Loop', 'South Calgary',
    'Bankview', 'Sunalta', 'Scarboro', 'Sunalta', 'Shaganappi', 'Westgate',
    'Glendale', 'Glendale Meadows', 'Signal Hill', 'Aspen Woods', 'Springbank Hill',
    'Wentworth', 'Strathcona Park', 'Christie Park', 'Coach Hill', 'Discovery Ridge',
    'Cougar Ridge', 'Aspen Woods', 'West Springs', 'Springbank Hill', 'Rocky Ridge',
    'Royal Oak', 'Tuscany', 'Scenic Acres', 'Arbour Lake', 'Citadel', 'Hawkwood',
    'Sherwood', 'Kincora', 'Sage Hill', 'Evanston', 'Sage Hill', 'Nolan Hill',
    'Livingston', 'Carrington', 'Sage Meadows', 'Kincora', 'Sherwood', 'Hamptons',
    'Hamptons Village', 'Hidden Valley', 'Country Hills', 'Panorama Hills'
  ],
  central: [
    'Beltline', 'Connaught', 'Victoria Park', 'East Village', 'Chinatown', 'Eau Claire',
    'Downtown', 'Downtown Commercial Core', 'Downtown East Village', 'Downtown West End',
    'Bridgeland', 'Riverside', 'Renfrew', 'Highland Park', 'Roxboro', 'Elbow Park',
    'Elboya', 'Rideau Park', 'Britannia', 'Altadore', 'Marda Loop', 'South Calgary',
    'Bankview', 'Sunalta', 'Scarboro', 'Sunalta', 'Shaganappi', 'Westgate',
    'Kensington', 'Sunnyside', 'Hillhurst', 'West Hillhurst', 'Hounsfield Heights',
    'Briar Hill', 'Capitol Hill', 'Mount Pleasant', 'Rosedale', 'Tuxedo Park'
  ]
}

// Flattened list of all communities for easy access
export const allCalgaryCommunities = [
  ...calgaryCommunities.northeast,
  ...calgaryCommunities.northwest,
  ...calgaryCommunities.southeast,
  ...calgaryCommunities.southwest,
  ...calgaryCommunities.central
].filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates

// Key communities near the church location (Northeast Calgary)
export const nearbyCommunities = [
  'Marlborough', 'Marlborough Park', 'Rundle', 'Temple', 'Whitehorn',
  'Falconridge', 'Castleridge', 'Coral Springs', 'Taradale', 'Saddle Ridge',
  'Martindale', 'Coventry Hills', 'Huntington Hills', 'Thorncliffe', 'Greenview',
  'Beddington Heights', 'Sandstone', 'Country Hills', 'Harvest Hills',
  'Panorama Hills', 'Skyview Ranch', 'Redstone', 'Cityscape', 'Northeast Calgary'
]

// SEO-optimized community keywords
export const communityKeywords = allCalgaryCommunities.flatMap(community => [
  `church in ${community}`,
  `Calgary ${community} church`,
  `${community} Calgary church`
]).concat(
  nearbyCommunities.flatMap(community => [
    `${community} church`,
    `${community} Pentecostal church`,
    `church near ${community}`
  ])
)

