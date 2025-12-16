/**
 * Script to change a user to SuperAdmin
 * Usage: node scripts/make-superadmin.js <user-uid>
 *
 * Example: node scripts/make-superadmin.js 101517505002590264214
 */

const admin = require('firebase-admin')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env.local') })

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  })
}

const db = admin.firestore()

async function makeSuperAdmin(userUid) {
  try {
    const userRef = db.collection('users').doc(userUid)
    const userDoc = await userRef.get()

    if (!userDoc.exists) {
      console.error(`❌ User with UID ${userUid} not found in Firestore`)
      process.exit(1)
    }

    const userData = userDoc.data()
    console.log(`📋 Current user data:`)
    console.log(`   Email: ${userData.email}`)
    console.log(`   Current Role: ${userData.role}`)
    console.log(`   Name: ${userData.profile?.firstName} ${userData.profile?.lastName}`)

    // Update role to SuperAdmin
    await userRef.update({
      role: 'SuperAdmin',
      category: 'Admin', // SuperAdmin category should be Admin
    })

    console.log(`\n✅ Successfully changed user to SuperAdmin!`)
    console.log(`   User: ${userData.email}`)
    console.log(`   UID: ${userUid}`)
    console.log(
      `\n⚠️  Note: User needs to sign out and sign in again for the role change to take effect.`,
    )

    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

// Get UID from command line arguments
const userUid = process.argv[2]

if (!userUid) {
  console.error('❌ Please provide a user UID')
  console.log('\nUsage: node scripts/make-superadmin.js <user-uid>')
  console.log('\nExample: node scripts/make-superadmin.js 101517505002590264214')
  process.exit(1)
}

makeSuperAdmin(userUid)
