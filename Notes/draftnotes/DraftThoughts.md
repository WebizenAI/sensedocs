
So, thoughts for today... 

NB: i've extracted the links (that i've put into this docs / notes section) into [[InterestingTechNotes]]. 

There's alot of available datasets.  So, the problem isn't so much about getting the data, its more about how to define the processes relating to the lifecycle use and availability of a complex model / system.

In terms of requirements; the most basic requirement is that it needs to operate on a mid-range consumer laptop and/or devices that are at least that powerful, understanding of course; that if its alot more powerful then that's not so much of a problem.

Then the next issue is that there needs to be a foundational strategy for how to store and process the structured data.  The objective belief is that a quad-store approach is best, noting also that there's a new spec https://github.com/w3c/rdf-star-wg/ 

IF the SemWeb ecosystem is employed, it provides relatively standardised interfaces; so, whilst some parts may need to be implemented in a different language, etc.  that's thought to be less difficult than inventing some new series of methods, etc. 

Yet, that means that the primary query interfaces are HTTP based; so, there's a bunch of stuff in there about the permissive commons stuff.  

(which is where it starts to get more difficult). 

Streaming Quads / Data.
As the ecosystem grows, perhaps quickly, the ability to ensure the data is streamed or streamable is fairly important.  Then the means to seek to achieve a solution that can scale without the use of large cloud-platforms, becomes part of a broader p2p design.  

There probably needs to be some sort of 'curators', that should be loosely coupled (ie; not one big corporation) and provide meaningful support for local needs; which in-turn raises an array of important commercial issues, questions, business systems strategies & requirements.  Nonetheless. 

https://linkeddatafragments.org/ 
https://linkeddatafragments.org/software/
javascript or python  (or java)

Then there's stuff like gun.eco - which is super-fast, but only likes graphql. 
https://gun.eco/
https://gun.eco/docs/Awesome-GUN

Another interesting piece of work is: https://github.com/AKSW/QuitStore which stores quads in git.

So, what if the storage layer was able to be provided a definition of a package.  and/or a bunch of objects that it knows it needs; that it'll go get from whatever...

or am I barking up the wrong tree; because, the raw data format is going to be structured into a process machine learning model of some sort (cnn, nn, ml, dl, etc.); and so therefore, what needs to be considered is how to fragment these models sufficently for runtime; then either progressively or dynamically load them; and perhaps have a management interface that defines which ones should be kept running as a priority.  

### Chat with ChatGPT

incremental learning

Federated Learning

1.  TensorFlow Federated (TFF) - A library for federated machine learning built on top of TensorFlow. It provides a high-level API for building and training federated models, as well as tools for experimentation and analysis.
    
2.  PySyft - A library for secure, privacy-preserving deep learning. It extends PyTorch to support federated learning and differential privacy.
    
3.  OpenMined - An open-source platform for privacy-preserving AI. It provides a suite of tools for federated learning, including libraries for building models and performing federated optimization.
    
4.  deepSpeed - A library for accelerating deep learning on large-scale clusters. It includes support for federated learning and other distributed machine learning techniques.
    
5.  FedAvg - A simple implementation of the federated averaging algorithm, which is a core component of federated learning. This implementation is written in Python and is intended to be a reference implementation for learning about federated learning.


1.  GoFL - A library for federated learning in Go. It provides a flexible and efficient implementation of the federated averaging algorithm, along with other commonly used federated learning algorithms.
    
2.  Go-Federated - A library for federated machine learning in Go. It provides tools for building and training federated models, as well as support for data privacy and security.
    
3.  GoFederatedLearning - A library for federated learning in Go. It provides a high-level API for building and training federated models, as well as tools for data privacy and security.
    

These are just a few examples of the federated learning libraries available in Go. When choosing a library, it is important to consider factors such as compatibility with your existing tools and frameworks, ease of use, and community support.

NOTE:  i think it just made that up...  But I found the python versions...

https://github.com/intel/openfl


Sharding - thought i'd ask ChatGPT

sharding can be applied to RNN, Graph RNN, CNN and other related models. Sharding refers to splitting a large model or dataset into smaller, manageable pieces called "shards". This can help to distribute the computational load and memory requirements of the model across multiple nodes, allowing for faster and more efficient training.

For example, in neural network models, the weights of the model can be split across multiple GPUs or nodes, each handling a portion of the computation during training. This allows for parallel processing, reducing the time it takes to train the model. The resulting weight updates can be combined to form the final model.

