// portfolio item filter

const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-items"),
      totalPortfolioItem=portfolioItems.length;
      

      for(let i=0; i<totalFilterBtn; i++){
            filterBtns[i].addEventListener("click", function(e){
            filterContainer.querySelector(".active").classList.remove("active")
            this.classList.add("active")

            const filterValue=this.getAttribute("data-filter");
            for(k=0; k<totalPortfolioItem; k++){
                
            }
        }
      }

