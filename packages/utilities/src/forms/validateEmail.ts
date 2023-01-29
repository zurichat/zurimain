/**
 *
 * @param email input string to validate
 * @returns true is `email` is valid, false otherwise
 */

export default function validateEmail(email: string): RegExpMatchArray | null {
  const match = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  console.log(match);
}
