/**
 * API Client for Tachyon Labs
 * Connects to Tachy Inc backend (tachyinc.com)
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';
const ORG_ID = process.env.NEXT_PUBLIC_ORG_ID;

/**
 * Base fetch wrapper with error handling
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return { success: true };
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `API Error: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`API request failed [${endpoint}]:`, error);
    throw error;
  }
}

/**
 * Submit contact form / create lead
 */
export async function createLead(formData) {
  return apiRequest('/leads', {
    method: 'POST',
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      company: formData.company || null,
      message: formData.message,
      source: formData.source || 'tachyonlabs-website',
      organizationId: ORG_ID,
      metadata: {
        subject: formData.subject,
        ...(formData.metadata || {}),
      },
    }),
  });
}

/**
 * Subscribe to newsletter
 */
export async function subscribeNewsletter({ email, name, company }) {
  return apiRequest('/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({
      email,
      name: name || null,
      company: company || null,
      source: 'tachyonlabs-website',
      organizationId: ORG_ID,
    }),
  });
}

export const api = {
  createLead,
  subscribeNewsletter,
};

export default api;