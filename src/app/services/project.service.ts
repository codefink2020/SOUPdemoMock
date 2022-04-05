import {Injectable} from '@angular/core';
export interface TeamMembers {
  fullName: string,
  role: string
}

export interface Project {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  name: string,
  status: string,
  customer: string
  worktype: string,
  teamMembers: TeamMembers[],
  projectSettings: String, //ToBE Implemented
  description: string
  modules: Module[],
}

export interface Module {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  name: string,
  platform: string,
  analysis: Analysis[],
  vulSum: VulnerbilitySummary
  history: History[]

}
export interface History {
  name: string,
  series: Series[]

}
export interface Series {
  name: string,
  value: number
}

export interface VulnerbilitySummary {
  severe: number,
  high: number,
  medium: number,
  low: number

}

export interface Analysis {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  timeStamp: string,
  module: string,
  tag: string,
  target: string,
  analyserTool: string,
  analyserVersion: string,
  jenkinsBuildNr: string,
  gitHash: string
  dependencies: Dependency[]
}

export interface Dependency {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  fileName: string,
  version: string,
  productName: string,
  platform: string,
  description: string,
  vulnerabilities: Vulnerability[]
}

export interface Vulnerability {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  cveId: string
  source: string;
  severity: string;
  attackVector: string;
  dependency: string;
  cwe: [];
  description: string;
  cveScore: number;
  confidentialImpact: string;
  integrityImpact: string;
  availabilityImpact: string;
  impactScore: number;
  exploitabilityScore: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {
  }

