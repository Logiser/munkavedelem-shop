import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, Filter, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { productCategories, products } from '../data/productData';

const WorkwearShop = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Szűrt termékek
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || p.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Kosár funkciók
  const addToCart = (product) => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Kérjük, válassz méretet!');
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      size: selectedSize,
      image: product.image
    };

    const existingItem = cart.find(
      item => item.id === product.id && item.size === selectedSize
    );

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id && item.size === selectedSize
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, cartItem]);
    }

    setSelectedProduct(null);
    setSelectedSize(null);
    setQuantity(1);
    alert('Termék hozzáadva a kosárhoz!');
  };

  const removeFromCart = (id, size) => {
    setCart(cart.filter(item => !(item.id === id && item.size === size)));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const getCategoryName = (categoryId) => {
    return productCategories.find(cat => cat.id === categoryId)?.name || '';
  };

  const getCategoryColor = (categoryId) => {
    return productCategories.find(cat => cat.id === categoryId)?.color || '#0F2A1D';
  };

  return (
    <div style={{ backgroundColor: '#fafaf8', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#0F2A1D',
        color: 'white',
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontFamily: 'Georgia, serif' }}>
          🛡️ MunkavédelmiShop
        </h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            onClick={() => setCartOpen(!cartOpen)}
            style={{
              backgroundColor: '#C9A961',
              color: '#0F2A1D',
              padding: '0.75rem 1rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              position: 'relative'
            }}
          >
            <ShoppingCart size={20} />
            Kosár ({cartCount})
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#d32f2f',
                color: 'white',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.5rem'
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Kosár Sidebar */}
      {cartOpen && (
        <div style={{
          position: 'fixed',
          right: 0,
          top: 60,
          width: '100%',
          maxWidth: '400px',
          height: 'calc(100vh - 60px)',
          backgroundColor: 'white',
          boxShadow: '-2px 0 8px rgba(0,0,0,0.2)',
          zIndex: 99,
          overflowY: 'auto',
          padding: '1.5rem'
        }}>
          <h2 style={{ color: '#0F2A1D', marginTop: 0 }}>Kosár</h2>

          {cart.length === 0 ? (
            <p style={{ color: '#666' }}>A kosár üres. Válassz terméket!</p>
          ) : (
            <>
              {cart.map(item => (
                <div key={`${item.id}-${item.size}`} style={{
                  borderBottom: '1px solid #ddd',
                  paddingBottom: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <img src={item.image} alt={item.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: '0 0 0.25rem 0', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        {item.name}
                      </p>
                      {item.size && (
                        <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#666' }}>
                          Méret: {item.size}
                        </p>
                      )}
                      <p style={{ margin: 0, color: '#C9A961', fontWeight: 'bold' }}>
                        {item.price.toLocaleString('hu-HU')} Ft × {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#d32f2f',
                        cursor: 'pointer',
                        fontSize: '1.2rem'
                      }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}

              <div style={{
                backgroundColor: '#0F2A1D',
                color: 'white',
                padding: '1rem',
                borderRadius: '4px',
                marginTop: '1rem'
              }}>
                <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Termékek:</span>
                    <span>{cartTotal.toLocaleString('hu-HU')} Ft</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Szállítás:</span>
                    <span style={{ color: '#C9A961' }}>+1.990 Ft</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  <span>Összesen:</span>
                  <span style={{ color: '#C9A961' }}>
                    {(cartTotal + 1990).toLocaleString('hu-HU')} Ft
                  </span>
                </div>

                <button
                  onClick={() => {
                    navigate('/checkout', { state: { cart, total: cartTotal + 1990 } });
                    setCartOpen(false);
                  }}
                  style={{
                    width: '100%',
                    backgroundColor: '#C9A961',
                    color: '#0F2A1D',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}
                >
                  Rendelés Lezárása
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Hero szekció */}
      <div style={{
        background: `linear-gradient(135deg, #0F2A1D 0%, #1a3f33 100%)`,
        color: 'white',
        padding: '3rem 1.5rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', fontFamily: 'Georgia, serif' }}>
          Munkavédelmi Termékek Katalógusa
        </h2>
        <p style={{ fontSize: '1.1rem', margin: 0, opacity: 0.9 }}>
          75+ termék 5 kategóriában – Cipő, Póló, Nadrág, Kesztyű, Bakancs
        </p>
      </div>

      {/* Kategória szűrő */}
      <div style={{ backgroundColor: 'white', padding: '2rem 1.5rem', borderBottom: '1px solid #ddd' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ color: '#0F2A1D', margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Filter size={20} /> Kategóriák
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                border: `2px solid ${selectedCategory === null ? '#0F2A1D' : '#ddd'}`,
                backgroundColor: selectedCategory === null ? '#0F2A1D' : 'white',
                color: selectedCategory === null ? 'white' : '#0F2A1D',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              ✅ Összes Termék ({products.length})
            </button>

            {productCategories.map(category => {
              const categoryProducts = products.filter(p => p.categoryId === category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '4px',
                    border: `2px solid ${selectedCategory === category.id ? category.color : '#ddd'}`,
                    backgroundColor: selectedCategory === category.id ? category.color : 'white',
                    color: selectedCategory === category.id ? 'white' : '#333',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    transition: 'all 0.3s'
                  }}
                >
                  {category.name} ({categoryProducts.length})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Keresés */}
      <div style={{ backgroundColor: 'white', padding: '1.5rem', borderBottom: '1px solid #ddd' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '4px', padding: '0.5rem' }}>
            <Search size={20} style={{ marginLeft: '0.5rem', color: '#999' }} />
            <input
              type="text"
              placeholder="Termékek keresése..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                backgroundColor: 'transparent',
                padding: '0.75rem',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>
        </div>
      </div>

      {/* Termékek grid */}
      <div style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1.5rem' }}>
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
            <h3>Nincs találat</h3>
            <p>Próbálj más keresési feltételeket!</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProducts.map(product => (
              <div
                key={product.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  borderTop: `4px solid ${getCategoryColor(product.categoryId)}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                {/* Kép */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />

                {/* Tartalom */}
                <div style={{ padding: '1rem' }}>
                  <p style={{ color: '#999', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>
                    {getCategoryName(product.categoryId)}
                  </p>

                  <h3 style={{
                    color: '#0F2A1D',
                    margin: '0 0 0.5rem 0',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}>
                    {product.name}
                  </h3>

                  <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    margin: '0 0 1rem 0',
                    minHeight: '2.4em'
                  }}>
                    {product.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <p style={{ color: '#C9A961', fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
                        {product.price.toLocaleString('hu-HU')} Ft
                      </p>
                      <p style={{ color: '#999', fontSize: '0.85rem', margin: '0.25rem 0 0 0' }}>
                        📦 {product.stock} db készleten
                      </p>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#FFB800',
                      fontSize: '0.9rem'
                    }}>
                      ★ {product.rating}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    style={{
                      width: '100%',
                      backgroundColor: '#0F2A1D',
                      color: 'white',
                      padding: '0.75rem',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    Kosárba
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal - Termék részletei */}
      {selectedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '2rem',
            maxWidth: '500px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <h2 style={{ color: '#0F2A1D', margin: 0, fontSize: '1.5rem' }}>
                {selectedProduct.name}
              </h2>
              <button
                onClick={() => setSelectedProduct(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }}
            />

            <p style={{ color: '#666', marginBottom: '1rem' }}>
              {selectedProduct.description}
            </p>

            <p style={{ color: '#C9A961', fontSize: '1.8rem', fontWeight: 'bold', margin: '1rem 0' }}>
              {selectedProduct.price.toLocaleString('hu-HU')} Ft
            </p>

            {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#0F2A1D' }}>
                  Méret kiválasztása:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                  {selectedProduct.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: '0.75rem',
                        borderRadius: '4px',
                        border: `2px solid ${selectedSize === size ? '#0F2A1D' : '#ddd'}`,
                        backgroundColor: selectedSize === size ? '#0F2A1D' : 'white',
                        color: selectedSize === size ? 'white' : '#0F2A1D',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#0F2A1D' }}>
                Mennyiség:
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <button
              onClick={() => addToCart(selectedProduct)}
              style={{
                width: '100%',
                backgroundColor: '#0F2A1D',
                color: 'white',
                padding: '1rem',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                marginBottom: '0.5rem'
              }}
            >
              Kosárba Tesz
            </button>

            <button
              onClick={() => setSelectedProduct(null)}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                color: '#0F2A1D',
                padding: '1rem',
                borderRadius: '4px',
                border: '2px solid #0F2A1D',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              Mégsem
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0a1f19',
        color: '#999',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ marginBottom: '1rem' }}>
            © 2024 MunkavédelmiShop · Munkavédelmi Ruházat & Felszerelés
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <Link to="/privacy" style={{ color: '#999', textDecoration: 'none' }}>Adatvédelem</Link>
            <Link to="/terms" style={{ color: '#999', textDecoration: 'none' }}>ÁSZF</Link>
            <Link to="/impressum" style={{ color: '#999', textDecoration: 'none' }}>Impresszum</Link>
            <Link to="/shipping" style={{ color: '#999', textDecoration: 'none' }}>Szállítás</Link>
            <Link to="/about" style={{ color: '#999', textDecoration: 'none' }}>Rólunk</Link>
            <Link to="/contact" style={{ color: '#999', textDecoration: 'none' }}>Kapcsolat</Link>
          </div>
          <div style={{
            borderTop: '1px solid #333',
            paddingTop: '1rem'
          }}>
            <Link
              to="/admin-login"
              style={{
                color: '#C9A961',
                textDecoration: 'none',
                fontSize: '0.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Lock size={12} /> Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WorkwearShop;
