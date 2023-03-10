import React from "react";

export const LightModeIcon = ({handler,className}) => {
  return (
    <span  onClick={handler} className={className} style={{display:"block"}}>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <rect x="0.5" y="0.5" width="28" height="28" fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_1243_1551" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_1243_1551"
            width="100"
            height="100"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAFIUlEQVR4nO2dTWwVVRiG31MLihITW11QMIUYwEQUE7GJ7vxZiFsKEddqjLrXnRuJukXUxIUrjQvRBbhwpVtjNP4nNGJBoMQfqgFrSyn6uJgZudzee2d678z5zkzPkzTp/Zn5vjPPPWfunfnmjBSJRCKRSCQSiUTqALAGcNZ5RCQB+4A/gQvAXut8Vj3AL1zhrHU+g1L7bg7Q+tg5V+s2DVknELmaKCQwopDAiEICIwoJjCgkMKKQwIhCAqN0IcCNwCPAxrLXHQrAOLAbuME6l54A64Hj6WGMv4E9HmJehYd4k8BCGu4H4PqqY/YN8Gjb9lkCJiuO6U1IKmOpLeTDVcYcCGALcNGnFGC6JdZ0hXE6yVgAbq0qZil0SbwyKSRj+Zn0b3dFMby2qXSAPcCltgZcBh63zm2l9GjLfuvcVkQTpDRGRkadpTRORkYdpTRWRgY12inWKdeB6NLQRWCrdW4ZwLYOPcOrjGFfgZxzh0l+t73XEnetpJ2SfiyyDmBI0oSkByXdI2m7pDFJ69O3zEk6K2lK0heSPpX0uXPu34Jp7pS0puXxZUn7nXOHCy5fP9Kesph++k4DIwWW2QS8TPJbY6WcTpfdVCDOaPr+rPc2a5jqBrCVZMfZU0a6gd5sETgIF4E3gNGcmCNpbsEMpUEAPAacK0FEO78D+6zbVxuAYZJeUTWvA972obUEWAcc9SAj4wiwzrrdQQJcA3zoUUbGR8Seshz8DFPdOGTd/qAg2YFbE0TlvHlhMslX3ylJNxunMivpdufcOcskQqg6OSB7GZI0KulF6yRMewjJr+eflBxCCYFFSbc552asErDuIc8qHBmSdK2kZywTMOshJAcKT0oKrUhgRtK4c+4fi+CWPWRC4cmQpI1KjiSbYCnkIcPYeTxgFdhSiNmnsAC7rAJbCtlmGDuP7VaBc4UAr3KllnUlTNO7cG1Die0om665Vbg9JOV8ywLulvRVHw3KmHHOdTxTBywqrK+8rSw6565rf7LK7ZFh/Tsk0kZPIc65ryW9Imm+j3WfkPRkj9fn+linL/7q9GTF2yOJ0ceKSwH4XtIdVvFz+M45d5dFYMsha8owdh7HrAJbCvnSMHYeZrlZCvnEMHYeZrnFg4vLOSVpywqqHUvFrIekDX7XKn4P3rGSIYVxguq4kvMQIbC6T1A5585IetsyhzbespQhhVPkcEzSLcapzEra7pybtUzC/NCJc+4PSc9Z5yHpaWsZQUFSa2vFQev2BwdJKekHBjKOEktJO0NSbH3Eo4xYbJ0HyeUIhzzIOEjsGcUB9gK/VSDiV1bLpWpFATYAu0gOn/R63wjwGssntOmHBZJecVNOzLXA/YD113A/kFy/N59upI/zpKTLjAEHgFN9iPgZeAkYKxBnGPgsXW4OD/N9mULna9ULnwgChoAJ4AXgfeBbYJbkotDF9P9v0teeB+4tIrxl/fe15da8CQMyusiYB0KofJf0/1DaXlHSPCldZCyFOCSQDKnNnVqDGk7k0iPnYCfMKUQdZWQ0TkqdZWQ0RkqPfUZV8y5Wdg8q320pHQMZld+DqrZSgDs7dPGqp4n1cg+qLlIuATuqijkwwFO+P0Vt8SwmUs4tDzUD2AycTxP1Mt+UTyFpvMmWUeA8MF51zIFIpTwBeKnb9S0kjbkjbePmstdtXuQwKO0S4m3zIqUShQRGFBIYUUhgRCGBEYUERhQSGFFIYDRByMmW/0+YZRFJwMM9qCKRSCQSiUQikUikyfwHv3HGh6GBKUQAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </span>
  );
};
