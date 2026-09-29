export interface Business {
  id: string
  name: string
  category: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  waitMinutes: number
  hours: string
}

/** Fictional sample data — there is no real Round Check business directory or live wait-time data behind this. */
export const businesses: Business[] = [
  { id: 'b1', name: 'Maple Plaza', category: 'Personal Care', address: '1200 Maple Ave', city: 'Minneapolis', state: 'MN', zip: '55401', phone: '(612) 555-0101', waitMinutes: 5, hours: 'Mon–Fri 9am–8pm · Sat 9am–6pm · Sun 10am–5pm' },
  { id: 'b2', name: 'Lakeside Wellness', category: 'Health & Wellness', address: '455 Lake St', city: 'Minneapolis', state: 'MN', zip: '55408', phone: '(612) 555-0102', waitMinutes: 18, hours: 'Mon–Fri 9am–8pm · Sat 9am–6pm · Sun 10am–5pm' },
  { id: 'b3', name: 'Riverfront Home Services', category: 'Home Services', address: '88 River Rd', city: 'St. Paul', state: 'MN', zip: '55102', phone: '(651) 555-0103', waitMinutes: 32, hours: 'Mon–Fri 9am–9pm · Sat 9am–7pm · Sun 10am–6pm' },
  { id: 'b4', name: 'Oak Village Fitness', category: 'Fitness & Recreation', address: '2301 Oak Blvd', city: 'Austin', state: 'TX', zip: '78701', phone: '(512) 555-0104', waitMinutes: 12, hours: 'Mon–Sat 9am–8pm · Sun 10am–5pm' },
  { id: 'b5', name: 'Southpark Professional Services', category: 'Professional Services', address: '9 Southpark Way', city: 'Austin', state: 'TX', zip: '78745', phone: '(512) 555-0105', waitMinutes: 45, hours: 'Mon–Sat 9am–8pm · Sun 10am–5pm' },
  { id: 'b6', name: 'Harbor Square Wellness', category: 'Health & Wellness', address: '77 Harbor Dr', city: 'Seattle', state: 'WA', zip: '98101', phone: '(206) 555-0106', waitMinutes: 22, hours: 'Mon–Fri 9am–8pm · Sat 9am–6pm · Sun 10am–5pm' },
  { id: 'b7', name: 'Pine Crossing Personal Care', category: 'Personal Care', address: '640 Pine St', city: 'Seattle', state: 'WA', zip: '98122', phone: '(206) 555-0107', waitMinutes: 8, hours: 'Mon–Fri 9am–8pm · Sat 9am–6pm · Sun 10am–5pm' },
  { id: 'b8', name: 'Elm Street Fitness Studio', category: 'Fitness & Recreation', address: '15 Elm St', city: 'Columbus', state: 'OH', zip: '43215', phone: '(614) 555-0108', waitMinutes: 27, hours: 'Mon–Fri 9am–8pm · Sat 9am–6pm · Sun 10am–5pm' },
]
