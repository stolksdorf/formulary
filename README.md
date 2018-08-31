# formulary
Better interface for the ODB Formulary


ODB Formulary

- Resources
  - Search: https://www.formulary.health.gov.on.ca/formulary/
  - Results: https://www.formulary.health.gov.on.ca/formulary/results.xhtml?q=coversyl&type=2
  - Specific Drug: https://www.formulary.health.gov.on.ca/formulary/detail.xhtml?drugId=02246624
  - Downloads: http://www.health.gov.on.ca/en/pro/programs/drugs/edition_43.aspx
- Ideas:
  - Create an service file that fetches, searches, and parses the xml data
    - Can be fed already parsed data
    - Can also be sent client side
  - On Server side, fetch and parse on boot. Send this data down to the client.
  - Also create an API interface that can be accessed independantly
    - Maybe experiment with API threshold limits?
  - Default re-direct to subdomain for now
  - Possibly look into RxTx for additional data?
    - Build in LP's creds?
    - Maybe prompt the user for their RxTx creds and save them?
  - Load up additional drug data, via open sources. Wikipedia, etc.
    - Ask LP for sources?
- Analytics
  - How important for the project?
  - If we do client side searching, we'll still need to send down anayltics data
  - What to track? IP, general location?
  - Make a fun page showing off analytics
  -


/** INteesting drugs **/

- Niacin
-AMPHOTERICIN B (no strength) (081204001)



/** BUgs **
- Not tracking lccNote
- "Facilitated Access Products" showing up in classification???
- Classification logic is bad, Length of name code indicates deptch