In RNNs and other sequence models, data can be split into smaller sequences and trained on separate nodes, with the final model being the average of the local models. However, this approach can lead to decreased accuracy in some cases, as the context information between the shards may be lost. To address this, more advanced sharding strategies, such as layer-wise or weight-wise sharding, can be used to balance the trade-off between accuracy and computational efficiency.

DataTypes considerations..

Geospatial Co-ordinates and/or shapes (ie: areas)

This then associates with an array of place names, graphic markers, and other sorts of information. 

Which is all measured against a timeline framework.

There's an issue with data-quality; there's going to be people who 'accidentially' (or intentionally and strategically) create or provide information that has poor data-hygiene (ie: its full of BS, perhaps BS that's very old). 

Then there is as consideration about 'chunking' and/or 'sharding' and/or other methods, that not-only relate to the computational process; but also, to the media type that's associated with the training process - or perhaps more accurately, the initialisation of the training process.

There needs to be a bunch of algorithms to solve 'optimization problems'.

Future tech:

Approximate Optimization Algorithm (QAOA), which can be used to optimize the parameters of a machine learning model.

Neuromorphic algorithms include Spiking Neural Networks (SNNs), Liquid State Machines (LSMs), and Neuromorphic Hardware Systems.

Which are amongst the things that are not expected to be readily available anytime soon.

So...

I'll circle back in a tic.

My thinking is generally; leading me to consider, various older examples relating to P2P networks and how content can be distributed a bit like a swarm approach;  one example I am thoughtful of was called '[bitraider](https://web.archive.org/web/20100214004317/http://www.bitraider.com/)', yet the indice isn't simply about the distribution methodology, but also the ability to 'stream games' and other functional software (which, fwiw, goes back a bit earlier to [distream](https://web.archive.org/web/20041230121452/http://www.distream.com/), in that graphed example); nowtherefore, 

What i'm thinking about, is how to form what is in-effect a distributed computational network that is cooperatively operating, with strong 'Human Centric' controls, to support, a training model that uses chunks and/or sharding, and/or a multiplexer like approach to produce training model components; that are in-turn designed to render support for the optimisation and user-experience related issues; not unlike the sorts of problems that needed to be addressed in the early media / game encoding and streaming platforms.

(next day)

SO, i'm festering on how to describe the concepts associated with the; various complex stuff.  So, there needs to be a private agent.  

https://github.com/oxigraph/oxigraph is written in rust.  

There's various notes about the benefits of rust for memory-safe code...  
https://asecuritysite.com/rust

but that's essentially at runtime. then the other implications is that part of what is required here, is the process of 'model construction', associated to the production of ontology; rather than more simply or perhaps as is better worded; procedurally, the consumption of it. 

Herein; still working on the 'optimisation' problems; i guess...  

Therein also is the verifiability of the information such that it may be considered a form of electronic evidence rather than merely something of far less legal worth.

ATM: information and/or records about persons is stored in large 'silos', which have a different 'trust framework' associated to it; whilst the information stored in records may have the capacity to be changed in ways that are otherwise not reasonably able to be done by end-users (consumers) these sorts of qualities are then in-turn lost if the information is extracted from those platforms into a different system, that then in-turn has different properties / characteristics, etc. 

One of the greater problems; relates to the tamper evidence or ability to reliably infer the content has not changed from the time-date stamp associated to the content artifact (unless the provider has changed the content); examples of where this considation applies include email and various social media systems - also document systems, etc.  

https://en.wikipedia.org/wiki/Global_workspace_theory
https://en.wikipedia.org/wiki/Integrated_information_theory
https://en.wikipedia.org/wiki/Attention_schema_theory
https://plato.stanford.edu/entries/private-language/
https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html
https://nautil.us/roger-penrose-on-why-consciousness-does-not-compute-236591/

### Informatics theory

There's a standard developing called RDF Star.
https://w3c.github.io/rdf-star/cg-spec/editors_draft.html

A few years ago, i made a few notes about the concept of 'quins': https://www.w3.org/Search/Mail/Public/search?keywords=quins 

The core syntatic approach associates with a triple or quad; which is then extended via star, but there's two other factors at least - the first is signatures (decentralised validation schema of some sort); the second is temporal.  Overall the question that has an unknown answer, is about the dimensionality of the native structure, which thereafter needs to be mapped to RDF-star / Sparql-star compatible solutions (ideally also, convertable to other formats). 

NOTE:  write a call to action to seek AI specialists to write about the importance of Human Centric AI.  

Also note: need to define - What is Human Centric AI? 

