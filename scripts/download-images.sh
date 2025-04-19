#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download hero images
curl -o public/kitchen-1.jpg "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2968&auto=format&fit=crop"
curl -o public/bathroom-1.jpg "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2940&auto=format&fit=crop"
curl -o public/home-1.jpg "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop"
curl -o public/interior-1.jpg "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?q=80&w=2940&auto=format&fit=crop"

# Download gallery images
curl -o public/kitchen-2.jpg "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2940&auto=format&fit=crop"
curl -o public/bathroom-2.jpg "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2940&auto=format&fit=crop"
curl -o public/home-2.jpg "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2940&auto=format&fit=crop"
curl -o public/interior-2.jpg "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2940&auto=format&fit=crop"

# Download award images
curl -o public/prism-award.png "http://www.jgremodelingandconstruction.com/images/skin1/prism2.png"
curl -o public/nkba-logo.png "http://www.jgremodelingandconstruction.com/images/skin1/nkba.png" 