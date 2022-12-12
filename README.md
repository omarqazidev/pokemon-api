# Instructions

## High Level Project Synopsis: 
Using the below referenced datasets, build secure API routes for the accessing of that data. 

## Product Specification #1 – Build an Authentication Server 
**Required:** 
 - Build a service that retrieves all of the Pokemon object data contained within the following JSON data response: http://pokemon.test.dormzi.com/pokemon 
  - Create the following routes:
    - Public route that returns all of the Pokemon images
    - Protected route that returns all of the Pokemon data retrieved via the Pokemon url above.

**Bonus:** 
- Add query filters to your protected route.
- Design your API for pagination usage.

## Product Specification #2 – Store Data

**Required:**
- Using details provided via JSON from the following URL, http://pokemon.test.dormzi.com/pokemon/{id} (i.e., http://pokemon.test.dormzi.com/pokemon/5), build a service that retrieves all of the data for each of the individual Pokemons listed in the URL linked above in Product Specification #1.
- Store all of the individual Pokemon data into the database of your choice. 

**Bonus:**
- Categorize the data into columns/fields/parameters that correspond with their respective data fields, as set in the URL from Product Specification #1 above. 

## Product Specification #3 – Data Sorting

**Required:**
- Using the dataset of your choice amongst those provided by the U.S. Department of Labor’s O*NET system, build data sorting algorithms that will allow for the quick search of the information contained within your chosen dataset:
  - Background information on O*NET: https://www.dol.gov/agencies/eta/onet
  - O*NET 27.0 datasets: https://www.onetcenter.org/database.html#individual-files 

**Bonus:**
- Build API endpoints for each of your data sorting algorithms from above..

**BIG BONUS:**
- Develop data sorting algorithms that allow for the quick search of data amongst several of the O*NET datasets.
- Build API endpoints for the previous item