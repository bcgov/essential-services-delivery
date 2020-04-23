# Essential Services Delivery
Essential Services Delivery coordination using Digitally Verifiable Credentials.

This repository contains the build, deployment, and application configurations needed to pull a number of separate applications into a single environment and deploy them as a group of interrelated services.

The resulting services include:

## Proof of Concept Registration applications:
### [SafeEntryBC](https://safeentrybc.vonx.io/)

Allowing Businesses and Citizen's to create "Safe Entry Points" that require the presentation and proof of a set of digitally verifiable credentials in order to authorize access.

This is an instance of [bcgov/dts-esr-demo](https://github.com/bcgov/dts-esr-demo)

### [BC Essential Services Gateway](https://esg.vonx.io/)

Allowing Businesses to register as an Essential Service and in turn be able to issue Essential Service credentials to their employees.

This is an instance of [bcgov/dts-safe-entry-demo](https://github.com/bcgov/dts-safe-entry-demo)

## A Number of Credential Issuer Services

All of the Issuer Services are instances of [bcgov/identity-kit-poc](https://github.com/bcgov/identity-kit-poc)

### [Unverified Person Issuer](https://openvp-issuer.pathfinder.gov.bc.ca/)

An issuer used to obtain a digital identification credential that is used to authorize access to other services within the PoC.

### [Health Gateway](https://healthbc-issuer.pathfinder.gov.bc.ca/)

An issuer used to obtain a personal health number credential that is used to authorize access to other services within the PoC.

### [Essential Services - Organization](https://esr1-issuer.pathfinder.gov.bc.ca/)

An issuer used to obtain a business level essential services credential that is used to authorize access to other services within the PoC.

### [Essential Services - Access](https://esr2-issuer.pathfinder.gov.bc.ca/)

An issuer used to obtain an essential services access credential that is used to authorize access to other services within the PoC.

### [Med Lab](https://medlab-issuer.pathfinder.gov.bc.ca/)

An issuer used to obtain a "lab result" credential that is used to authorize access to other services within the PoC.

## A Sample Set of Safe Entry Points

Each Safe Entry Point is an instance of [bcgov/vc-visual-verifier](https://github.com/bcgov/vc-visual-verifier)

### [Traveller Safe Entry](https://lngpipeline-camp.vonx.io/)

Demonstrates how digitally verifiable credentials can be used to authorize access to or through a point of entry.

### [Essential Service Safe Entry](https://long-term-care-facility.vonx.io/)

Demonstrates how digitally verifiable credentials can be used to provide essential services workers with authorized access to a location or facility.