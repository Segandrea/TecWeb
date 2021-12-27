export function signinRoute(returnTo) {
  return {
    name: "Signin",
    params: { returnTo },
  };
}

export function readBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(btoa(reader.result));
    reader.onerror = (err) => reject(err);

    reader.readAsBinaryString(file);
  });
}

export function toUploads(files) {
  const uploads = Array.from(files).map((file) => {
    return readBase64(file).then((data) => {
      const type = file.type;
      return { type, data };
    });
  });

  return Promise.all(uploads);
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}
