const siteContent = {
  "nav": {                 
    "nav-item-1": "Services",
    "nav-item-2": "Product",   
    "nav-item-3": "Vision", 
    "nav-item-4": "Features",
    "nav-item-5": "About",   
    "nav-item-6": "Contact",     
    "img-src": "img/logo.png"
  },                         
  "cta": {                        
    "h1": "DOM Is Awesome",  
    "button": "Get Started",      
    "img-src": "img/header-img.png"
  },                              
  "main-content": {      
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",  
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",   
    "services-h4":"Services",                     
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",                                  
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",                                    
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },                                              
  "contact": {                                    
    "contact-h4" : "Contact",                     
    "address" : "123 Way 456 Street Somewhere, USA",           
    "phone" : "1 (888) 888-8888",                             
    "email" : "sales@greatidea.io",                          
  },                                                         
  "footer": {                                                 
    "copyright" : "Copyright Great Idea! 2018"                
  },                                                                     
};                                                                          
                                                                            
// Example: Update the img src for the logo                                 
let logo = document.getElementById("logo-img");                             
logo.setAttribute('src', siteContent["nav"]["img-src"])                    
                                                                           
let ctaImg = document.getElementById("cta-img");                           
ctaImg.setAttribute('src',siteContent["cta"]["img-src"])                   
                                                                       
let middleImg = document.getElementById("middle-img")                  
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"])
                                                                        
let navBar = document.getElementsByTagName("a");                
navBar[0].textContent="Services";                        
navBar[1].textContent="Product" ;                       
navBar[2].textContent="Vision";                        
navBar[3].textContent="Features";                             
navBar[4].textContent="About";                                              
navBar[5].textContent="Contact";                                           
                                                                          
let mainHeading = document.querySelector("h1")                           
mainHeading.textContent="DOM Is Awesome";                      
                                                                       
let button1 = document.querySelector("button")                        
button1.textContent="Get Started";                                   
button1.style.borderColor="black";                                                                                                                                                                                                           
                                                                                                                                                                                                                                                         
let topContenth4 = document.getElementsByTagName("h4")                                                                                                                                                                                                   
topContenth4[0].textContent="Features";                                                                                                                                                                                                                  
topContenth4[1].textContent="About";                                                                                                                                                                                                                     
topContenth4[2].textContent="Services";                                                                         
topContenth4[3].textContent="Products";                                                                        
topContenth4[4].textContent="Vision";                                                                         
                                                                                                                                   
let topContentP = document.getElementsByTagName("p");                                                             
topContentP[0].textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topContentP[1].textContent="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."              
topContentP[2].textContent="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."              
topContentP[3].textContent="Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"               
topContentP[4].textContent="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."                                     
topContentP[5].textContent="123 Way 456 Street Somewhere, USA"
topContentP[6].textContent="1 (888) 888-8888";       
topContentP[7].textContent="sales@greatidea.io";    
topContentP[8].textContent="Copyright Great Idea! 2018"                                                                                                               
let contact1 = document.querySelectorAll(".contact,h4")                                                  
contact1[6].textContent= "Contact";                                     
                                                                                         
                                                                                                              
                                                                                                             
                                                                                                            
                                                                                                            
                                                                                                           
                                                                                                          
                                                                                                      
                                                                                                     
                                                                                                    
                                                                