  project: Project =
    {
      _id: "CarRobot",
      _createdAt: "2022-03-24T13:27:51.756+0100",
      _updatedAt: "2022-03-24T13:27:51.927+0100",
      projectSettings: "",
      name: "Car Robot",
      status: "actief",
      customer: "IKEA",
      worktype: "99002 HouseRobot",
      teamMembers: [
        {
          fullName: "Jeremy Clarkson",
          role: "Know it all"
        },
        {
          fullName: "James May",
          role: "Captain Slow"
        },
        {
          fullName: "Richard Hammond",
          role: "Little Richard"
        },

      ],
      description: "Throughout the series, house robots acted as obstacles to competing robots in battles and challenges.\n" +
        "House robots were permitted to attack robots that were in the Corner Patrol Zones at the corners of the arena or upon the submission of a competing robot.\n" +
        "The house robots were an intrinsic part of the programmes success and merchandising of these robots was highly successful.\n" +
        "Furthermore, the house robots were not subject to the 100 kg (220 lb) weight limit or weapon rules that contestant robots had to adhere to, the most notable example of this was Sergeant Bashs flamethrower.",
      modules: [
        {
          _id: "CarRobot-backend",
          _createdAt: "2022-03-24T13:27:51.927+0100",
          _updatedAt: "2022-03-24T13:27:51.927+0100",
          name: "Backend",
          platform: "sbt",
          analysis: [
            {
              _id: "",
              _createdAt: "",
              _updatedAt: "",
              timeStamp: "2022-03-24T13:27:51.840+0100",
              module: "Backend",
              tag: "release/v2.4.7_1",
              target: "Production",
              analyserTool: "OWASP",
              analyserVersion: "6,3",
              jenkinsBuildNr: "42",
              gitHash: "2c1eb4588e7cb4165235e1c232ce9ba9b5893f21",
              dependencies: [
                {
                  _id: "config-1.4.0.jar",
                  _createdAt: "2022-03-24T13:27:52.021+0100",
                  _updatedAt: "2022-03-24T13:27:52.629+0100",
                  fileName: "config-1.4.0.jar",
                  version: "1.4.0",
                  productName: "config",
                  platform: "sbt",
                  description: "configuration library for JVM languages using HOCON files",
                  vulnerabilities: []
                },
                {
                  _id: "jcache-1.0.1.jar",
                  _createdAt: "2022-03-24T13:27:52.021+0100",
                  _updatedAt: "2022-03-24T13:27:52.717+0100",
                  fileName: "jcache-1.0.1.jar",
                  version: "1.0.1",
                  productName: "jcache",
                  platform: "sbt",
                  description: "Ehcache's wrapper implementation of JSR107 - JCACHE. ",
                  vulnerabilities: []
                },
                {
                  _id: "tyrex-1.0.1.jar",
                  _createdAt: "2022-03-24T13:27:52.022+0100",
                  _updatedAt: "2022-03-24T13:27:52.722+0100",
                  fileName: "tyrex-1.0.1.jar",
                  version: "1.0.1",
                  productName: "tyrex",
                  platform: "sbt",
                  description: "",
                  vulnerabilities: [
                    {
                      _id: "CVE-2009-2704",
                      _createdAt: "2022-03-24T13:27:52.017+0100",
                      _updatedAt: "2022-03-24T13:27:52.702+0100",
                      cveId: "CVE-2009-2704",
                      source: "NVD",
                      severity: "MEDIUM",
                      attackVector: "NETWORK",
                      dependency: "tyrex-1.0.1.jar",
                      cwe: [],
                      description: "CA SiteMinder allows remote attackers to bypass cross-site scripting (XSS) protections for J2EE applications via a request containing a %00 (encoded null byte).",
                      cveScore: 4.3,
                      confidentialImpact: "NONE",
                      integrityImpact: "PARTIAL",
                      availabilityImpact: "NONE",
                      impactScore: 2.9,
                      exploitabilityScore: 8.6
                    },
                    {
                      _id: "CVE-2009-2705",
                      _createdAt: "2022-03-24T13:27:52.017+0100",
                      _updatedAt: "2022-03-24T13:27:52.017+0100",
                      cveId: "CVE-2009-2705",
                      source: "NVD",
                      severity: "MEDIUM",
                      attackVector: "NETWORK",
                      dependency: "tyrex-1.0.1.jar",
                      cwe: [],
                      description: "CA SiteMinder allows remote attackers to bypass cross-site scripting (XSS) protections for J2EE applications via a request containing non-canonical, \"overlong Unicode\" in place of blacklisted characters.",
                      cveScore: 4.3,
                      confidentialImpact: "NONE",
                      integrityImpact: "PARTIAL",
                      availabilityImpact: "NONE",
                      impactScore: 2.9,
                      exploitabilityScore: 8.6
                    }
                  ]
                }
              ]
            }
          ],
          vulSum: {severe: 0, high: 1, medium: 3, low: 10},
          history: [
            {
              name: "Severe",
              series: [
                {
                  name: "21-02-2022",
                  value: 0
                },
                {
                  name: "14-02-2022",
                  value: 1
                },
                {
                  name: "07-02-2022",
                  value: 3
                },
                {
                  name: "01-02-2022",
                  value: 5
                },
                {
                  name: "28-01-2022",
                  value: 5
                },
                {
                  name: "21-01-2022",
                  value: 5
                },

              ]
            },
            {
              name: "High",
              series: [
                {
                  name: "21-02-2022",
                  value: 1
                },
                {
                  name: "14-02-2022",
                  value: 8
                },
                {
                  name: "07-02-2022",
                  value: 2
                },
                {
                  name: "01-02-2022",
                  value: 2
                },
                {
                  name: "28-01-2022",
                  value: 3
                },
                {
                  name: "21-01-2022",
                  value: 4
                },

              ]
            },
            {
              name: "Medium",
              series: [
                {
                  name: "21-02-2022",
                  value: 3
                },
                {
                  name: "14-02-2022",
                  value: 8
                },
                {
                  name: "07-02-2022",
                  value: 4
                },
                {
                  name: "01-02-2022",
                  value: 4
                },
                {
                  name: "28-01-2022",
                  value: 3
                },
                {
                  name: "21-01-2022",
                  value: 2
                },

              ]
            },
            {
              name: "Low",
              series: [
                {
                  name: "21-02-2022",
                  value: 10
                },
                {
                  name: "14-02-2022",
                  value: 8
                },
                {
                  name: "07-02-2022",
                  value: 12
                },
                {
                  name: "01-02-2022",
                  value: 6
                },
                {
                  name: "28-01-2022",
                  value: 5
                },
                {
                  name: "21-01-2022",
                  value: 4
                },

              ]
            },

          ]
        },
        {
          _id: "CarRobot-frontend",
          _createdAt: "2022-03-24T13:27:51.927+0100",
          _updatedAt: "2022-03-24T13:27:51.927+0100",
          name: "Frontend",
          platform: "npm",
          analysis: [
            {
              _id: "",
              _createdAt: "",
              _updatedAt: "",
              timeStamp: "2022-03-24T13:27:51.840+0100",
              module: "frontend",
              tag: "release/v2.4.7_1",
              target: "Production",
              analyserTool: "OWASP",
              analyserVersion: "6,3",
              jenkinsBuildNr: "42",
              gitHash: "2c1eb4588e7cb4165235e1c232ce9ba9b5893455",
              dependencies: [
                {
                  _id: "html-escaper:2.0.2",
                  _createdAt: "2022-04-05T12:59:46.084+0200",
                  _updatedAt: "2022-04-05T12:59:48.358+0200",
                  fileName: "html-escaper:2.0.2",
                  version: "2.0.2",
                  productName: "html-escaper",
                  platform: "npm",
                  description: "fast and safe way to escape and unescape &<>'\" chars",
                  vulnerabilities: []
                },
                {
                  _id: "css:3.0.0",
                  _createdAt: "2022-04-05T12:59:46.083+0200",
                  _updatedAt: "2022-04-05T12:59:49.034+0200",
                  fileName: "css:3.0.0",
                  version: "3.0.0",
                  productName: "css",
                  platform: "npm",
                  description: "CSS parser / stringifier", "vulnerabilities": []
                },
                {
                  _id: "pac-resolver:4.2.0",
                  _createdAt: "2022-04-05T12:59:46.084+0200",
                  _updatedAt: "2022-04-05T12:59:48.350+0200",
                  fileName: "pac-resolver:4.2.0",
                  version: "4.2.0",
                  productName: "pac-resolver",
                  platform: "npm",
                  description: "Generates an asynchronous resolver function from a PAC file",
                  vulnerabilities: [
                    {
                      _id: "CVE-2021-23406",
                      _createdAt: "2022-04-05T12:59:46.073+0200",
                      _updatedAt: "2022-04-05T12:59:48.319+0200",
                      cveId: "CVE-2021-23406",
                      source: "NVD",
                      severity: "CRITICAL",
                      attackVector: "NETWORK",
                      dependency: "pac-resolver:4.2.0",
                      cwe: [],
                      description: "This affects the package pac-resolver before 5.0.0. This can occur when used with untrusted input, due to unsafe PAC file handling. **NOTE:** The fix for this vulnerability is applied in the node-degenerator library, a dependency written by the same maintainer.",
                      cveScore: 7.5,
                      confidentialImpact: "PARTIAL",
                      integrityImpact: "PARTIAL",
                      availabilityImpact: "PARTIAL",
                      impactScore: 6.4,
                      exploitabilityScore: 10
                    },
                    {
                      _id: "1005062",
                      _createdAt: "2022-04-05T12:59:46.072+0200",
                      _updatedAt: "2022-04-05T12:59:48.344+0200",
                      cveId: "1005062",
                      source: "NPM",
                      severity: "high",
                      attackVector: "NB",
                      dependency: "pac-resolver:4.2.0",
                      cwe: [],
                      description: "This affects the package pac-resolver before 5.0.0. This can occur when used with untrusted input, due to unsafe PAC file handling. **NOTE:** The fix for this vulnerability is applied in the node-degenerator library, a dependency written by the same maintainer.",
                      "cveScore": 0,
                      confidentialImpact: "NB",
                      integrityImpact: "NB",
                      availabilityImpact: "NB",
                      impactScore: 0,
                      exploitabilityScore: 0
                    }
                  ]
                }
              ]
            }
          ],
          vulSum: {severe: 0, high: 10, medium: 4, low: 30},
          history:[
            {
              name: "Severe",
              series: [
                {
                  name: "21-02-2022",
                  value: 2
                },
                {
                  name: "14-02-2022",
                  value: 3
                },
                {
                  name: "07-02-2022",
                  value: 4
                },
                {
                  name: "01-02-2022",
                  value: 6
                },
                {
                  name: "28-01-2022",
                  value: 7
                },
                {
                  name: "21-01-2022",
                  value: 9
                },

              ]
            },
            {
              name: "High",
              series: [
                {
                  name: "21-02-2022",
                  value: 3
                },
                {
                  name: "14-02-2022",
                  value: 3
                },
                {
                  name: "07-02-2022",
                  value: 2
                },
                {
                  name: "01-02-2022",
                  value: 4
                },
                {
                  name: "28-01-2022",
                  value: 3
                },
                {
                  name: "21-01-2022",
                  value: 4
                },

              ]
            },
            {
              name: "Medium",
              series: [
                {
                  name: "21-02-2022",
                  value: 10
                },
                {
                  name: "14-02-2022",
                  value: 8
                },
                {
                  name: "07-02-2022",
                  value: 6
                },
                {
                  name: "01-02-2022",
                  value: 7
                },
                {
                  name: "28-01-2022",
                  value: 7
                },
                {
                  name: "21-01-2022",
                  value: 2
                },

              ]
            },
            {
              name: "Low",
              series: [
                {
                  name: "21-02-2022",
                  value: 23
                },
                {
                  name: "14-02-2022",
                  value: 8
                },
                {
                  name: "07-02-2022",
                  value: 12
                },
                {
                  name: "01-02-2022",
                  value: 23
                },
                {
                  name: "28-01-2022",
                  value: 45
                },
                {
                  name: "21-01-2022",
                  value: 47
                },

              ]
            },
          ]
        }


      ]
    }

}

