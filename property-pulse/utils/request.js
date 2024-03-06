const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch All Properties
async function fetchProperties() {
  try {
    // Handle the case where the domain is not yet available
    if (!apiDomain) return [];

    const res = await fetch(`${apiDomain}/properties`, { cache: 'no-cache' });
    if (!res.ok) {
      throw new Error('Failed to fetch the Properties data...');
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch Single Property

async function fetchProperty(id) {
  try {
    // Handle the case where the domain is not yet available
    if (!apiDomain) return null;

    const res = await fetch(`${apiDomain}/properties/${id}`, {
      cache: 'no-cache',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch the Property data...');
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { fetchProperties, fetchProperty };
