'use client'

import { nearbyCommunities, allCalgaryCommunities } from '@/lib/calgary-communities'

// Component to display communities served (hidden visually but present for SEO)
export default function CalgaryCommunities() {
  // Get unique communities
  const uniqueCommunities = Array.from(new Set(allCalgaryCommunities)).slice(0, 100)
  
  return (
    <div className="sr-only" aria-hidden="true">
      <h2>Serving Calgary Communities</h2>
      <p>
        Worldwide Acceptance Ministries serves the following Calgary communities and neighborhoods:
        {uniqueCommunities.join(', ')}.
        We welcome members from all areas of Calgary including Northeast Calgary, Northwest Calgary, 
        Southeast Calgary, Southwest Calgary, and Central Calgary.
      </p>
      <p>
        Nearby communities include: {nearbyCommunities.join(', ')}.
        Whether you're looking for a church in Marlborough, Rundle, Temple, Whitehorn, Falconridge, 
        Castleridge, Saddle Ridge, Martindale, Coventry Hills, Harvest Hills, Panorama Hills, 
        Skyview Ranch, Country Hills, Beddington Heights, Sandstone, Thorncliffe, Greenview, 
        Huntington Hills, Taradale, Coral Springs, Redstone, or Cityscape, we welcome you to 
        join us for worship in Northeast Calgary.
      </p>
      <p>
        We also serve Calgary communities including Beltline, Downtown, Kensington, Sunnyside, 
        Hillhurst, Bridgeland, Inglewood, Mission, Marda Loop, Altadore, Elbow Park, Britannia, 
        Mount Pleasant, Rosedale, Capitol Hill, Renfrew, Highland Park, Tuxedo Park, Bankview, 
        Sunalta, Scarboro, Westgate, Signal Hill, Aspen Woods, Springbank Hill, Tuscany, 
        Royal Oak, Arbour Lake, Citadel, Hawkwood, Hamptons, and many more neighborhoods 
        throughout Calgary, Alberta.
      </p>
    </div>
  )
}

