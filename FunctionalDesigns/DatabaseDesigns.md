## Database

A Graph database needs to be used to store the vocabulary models and related datasets.  The preference is to use a quad-store, that can in-turn store the information provided by different datasets in a format that is structurally defined to be associated with whatever source / dataset it came from.

The Database should also support both temporal and geospatial informatics.  The ability for the 'knowledge store' to be able to be provided additional information from various sources to improve the model is a usefully important functional requirement.

### Data Structure considerations

There are a series of requirements. 

Spatio-temporal

Geospatial and temporal requirements, should seemingly be built into the core data-structure.  Both have various different qualities; a quick search found this resource, 
https://datacarpentry.org/organization-geospatial/aio/index.html

Primarily (for the purpose of language); there's a requirement to support point, area and vector data; which may in-turn provide an anchor point for other GIS layers to be added seperately, without necessarily being part of the core structure?  

Whereas Temporal Data requires date-time information for when a record was created, the ability to assert a new record that supersedes an older record; at a particular date-time (ie: it may not be at the time a new record is created); also date-time for when a record is intended to be associated to / applied to, which may be a period of time; that may also be approximated and/or subject to enumerated inferencing.

Confidence Level;

There needs to be an ability to assert a confidence level to fields; and, there also needs to be a way for an enumerated confidence level to be associated with records also, yet the implication / challenge becomes, that there's various different types of 'algorithms' that could be employed to define - what is essentially, different perspectives. 

and this is in-turn also associated to the geospatial and temporal environments; as people have different views in different places at different times, which has ontological importance.

CryptographicHash

As a consequence of these systems being decentralised; there needs to be a way to validate whether the record is the same as another record otherwise assumed to be the same elsewhere on the network.  

Quads; subject, predicate, object and graph label; noting, it is desirable to be compatible with RDF / Sparql Star:
https://w3c.github.io/rdf-star/cg-spec/2021-07-01.html#introduction 


#### DataTypes
TBA



