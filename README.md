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

All of the Issuer Services are instances of [bcgov/issuer-kit](https://github.com/bcgov/issuer-kit)

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

## Managing the Configurations

This repository contains a set of [openshift-developer-tools](https://github.com/BCDevOps/openshift-developer-tools/tree/master/bin) compatible OpenShift configurations

For information on how to use these configurations with the `openshift-developer-tools scripts` please refer to the documentation; [README.md](https://github.com/BCDevOps/openshift-developer-tools/blob/master/bin/README.md).

### Managing Profiles
The application components are managed using a set of profiles.

To list the profile and their descriptions run:
```
Wade@hvWin10x64 MINGW64 /c/essential-services-delivery/openshift
$ ./manage -p default -e null listProfiles

Loading settings ...
Loading settings from /c/essential-services-delivery/openshift/settings.sh ...

bc - settings.bc.sh
  - Safe Entry application profile
business-registration - settings.business-registration.sh
  - Essential Services Registry application profile
esr1 - settings.esr1.sh
  - Credential issuer profile
esr2 - settings.esr2.sh
  - Credential issuer profile
healthbc - settings.healthbc.sh
  - Credential issuer profile
medlab - settings.medlab.sh
  - Credential issuer profile
openvp - settings.openvp.sh
  - Credential issuer profile
safe-entry-c19 - settings.safe-entry-c19.sh
  - Visual verifier profile
safe-entry - settings.safe-entry.sh
  - Visual verifier profile
default - settings.sh
```

To get the details of a specific profile run:
```
Wade@hvWin10x64 MINGW64 /c/essential-services-delivery/openshift
$ ./manage -p healthbc -e null profileDetails

Loading settings ...
Loading settings from /c/essential-services-delivery/openshift/settings.sh ...
Loading settings from /c/essential-services-delivery/openshift/settings.healthbc.sh ...

healthbc - settings.healthbc.sh
  - Credential issuer profile
  - ../openshift/templates/agent/agent-build.json
  - ../openshift/templates/api/api-build.json
  - ../openshift/templates/db/db-build.json
  - ../openshift/templates/issuer-web/issuer-web-build.json
  - ../openshift/templates/issuer-web-base-image/issuer-web-base-image-build.json
  - ../openshift/templates/wallet/wallet-build.json
  - ../openshift/templates/agent/agent-deploy.yaml
  - ../openshift/templates/api/api-deploy.json
  - ../openshift/templates/db/db-deploy.json
  - ../openshift/templates/issuer-web/issuer-web-deploy.json
  - ../openshift/templates/wallet/wallet-deploy.json
```

To publish or update the settings and configuration for all application profiles you can use the `deployAllProfiles` helper command in the `manage` script, for example;
```
Wade@hvWin10x64 MINGW64 /c/essential-services-delivery/openshift
$ ./manage -p default -e test -u deployAllProfiles
```
- To update all profiles in the test environment.

To publish or update a given profile or a given component within a profile you would use the `genDepls.sh` script. for example;
```
Wade@hvWin10x64 MINGW64 /c/essential-services-delivery/openshift
$ genDepls.sh -p healthbc -e test -u -c issuer-web
```
- To update the `issuer-web` component of the `healthbc` profile.

### Generating New Profiles

For `Credential issuer` and `Visual verifier` there are helper commands that allow you to create the scaffolding for a new profile from an existing one; `createNewIssuerProfile` and `createNewVerifierProfile`.  Examples of how to use these commands can be found in the help documentation for the `manage` script by running;
```
Wade@hvWin10x64 MINGW64 /c/essential-services-delivery/openshift
$ ./manage -h
```

### Creating or Updating Proof Configurations

New or updated proof configurations need to be registered with the vc-authn-oidc-controller associated with the demo environment.  The `manage` script includes a helper command to assist with this task, `configureProof`.  Examples of how to use this command can be found in the help documentation for the `manage` script by running;
```
Wade@hvWin10x64 MINGW64 /c/essential-services-delivery/openshift
$ ./manage -h
```

### Managing the Environments

The `manage` script includes a number of helper commands to help manage the environment.  For a list of these commands and examples of how to use them run;

```
Wade@hvWin10x64 MINGW64 /c/essential-services-delivery/openshift
$ ./manage -h
```

## Getting Help or Reporting an Issue

To report bugs/issues/feature requests, please file an [issue](../../issues).

## How to Contribute

If you would like to contribute, please see our [CONTRIBUTING](./CONTRIBUTING.md) guidelines.

Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). 
By participating in this project you agree to abide by its terms.